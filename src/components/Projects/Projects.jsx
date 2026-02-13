import React from 'react'
import styles from "./Project.module.css"
import { useRef,useEffect } from 'react';

const Projects = () => {
  const projectRefs=useRef([]);
  const projectsData=[{
    id:1,
    title:"ZoomPlus",
    image:"./zoom1.png",
    tech:"Next.js . Stream.io . MongoDB",
    desc:"A video conferencing app",
    git:"https://github.com/alalanithyareddy111/zoom-clone",
    live:"/"
  },
  {
    id:2,
    title:"Waste Segregation",
    image:"./Waste.png",
    tech:"React",
    desc:"Interactive waste sorting game",
    git:"https://github.com/alalanithyareddy111/WasteSegregationGame",
    live:"https://ecochamp-iota.vercel.app/"
  }
]
  useEffect(()=>{
    const observer=new IntersectionObserver(
      (entries)=>{
        entries.forEach((entry)=>{
          if(entry.isIntersecting){
             entry.target.classList.add(styles.show);
            //  observer.unobserve(entry.target);
          }
          else {
          entry.target.classList.remove(styles.show);
        }
        })
      },{threshold:0.3}
    )
    projectRefs.current.forEach((el)=>el&& observer.observe(el));
    return ()=>observer.disconnect();
  },[]);
  return (
    <div className={styles.container}>

      <div className={styles.title}>
      <img src="./builder2.jpg" alt="builder" className={styles.titleImg}></img>
      <h1>Projects</h1>
      </div>
      <section className={styles.projects}>
        {/* <div className={styles.projectCard}>
          <div className={styles.projectPreview}>
            <img src="./Zoom.png" alt="ZoomPlus"/>
          </div>
          <div className={styles.projectInfo}>
            <h3>ZoomPlus</h3>
            <p className={styles.tech}> Next.js Stream.io MongoDB</p>
            <p className={styles.desc}>A video Conferencing app</p>
          </div>
        </div> */}
        {projectsData.map((project,index)=>(
          <div key={project.id} 
           ref={(el)=>(projectRefs.current[index]=el)}
          // className={styles.projectCard}>
          className={`${styles.projectCard} ${index%2===0?styles.fromLeft:styles.fromRight}`}
        >
            <div className={styles.projectPreview}>
              <img src={project.image} alt={project.title}/>

            </div>
            <div className={styles.projectInfo}>
              <h3>{project.title}</h3>
              <p className={styles.tech}>{project.tech}</p>
              <p className={styles.desc}>{project.desc}</p>
              <div className={styles.linkButtons}>
                 <a href={project.git} className={styles.git} target="_blank" rel="norefferer noopner"><i className="fa-brands fa-github"></i>GitHub</a>
                 <a href={project.live}className={styles.live} target="_blank" rel="norefferer noopner"><i className="fa-solid fa-globe"></i>Live Demo</a>
              </div>
            </div>
          </div>
        ))}
      </section>
      
      
     
    </div>
  )
}

export default Projects;
