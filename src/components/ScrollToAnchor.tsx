import { useEffect, useRef } from 'react';
import { Location, useLocation } from 'react-router-dom';
import globals from '../utils/globals';

/**
 * Scrolls to an element inside the page scroll container while applying a fixed offset.
 * @param elementId Target element id.
 * @param offsetPx Top offset in pixels (for sticky nav and spacing).
 */
const scrollToElementWithOffset = (elementId: string, offsetPx: number): void => {
    const targetElement: HTMLElement | null = document.getElementById(elementId);
    if (!targetElement) {
        return;
    }

    const pageContainer: HTMLElement | null = document.getElementById('page-parent');
    if (!pageContainer) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
    }

    const containerRect: DOMRect = pageContainer.getBoundingClientRect();
    const targetRect: DOMRect = targetElement.getBoundingClientRect();
    const absoluteTop: number = pageContainer.scrollTop + (targetRect.top - containerRect.top);
    const top: number = Math.max(0, absoluteTop - offsetPx);

    pageContainer.scrollTo({ top, behavior: 'smooth' });
};

// Credit: https://dev.to/mindactuate/scroll-to-anchor-element-with-react-router-v6-38op
/**
 * Scrolls smoothly to a hash anchor after route changes.
 * @returns Null because this helper component has no UI.
 */
function ScrollToAnchor(): null {
    const location: Location = useLocation();
    const lastHash: React.MutableRefObject<string> = useRef('');

    // listen to location change using useEffect with location as dependency
    // https://jasonwatmore.com/react-router-v6-listen-to-location-route-change-without-history-listen
    useEffect(() => {
        if (location.hash) {
            lastHash.current = location.hash.slice(1); // safe hash for further use after navigation
        }

        if (lastHash.current && document.getElementById(lastHash.current)) {
            setTimeout(() => {
                scrollToElementWithOffset(lastHash.current, globals.anchorScrollOffsetPx);
                lastHash.current = '';
            }, 100);
        }
    }, [location]);

    return null;
}

export default ScrollToAnchor;
