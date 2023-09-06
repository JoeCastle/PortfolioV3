import { useEffect, useRef } from 'react';
import { Location, useLocation } from 'react-router-dom';

// Credit: https://dev.to/mindactuate/scroll-to-anchor-element-with-react-router-v6-38op
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
                document.getElementById(lastHash.current)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                lastHash.current = '';
            }, 100);
        }
    }, [location]);

    return null;
}

export default ScrollToAnchor;
