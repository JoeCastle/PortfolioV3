//https://stackoverflow.com/questions/61951380/intersection-observer-fails-sometimes-when-i-scroll-fast
//https://www.smashingmagazine.com/2018/01/deferring-lazy-loading-intersection-observer-api/
import { useState, useEffect } from "react";

/**
 * NavLink ids.
 */
export enum NavLinkIdTypes {
    About = "about-navlink",
    Projects = "projects-navlink",
    Skills = "skills-navlink",
    Contact = "contact-navlink"
}

/**
 * Page section component ids.
 */
export enum PageSectionIdTypes {
    About = "introduction-content-container",
    Projects = "project-summary-content-container",
    Skills = "skills-summary-content-container",
    Contact = "contact-content-container",
    FourZeroFour = "404-content-container"
}

// See - https://usehooks.com/useOnScreen/
export default function useOnScreen<T extends Element>(ref: React.MutableRefObject<T>, rootMargin = "0px"): boolean {
    // State and setter for storing whether element is visible
    const [isIntersecting, setIntersecting] = useState<boolean>(false);

    useEffect(() => {
        const observerRef: React.MutableRefObject<T> = ref;
        const observer: IntersectionObserver = new IntersectionObserver(
            ([entry]: IntersectionObserverEntry[]) => {
                // Update our state when observer callback fires
                if (entry.isIntersecting) {
                    setIntersecting(entry.isIntersecting);
                    setClasses(observerRef);
                }
            },
            {
                rootMargin
            }
        );

        if (observerRef.current) {
            observer.observe(observerRef.current);
        }
        return () => {
            if (observerRef.current) {
                observer.unobserve(observerRef.current);
            }
        };
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return isIntersecting;
}

/**
 * Convert the id of the observed component to the id of the NavLink that should be active.
 * @param ref Ref of the element being observed.
 */
const setClasses = <T extends Element>(ref: React.MutableRefObject<T>): void => {
    switch (ref.current.id) {
        case PageSectionIdTypes.About:
            setActiveClass(NavLinkIdTypes.About);
            break;
        case PageSectionIdTypes.Projects:
            setActiveClass(NavLinkIdTypes.Projects);
            break;
        case PageSectionIdTypes.Skills:
            setActiveClass(NavLinkIdTypes.Skills);
            break;
        case PageSectionIdTypes.Contact:
            setActiveClass(NavLinkIdTypes.Contact);
            break;
        default:
            setActiveClass(null);
            break;
    }
}

/**
 * Add the "active" CSS class to the NavLink of the matching Id. Remove "active" class from other NavLinks.
 * @param elementId Id of the NavLink element to add the "active" class to. Removes from all if null.
 */
const setActiveClass = (elementId: NavLinkIdTypes | null): void => {
    const introElement: HTMLElement | null = document.getElementById(NavLinkIdTypes.About);
    const projectsElement: HTMLElement | null = document.getElementById(NavLinkIdTypes.Projects);
    const skillsElement: HTMLElement | null = document.getElementById(NavLinkIdTypes.Skills);
    const contactElement: HTMLElement | null = document.getElementById(NavLinkIdTypes.Contact);

    const elements: (HTMLElement | null)[] = [introElement, projectsElement, skillsElement, contactElement];

    elements.forEach((element: HTMLElement | null) => {
        if (element) {
            if (element.id === elementId && elementId !== null) {
                element.classList.add("active");
            } else {
                element.classList.remove("active");
            }
        }
    })
}