//https://stackoverflow.com/questions/61951380/intersection-observer-fails-sometimes-when-i-scroll-fast
//https://www.smashingmagazine.com/2018/01/deferring-lazy-loading-intersection-observer-api/
import { useState, useEffect } from 'react';

/**
 * NavLink ids.
 */
export enum NavLinkIdType {
    Landing = 'landing-navlink',
    About = 'about-navlink',
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
    Projects = 'project-summary-content-container',
    Skills = 'skills-summary-content-container',
    Blog = 'blog-summary-content-container',
    Contact = 'contact-content-container',
}

/**
 * Maps PageSectionIdTypes to their corresponding NavLinkIdTypes
 */
const sectionToNavLinkMap: Record<PageSectionIdType, NavLinkIdType> = {
    [PageSectionIdType.Landing]: NavLinkIdType.Landing,
    [PageSectionIdType.About]: NavLinkIdType.About,
    [PageSectionIdType.Projects]: NavLinkIdType.Projects,
    [PageSectionIdType.Skills]: NavLinkIdType.Skills,
    [PageSectionIdType.Blog]: NavLinkIdType.Blog,
    [PageSectionIdType.Contact]: NavLinkIdType.Contact,
};

/**
 * This hook is used to determine whether a component (element) is on screen.
 * It is specifically used for the nav links to apply styling for the component currently in view. The styling will change ass you scroll or if you click a different nav link.
 * See https://usehooks.com/useOnScreen/
 * @param ref The ref of the element being observed.
 * @param rootMargin The scroll offset. Determines how many pixels of the component (element) can show before it's triggered.
 * @returns True if on screen, false if not.
 */
export default function useOnScreen(ref: React.MutableRefObject<Element>, rootMargin = '-300px'): boolean {
    // State and setter for storing whether element is visible
    const [isIntersecting, setIntersecting] = useState<boolean>(false);

    useEffect(() => {
        const observerRef: React.MutableRefObject<Element> = ref;
        const observer: IntersectionObserver = new IntersectionObserver(
            ([entry]: IntersectionObserverEntry[]) => {
                // Update our state when observer callback fires
                if (entry.isIntersecting) {
                    setIntersecting(entry.isIntersecting);
                    setClasses(observerRef);
                }
            },
            {
                rootMargin,
            },
        );

        if (observerRef.current) {
            observer.observe(observerRef.current);
        }
        return () => {
            if (observerRef.current) {
                observer.unobserve(observerRef.current);
            }
        };
        // eslint-disable-next-line
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return isIntersecting;
}

/**
 * Convert the id of the observed component to the id of the NavLink that should be active.
 * @param ref Ref of the element being observed.
 */
const setClasses = (ref: React.MutableRefObject<Element>): void => {
    const sectionId: PageSectionIdType = ref.current.id as PageSectionIdType;
    const activeNavLink: NavLinkIdType = sectionToNavLinkMap[sectionId];
    setActiveClass(activeNavLink || null);
};

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
