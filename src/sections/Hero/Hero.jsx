import styles from  './HeroStyles.module.css';
import profileImg from '../../assets/martonmeszaros.jpg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from'../../assets/Marton_Meszaros_CV_EN.pdf';
import { useTheme } from '../../Common/ThemeContext';
import HighFiveButton from '../../Common/HighFiveButton'


function Hero() {
    const { theme } = useTheme();

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
     
    </div>
    <div className={styles.info}>
        <h1>
            Marton <br/>
            Meszaros
        </h1>
        <h2>Junior Webdeveloper</h2>
        <span>
            <a href="https://github.com/mmmarciii/" target="_blank">
                <img src={githubIcon} alt="GitHub Icon" />
            </a>
            <a href="https://www.linkedin.com/in/meszmarc/" target="_blank">
                <img src={linkedinIcon} alt="linkedIn Icon" />
            </a>
        </span>
        <p className={styles.description}>Hey there! I'm a Junior Webdeveloper ready to build beautiful and interesting web experiences.</p>
        <HighFiveButton/>
    </div>
  </section>
  );
}

export default Hero