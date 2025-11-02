import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../Common/ProjectCard';
import crazydog from '../../assets/crazydog.png';
import benettpapir from '../../assets/benett.png'
import keszibike from '../../assets/keszibike.png'
import keszisi from '../../assets/keszisi.png'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard 
            src={crazydog} 
            link={"https://dev.crazydogcustom.com/"} 
            h3='Crazy Dog Custom'
            p='Hand painted shoes'
            />
            <ProjectCard 
            src={benettpapir} 
            link={"https://teszt.benettpapir.hu/"} 
            h3='Benettpapir'
            p='Paper stationery store'
            />
            <ProjectCard 
            src={keszibike} 
            link={"https://keszibike.hu/"} 
            h3='Keszibike'
            p='Bike service'
            />
            <ProjectCard 
            src={keszisi} 
            link={"https://keszisi.hu/"} 
            h3='Keszisi'
            p='Ski rental and service'
            />
        </div>
    </section>
  )
}

export default Projects