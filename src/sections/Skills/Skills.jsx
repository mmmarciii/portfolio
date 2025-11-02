import styles from './SkillsStyles.module.css';
import checkmarkLight from '../../assets/checkmark-light.svg';
import checkmarkDark from '../../assets/checkmark-dark.svg';
import SkillList from '../../Common/SkillList';
import { useTheme } from '../../Common/ThemeContext';

function Skills() {
      const { theme } = useTheme();

      const checkMarkIcon = theme === 'light' ? checkmarkLight : checkmarkDark;
  return (
    <section id="skills" className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillsList}>
            <SkillList src={checkMarkIcon} skill="HTML" />
            <SkillList src={checkMarkIcon} skill="CSS" />
            <SkillList src={checkMarkIcon} skill="JavaScript" />
            <SkillList src={checkMarkIcon} skill="PHP" />
            <SkillList src={checkMarkIcon} skill="SQL" />
            <SkillList src={checkMarkIcon} skill="Python" />
        </div>
        <hr />
        <div className={styles.skillsList}>
            <SkillList src={checkMarkIcon} skill="Bootstrap" />
            <SkillList src={checkMarkIcon} skill="Opencart" />
            <SkillList src={checkMarkIcon} skill="Wordpress" />
            <SkillList src={checkMarkIcon} skill="REACT" />
            <SkillList src={checkMarkIcon} skill="Django" />
        </div>
        <hr />
        <div className={styles.skillsList}>
            <SkillList src={checkMarkIcon} skill="Figma" />
            <SkillList src={checkMarkIcon} skill="Photoshop" />
            <SkillList src={checkMarkIcon} skill="Illustrator" />
        </div>
        <hr />
    </section>
  )
}

export default Skills