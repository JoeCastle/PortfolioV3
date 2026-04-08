//https://stackoverflow.com/questions/61951380/intersection-observer-fails-sometimes-when-i-scroll-fast
//https://www.smashingmagazine.com/2018/01/deferring-lazy-loading-intersection-observer-api/
import { useState, useEffect } from 'react';
import globals from '../utils/globals';

/**
 * NavLink ids.
 */
export enum NavLinkIdType {
    Landing = 'landing-navlink',
    About = 'about-navlink',
    Commercial = 'commercial-navlink',
    Projects = 'projects-navlink',
    Skills = 'skills-navlink',
    Blog = 'blog-navlink',
    Contact = 'contact-navlink',
}

/**
 * Page section component ids.
 */
export enum PageSectionIdType {
    Landing = 'landing-content-container',
    About = 'about-content-container',
    Commercial = 'commercial-work-content-container',
    Projects = 'project-summary-content-container',
    Skills = 'skills-summary-content-container',
    Blog = 'blog-summary-content-container',
    Contact = 'contact-content-container',
}

/**
 * Maps each page section id to the corresponding nav link id.
 */
const sectionToNavLinkMap: Record<PageSectionIdType, NavLinkIdType> = {
    [PageSectionIdType.Landing]: NavLinkIdType.Landing,
    [PageSectionIdType.About]: NavLinkIdType.About,
    [PageSectionIdType.Commercial]: NavLinkIdType.Commercial,
    [PageSectionIdType.Projects]: NavLinkIdType.Projects,
    [PageSectionIdType.Skills]: NavLinkIdType.Skills,
    [PageSectionIdType.Blog]: NavLinkIdType.Blog,
    [PageSectionIdType.Contact]: NavLinkIdType.Contact,
};

// Shared module-level state so every hook instance contributes to one nav-highlight calculation.
// Each section component calls useOnScreen, but the active nav item should be decided globally.
const trackedSections: Map<PageSectionIdType, Element> = new Map<PageSectionIdType, Element>();
let listenersAttached: boolean = false;
let mountedObserverCount: number = 0;

const getScrollContainer = (): HTMLElement | null => document.getElementById('page-parent');

const getSortedTrackedSections = (): [PageSectionIdType, Element][] => {
    // Re-sort each time to reflect current viewport position while scrolling.
    return Array.from(trackedSections.entries()).sort((a, b) => {
        return a[1].getBoundingClientRect().top - b[1].getBoundingClientRect().top;
    });
};

/**
 * Picks the section that intersects an offset line in the viewport, with sensible fallbacks.
 * @param offsetPx The viewport offset used as the active section line.
 * @returns The current active page section id.
 */
const getActiveSectionId = (offsetPx: number): PageSectionIdType | null => {
    const orderedSections: [PageSectionIdType, Element][] = getSortedTrackedSections();

    if (orderedSections.length === 0) {
        return null;
    }

    // Primary rule: pick the section currently crossing the offset line.
    // This gives stable "current section" behavior for long sections.
    for (const [sectionId, sectionElement] of orderedSections) {
        const rect: DOMRect = sectionElement.getBoundingClientRect();

        if (rect.top <= offsetPx && rect.bottom > offsetPx) {
            return sectionId;
        }
    }

    // Fallback 1: if no section crosses the line, use the next section below it.
    // This helps avoid stale nav state during fast scroll changes.
    for (const [sectionId, sectionElement] of orderedSections) {
        if (sectionElement.getBoundingClientRect().top > offsetPx) {
            return sectionId;
        }
    }

    // Fallback 2: if we've scrolled past all sections, keep the last section active.
    return orderedSections[orderedSections.length - 1][0];
};

/**
 * Sets the active nav link from the current viewport position.
 */
const updateActiveNavFromViewport = (): void => {
    const activeSectionId: PageSectionIdType | null = getActiveSectionId(globals.navActiveSectionOffsetPx);
    const activeNavLink: NavLinkIdType | null = activeSectionId ? sectionToNavLinkMap[activeSectionId] : null;
    setActiveClass(activeNavLink);
};

const handleScrollOrResize = (): void => {
    updateActiveNavFromViewport();
};

const attachTrackingListeners = (): void => {
    if (listenersAttached) {
        return;
    }

    // Recalculate active section while the container scrolls and when viewport size changes.
    getScrollContainer()?.addEventListener('scroll', handleScrollOrResize, { passive: true });
    window.addEventListener('resize', handleScrollOrResize);
    listenersAttached = true;
};

const detachTrackingListeners = (): void => {
    // Keep listeners alive while at least one section observer is still mounted.
    if (!listenersAttached || mountedObserverCount > 0) {
        return;
    }

    getScrollContainer()?.removeEventListener('scroll', handleScrollOrResize);
    window.removeEventListener('resize', handleScrollOrResize);
    listenersAttached = false;
};

/**
 * This hook is used to determine whether a component (element) is on screen.
 * It is specifically used for the nav links to apply styling for the component currently in view. The styling changes as you scroll or click a different nav link.
 * See https://usehooks.com/useOnScreen/
 * Also informed by:
 * https://stackoverflow.com/questions/61951380/intersection-observer-fails-sometimes-when-i-scroll-fast
 * https://www.smashingmagazine.com/2018/01/deferring-lazy-loading-intersection-observer-api/
 * @param ref The ref of the element being observed.
 * @param rootMargin The scroll offset. Determines how many pixels of the component (element) can show before it's triggered.
 * @returns True if on screen, false if not.
 */
export default function useOnScreen(ref: React.MutableRefObject<Element>, rootMargin = '-300px'): boolean {
    // State and setter for storing whether element is visible
    const [isIntersecting, setIntersecting] = useState<boolean>(false);

    useEffect(() => {
        const observerRef: React.MutableRefObject<Element> = ref;

        if (observerRef.current) {
            // Register this section in the shared map so nav calculation can compare all sections.
            const sectionId: PageSectionIdType = observerRef.current.id as PageSectionIdType;
            trackedSections.set(sectionId, observerRef.current);
        }

        mountedObserverCount += 1;
        attachTrackingListeners();

        const observer: IntersectionObserver = new IntersectionObserver(
            ([entry]: IntersectionObserverEntry[]) => {
                // Keep per-section visibility state for existing consumers of this hook.
                setIntersecting(entry.isIntersecting);

                // Nav highlight is determined globally from viewport position, not only this entry.
                updateActiveNavFromViewport();
            },
            {
                rootMargin,
            },
        );

        if (observerRef.current) {
            observer.observe(observerRef.current);
        }

        // Ensure nav state is correct immediately after mount.
        updateActiveNavFromViewport();

        return () => {
            if (observerRef.current) {
                observer.unobserve(observerRef.current);

                // Remove this section from global tracking when it unmounts.
                const sectionId: PageSectionIdType = observerRef.current.id as PageSectionIdType;
                trackedSections.delete(sectionId);
            }

            mountedObserverCount = Math.max(0, mountedObserverCount - 1);
            detachTrackingListeners();
        };
    }, [ref, rootMargin]);

    return isIntersecting;
}

/**
 * Add the "active" CSS class to the NavLink of the matching Id. Remove "active" class from other NavLinks.
 * @param elementId Id of the NavLink element to add the "active" class to. Removes from all if null.
 */
const setActiveClass = (elementId: NavLinkIdType | null): void => {
    for (const id of Object.values(NavLinkIdType)) {
        const element: HTMLElement | null = document.getElementById(id);
        if (element) {
            element.classList.toggle('active', element.id === elementId && elementId !== null);
        }
    }
};
