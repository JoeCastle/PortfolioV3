import React, { useRef } from 'react';
import commercialWork from '../../../data/commercialWork';
import useOnScreen, { PageSectionIdType } from '../../../hooks/useOnScreen';
import CommercialWorkCard from './CommercialWorkCard';

interface Props { }

/**
 * The commercial work section on the homepage.
 * @param props Section props.
 * @returns Commercial work section content.
 */
export const CommercialWorkSection: React.FC<Props> = () => {
    const ref: React.MutableRefObject<HTMLDivElement> = useRef() as React.MutableRefObject<HTMLDivElement>;
    useOnScreen(ref);

    const commercialWorkCards: JSX.Element[] = commercialWork.map((item) => (
        <CommercialWorkCard key={item.title} item={item} />
    ));

    return (
        <section className="section commercial-work-section" id="CommercialWork" aria-labelledby="commercial-work-title">
            <div className="content-container commercial-work-container" id={`${PageSectionIdType.Commercial}`} ref={ref}>
                <header className="section-header">
                    <p className="section-eyebrow">COMMERCIAL SYSTEMS</p>
                    <h2 className="section-title" id="commercial-work-title">Selected Commercial Work</h2>
                    <p className="section-intro">
                        Selected examples of internal business systems I've worked on, focused on complex workflows, data-heavy processes, and real-world operational use. Client and product details are intentionally anonymised due to confidentiality, but the technical scope, responsibilities, and outcomes are representative of my day-to-day work.
                    </p>
                </header>

                <div className="commercial-work-grid">{commercialWorkCards}</div>
            </div>
        </section>
    );
};

export default CommercialWorkSection;