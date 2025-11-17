import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../Common/ProjectCard';
import crazydog from '../../assets/crazydog.png';
import benettpapir from '../../assets/benett.png';
import keszibike from '../../assets/keszibike.png'
import keszisi from '../../assets/keszisi.png';
import portfolio from '../../assets/portfolio.png';
import eventapp from '../../assets/eventapp.png';
import bikeshop from '../../assets/bikeshop.png';
import birdapp from '../../assets/birdapp.png';
import checkout from '../../assets/checkout.png';
import chart from '../../assets/glassmorphm.png';
import story from '../../assets/storydesign.png';
import userprofile from '../../assets/userprofile.png';
import weatherapp from '../../assets/weatherapp.png';
import React, { useState } from 'react';





function Projects() {
  const initialProjects = [
    { id: 0, src: crazydog , link: "https://dev.crazydogcustom.com/", h3: 'Crazy Dog Custom', category: 'Bootstrap',p: 'Hand painted shoes' },
    { id: 1, src: benettpapir , link: "https://teszt.benettpapir.hu/", h3: 'Benettpapir', category: 'Opencart',p: 'Paper stationery store' },
    { id: 2, src: keszibike , link: "https://keszibike.hu/", h3: 'Keszibike', category: 'Opencart',p: 'Bike service' },
    { id: 3, src: keszisi , link: "https://keszisi.hu/", h3: 'Keszisi', category: 'Wordpress',p: 'Ski rental and service' },
    { id: 4, src: portfolio , link: "https://martonmeszaros.netlify.app/", h3: 'My Portfolio', category: 'React',p: 'A portfolio website' },
    { id: 5, src: eventapp , link: "https://www.figma.com/design/QdT5Oc7WV2nDxLmCu2hB1R/Event-App-v2.0?node-id=0-1&p=f", h3: 'Event App', category: 'Figma',p: 'A BYOL project' },
    { id: 6, src: bikeshop , link: "https://www.figma.com/design/XYBmThf5149hntd0xIIYlG/Bikeshop?node-id=39-57&t=jOXccwHMQln2oWuH-1", h3: 'Bikeshop', category: 'Figma',p: 'A BYOL project' },
    { id: 7, src: birdapp , link: "https://www.figma.com/design/UzrWErGpqGRVUtRVvVpUmx/bird-app?node-id=1-2&t=kp5foereUC7psj8V-1", h3: 'Birdapp', category: 'Figma',p: 'Website Menu design' },
    { id: 8, src: checkout , link: "https://www.figma.com/design/yAm7ehy8YD3p7DzzCipqOO/Mobile-checkkout?node-id=6-133&t=DOsEbBruTVarCNqo-1", h3: 'Checkout', category: 'Figma',p: 'A checkout design' },
    { id: 9, src: chart , link: "https://www.figma.com/design/DU7Mptm6bo4qBbOn9okxTW/Glassmorphm-chart-design?node-id=0-1&t=FMBnOPTWa4dRb3IO-1", h3: 'Glassmorphm', category: 'Figma',p: 'A chart design' },
    { id: 10, src: story , link: "https://www.figma.com/design/XSY7J3jtVuetXFcXdvWFI1/Design--1?node-id=0-1&t=wJ1i72UUTHCHlbvw-1", h3: 'Design', category: 'Figma',p: 'A website design' },
    { id: 11, src: userprofile , link: "https://www.figma.com/design/b9L7xXAzsTO5Osdv4l0iny/User-Profile?node-id=0-1&t=0SxnMIBbdVzpWDGa-1", h3: 'User Profile', category: 'Figma',p: 'A user profile design' },
    { id: 12, src: weatherapp , link: "https://mmyweatherapp.netlify.app/", h3: 'User Profile', category: 'React',p: 'A weather application' },
  ];

  const [projects] = useState(initialProjects);
  const [filterCategory, setFilterCategory] = useState(null);

  const handleFilter = (category) => {
    setFilterCategory(category)
  };

  const projectsToDisplay = filterCategory ? projects.filter(project => project.category === filterCategory) : projects; 

  return (
    <section id="projects" className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.filterContainer}>
          <button type="button" className={styles.hover} onClick={() => handleFilter(null)}>
            All
          </button>
          <button type="button" className={styles.hover} onClick={() => handleFilter('Figma')}>
            Figma
          </button>
          <button type="button" className={styles.hover} onClick={() => handleFilter('Opencart')}>
            Opencart
          </button>
          <button type="button" className={styles.hover} onClick={() => handleFilter('Wordpress')}>
            Wordpress
          </button>
          <button type="button" className={styles.hover} onClick={() => handleFilter('React')}>
            React
          </button>
          <button type="button" className={styles.hover} onClick={() => handleFilter('Bootstrap')}>
            Bootstrap
          </button>
        </div>


        <div className={styles.projectsContainer}>
            {projectsToDisplay.map(project => (
                <ProjectCard 
                  src={project.src}
                  key={project.id}
                  link={project.link}
                  h3={project.h3}
                  className={project.className}
                  p={project.p}
                />
            ))}
        </div>
    </section>
  )
}

export default Projects