import React from 'react';
import { ICommercialWorkItem } from '../../../data/commercialWork';
import CommercialWorkTagList from './CommercialWorkTagList';

interface Props {
    item: ICommercialWorkItem;
}

/**
 * A single commercial work summary card.
 * @param props Component props.
 * @returns Card content for one commercial work item.
 */
export const CommercialWorkCard: React.FC<Props> = (props) => {
    const { item } = props;

    return (
        <article className="commercial-work-card">
            <h3 className="commercial-work-card-title">{item.title}</h3>

            <p className="commercial-work-card-summary">{item.summary}</p>

            <ul className="commercial-work-impact-list">
                {item.impactBullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                ))}
            </ul>

            <p className="commercial-work-stack">
                <span className="commercial-work-stack-label">Stack:</span> {item.stack}
            </p>

            <CommercialWorkTagList tags={item.focusTags} />
        </article>
    );
};

export default CommercialWorkCard;