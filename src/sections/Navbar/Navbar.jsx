import styles from './NavbarStyles.module.css';
import Hamburger from 'hamburger-react';
import NavLinks from '../../Common/NavLinks';
import { useState } from 'react';

function Navbar() {
    const [isDisplayed, setDisplayed] = useState(false);
  return (
    <nav className={styles.container}>
        <div className={styles.navbarCenter}>
            <nav>
                <div className={styles.navMenu}>
                    <NavLinks />
                </div>
                <div className={styles.hamburgerMenu}>
                        {isDisplayed && <NavLinks />}
                </div>
            </nav>
        </div>
        <div className={styles.hamburgerIcon}>
            <Hamburger rounded easing="ease-in" toggled={isDisplayed} toggle={setDisplayed}/>
        </div>
    </nav>
  )
}

export default Navbar