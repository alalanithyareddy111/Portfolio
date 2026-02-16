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
    desc:"A video conferencing app with extended features like live subtitles, chatBot, Automated mail notification scheduler, attendence management.",
    git:"https://github.com/alalanithyareddy111/zoom-clone",
    live:"/"
  },
  {
    id:2,
    title:"Waste Segregation",
    image:"./Waste.png",
    tech:"React",
    desc:"Designed and developed an interactive web app to educate users on proper waste disposal through a drag-and-drop game, improved performance by caching image assets, cutting redundant network fetches.",
    git:"https://github.com/alalanithyareddy111/WasteSegregationGame",
    live:"https://ecochamp-iota.vercel.app/"
  },{
    id:3,
    title:"Real-Time Chat Application",
    image:"./chat.png",
    tech:"React . Node.js . MongoDb . Zustand",
    desc:"Built a real time chat application using MERN stack, socket.io, TailwindCSS. Implemented user authentication and authorization with JWT for secure access control. Instant messaging using socket.io.",
    git:"https://github.com/alalanithyareddy111/ChatApp1",
    live:"/"
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
    <section id="projects">
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
    </section>
  )
}

export default Projects;
