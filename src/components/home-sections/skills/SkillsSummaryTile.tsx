import { ISkill } from '../../../data/skills';

interface ISkillProps {
    skill: ISkill;
}

interface Props extends ISkillProps {}

/**
 * A skill summary tile for the skills section.
 * @param props Skill summary tile props.
 * @returns A rendered skill summary tile.
 */
export const SkillsSummaryTile = (props: Props): JSX.Element => {
    const skill: ISkill = props.skill;

    return (
        <>
            <div className="skill-summary-tile">
                <img src={skill.img} alt={skill.altTag} title={skill.title} referrerPolicy="no-referrer" loading="lazy" />
            </div>
        </>
    );
};
