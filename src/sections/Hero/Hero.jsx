import styles from  './HeroStyles.module.css';
import profileImg from '../../assets/martonmeszaros.jpg';
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import figmaLight from '../../assets/figma-light.svg';
import figmaDark from '../../assets/figma-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from'../../assets/Resume_Marton_Meszaros_EN.pdf';
import { useTheme } from '../../Common/ThemeContext';
import Switch from '@mui/material/Switch';

function Hero() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const figmaIcon = theme === 'light' ? figmaLight : figmaDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  return (
  <section id="hero" className={styles.container}>
    <div className={styles.colorModeContainer}>
        <img 
            className={styles.hero} 
            src={profileImg} 
            alt="Profile picture of Marton Meszaros" 
        />
        {/*<img 
            className={styles.colorMode}
            src={themeIcon} 
            alt="Color mode icon"
            onClick={toggleTheme}
        />*/}
        <div className={styles.colorMode}>
             <Switch onChange={toggleTheme} defaultChecked />
        </div>
       
    </div>
    <div className={styles.info}>
        <h1>
            Marton <br/>
            Meszaros
        </h1>
        <h2>Junior Forntend Developer</h2>
        <span>
            <a href="https://github.com/mmmarciii/" target="_blank">
                <img src={githubIcon} alt="GitHub Icon" />
            </a>
            <a href="https://www.linkedin.com/in/meszmarc/" target="_blank">
                <img src={linkedinIcon} alt="linkedIn Icon" />
            </a>
            <a href="#" target="_blank">
                <img src={figmaIcon} alt="Figma Icon" />
            </a>
        </span>
        <p className={styles.description}>Hey there! I'm a Junior Frontend Developer ready to build beautiful web experiences.</p>
        <a href={CV} download>
            <button className="hover">
                Resume
            </button>
        </a>

    </div>
  </section>
  );
}

export default Hero