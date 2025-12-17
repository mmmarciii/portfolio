import styles from './CertificatesStyles.module.css';
import ProjectCard from '../../Common/ProjectCard';
import figmaess from '../../assets/Figma_ess_cert.png';
import figmaadv from '../../assets/Figma_adv_cert.png';
import illustrator from '../../assets/Illustrator_Cert.png';
import csharp from '../../assets/Csharp.png';
import frontend from '../../assets/Frontend_cert.png';
import React, { useState } from 'react';





function Projects() {
  const initialProjects = [
    { id: 0, src: figmaess , link: "", h3: 'Figma', category: 'Figma',p: 'Essentials certificate' },
    { id: 1, src: figmaadv , link: "", h3: 'Figma', category: 'Figma',p: 'Advanced certificate' },
    { id: 2, src: illustrator , link: "", h3: 'Illustrator', category: 'Illustrator',p: 'certificate' },
    { id: 3, src: csharp , link: "", h3: 'C# Foundamentals', category: 'C#',p: 'certificates' },
    { id: 4, src: frontend , link: "", h3: 'Frontend Developer', category: 'Frontend',p: 'certificate' },
  ];

  const [projects] = useState(initialProjects);
  const [filterCategory, setFilterCategory] = useState(null);

  const handleFilter = (category) => {
    setFilterCategory(category)
  };

  const projectsToDisplay = filterCategory ? projects.filter(project => project.category === filterCategory) : projects; 

  return (
    <section id="certificates" className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.filterContainer}>
          <button type="button" className={styles.hover} onClick={() => handleFilter(null)}>
            All
          </button>
          <button type="button" className={styles.hover} onClick={() => handleFilter('C#')}>
            C#
          </button>
          <button type="button" className={styles.hover} onClick={() => handleFilter('Figma')}>
            Figma
          </button>
          <button type="button" className={styles.hover} onClick={() => handleFilter('Illustrator')}>
            Illustrator
          </button>
          <button type="button" className={styles.hover} onClick={() => handleFilter('Frontend')}>
            Frontend
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