
function ProjectCard({src, link, h3, className,  p}) {
  return (
    <a href={link} className={className}> 
        <img className='hover' src={src} alt={h3 + ' logo'} />
        <h3>{h3}</h3>
        <p>{p}</p>
    </a>
  )
}

export default ProjectCard