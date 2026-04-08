import { ISkill } from '../../../data/skills';
import { ISkillArea } from '../../../data/skillAreas';

interface ISkillAreaProps {
    skillArea: ISkillArea;
}

interface Props extends ISkillAreaProps { }

/**
 * Splits a list into left/right columns by midpoint.
 * @param items Source item list.
 * @returns A tuple containing left and right column arrays.
 */
const splitIntoColumns = <T,>(items: T[]): [T[], T[]] => {
    const midpoint = Math.ceil(items.length / 2);
    const leftColumn = items.slice(0, midpoint);
    const rightColumn = items.slice(midpoint);

    return [leftColumn, rightColumn];
};

/**
 * A skill area tile for the skills section.
 * @param props Skill area tile props.
 * @returns A rendered skill area tile.
 */
export const SkillAreasTile = (props: Props): JSX.Element => {
    const skillArea: ISkillArea = props.skillArea;

    const [leftColumn, rightColumn] = splitIntoColumns(skillArea.skills);

    const renderTechs = (items: ISkill[]): JSX.Element[] =>
        items.map((item) => (
            <li key={item.skillName}>
                <span>{item.title}</span>
            </li>
        ));

    return (
        <div className="skillarea-summary-tile">
            <div className="skillarea-summary-img-container">
                <i className={skillArea.fontAwesomeIconClass}></i>
            </div>
            <div className="skillarea-summary-tile-content">
                <div className="skillarea-summary-tile-title">{skillArea.title}</div>
                <div className="skillarea-summary-tile-desc">{skillArea.description}</div>
                <div className="skillarea-summary-tile-other">
                    <div className="skills-list-desktop">
                        <div className="skills-list-columns">
                            <ul className="skillarea-summary-tile-techs">{renderTechs(leftColumn)}</ul>
                            <ul className="skillarea-summary-tile-techs">{renderTechs(rightColumn)}</ul>
                        </div>
                    </div>
                    <div className="skills-list-mobile">
                        <ul className="skillarea-summary-tile-techs">{renderTechs(skillArea.skills)}</ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
