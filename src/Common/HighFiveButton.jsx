import React, { useState } from 'react';
import styles from './HighFiveStyles.module.css'; // Importáljuk a CSS modult

export function HighFiveButton() {
  const [gaveHighFive, setGaveHighFive] = useState(false);

  const handleClick = () => {
    setGaveHighFive(true);
    setTimeout(() => setGaveHighFive(false), 2000);
  };

  return (
    <div className={styles.container}>
      <button onClick={handleClick}>
        High Five
      </button>

      <div className={styles.emojiContainer}>
        {gaveHighFive && (
          <span className={styles.animateHighfive}>✋</span>
        )}
      </div>
    </div>
  );
}

export default HighFiveButton;