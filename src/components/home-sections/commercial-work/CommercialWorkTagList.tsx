import React from 'react';

interface Props {
    tags: string[];
}

/**
 * The capability tags for a commercial work card.
 * @param props Component props.
 * @returns A semantic list of focus tags.
 */
export const CommercialWorkTagList: React.FC<Props> = (props) => {
    const { tags } = props;

    return (
        <ul className="commercial-work-tag-list" aria-label="Focus areas">
            {tags.map((tag) => (
                <li key={tag} className="commercial-work-tag">
                    {tag}
                </li>
            ))}
        </ul>
    );
};

export default CommercialWorkTagList;