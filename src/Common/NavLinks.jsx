import { useTheme } from './ThemeContext';
import Switch from '@mui/material/Switch';
import { Link } from 'react-scroll';
import styles from '../sections/Navbar/NavbarStyles.module.css';
    
function NavLinks() {
        const { toggleTheme } = useTheme();
  return (
    <ul className={styles.navLinks}>
        <li>
            <Link to="hero" smooth={true} offset={-120} duration={640}>Home</Link>
        </li>
        <li>
            <Link to="projects" smooth={true} offset={-120} duration={640}>Projects</Link>
        </li>
        <li>
            <Link to="skills" smooth={true} offset={-120} duration={640}>Skills</Link>
        </li>
        <li>
            <Link to="contact" smooth={true} offset={-120} duration={640}>Contact</Link>
        </li>
        <li>
            <div className={styles.colorMode}>
                <Switch sx={{
                    '& .MuiSwitch-thumb': {
                        backgroundColor: 'var(--btn-color)',
                    },
                    '& .MuiSwitch-track': {
                        backgroundColor: 'var(--btn-color)',
                        opacity: 0.38,
                    },
                }} 
                onChange={toggleTheme} defaultChecked />
            </div>
        </li>
    </ul>
  )
}

export default NavLinks