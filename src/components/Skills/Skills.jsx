

import React,{useState,useEffect,useRef} from 'react'
import styles from "./Skills.module.css"

const Skills = () => {

  const [visibleCount,setVisibleCount]=useState(0);
  const sectionRef=useRef(null);
  const [flipped,setFlipped]=useState(false);

  const [flippedIndex,setFlippedIndex]=useState(null);
  const skills = [
  {
    title: "Languages",
    items: ["java","javascript"],
    img: "/language.png",
  },
  {
    title: "Web Development",
    items: ["HTML", "CSS", "React.js", "Next.js", "Node.js"],
    img: "/webDevelopment.png",
  },
  {
    title: "Databases",
    items: ["MySQL", "MongoDB"],
    img: "/database.png",
  },
  {
    title: "Computer Fundamentals",
    items: ["Computer Networks", "Operating Systems"],
    img: "/computer.jpg",
  },
];


  useEffect(()=>{
    const observer=new IntersectionObserver(([entry])=>{
      if(entry.isIntersecting){
        skills.forEach((_,i)=>{
              setTimeout(()=>{
                setVisibleCount((count)=>count+1)
              },i*400);

        })
         observer.disconnect();
      }
    },{threshold:0.3})
    if(sectionRef.current){
      observer.observe(sectionRef.current);
    }
  },[])

  return (
      <section className={styles.container} id="skills" ref={sectionRef}>
        
        <div className={styles.content}>
             <div className={styles.arrange}>
                {/* <h1 className={styles.h1}>Skills</h1>          */}
                <div className={styles.title}>
                  <img src="./tools.png" alt="skills" className={styles.titleImg}></img>
                    <h1>Skills</h1>
                    </div>
             {/* <div className={styles.cardSequence}>
             <div className={styles.card} onClick={() => setFlipped(f => !f)} >
              <div className={`${styles.cardInner} ${flipped ? styles.flip : ""}`}>
                <div className={styles.cardFront}>
                  <img src="/language.png" alt="language" className={styles.cardImage}/>
                  <h3>Languages</h3>
                </div>
                <div className={styles.cardBack}>
                  <ul>
                    <li>Java</li>
                    <li>JavaScript</li>
                  </ul>
                </div>
                
                  </div>
             </div>
               <div className={styles.card} onClick={() => setFlipped(f => !f)} >

                <div className={`${styles.cardInner} ${flipped ? styles.flip : ""}`}>
                <div className={styles.cardFront}>
                  <img src="/webDevelopment.png" alt="language" className={styles.cardImage}/>
                  <h3>Web Development</h3>
                </div>
                <div className={styles.cardBack}>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>React.js</li>
                    <li>Next.js</li>
                    <li>Node.js</li>

                  </ul>
                </div>
                
                  </div>
                 
             </div>
              <div className={styles.card} onClick={() => setFlipped(f => !f)} >

                <div className={`${styles.cardInner} ${flipped ? styles.flip : ""}`}>
                <div className={styles.cardFront}>
                  <img src="/database.png" alt="language" className={styles.cardImage}/>
                  <h3>Databases</h3>
                </div>
                <div className={styles.cardBack}>
                  <ul>
                    <li>MySQL</li>
                    <li>MongoDb</li>
                  </ul>
                </div>
                
                  </div>
                 
             </div>
               <div className={styles.card} onClick={() => setFlipped(f => !f)} >

                <div className={`${styles.cardInner} ${flipped ? styles.flip : ""}`}>
                <div className={styles.cardFront}>
                  <img src="/computer.jpg" alt="language" className={styles.cardImage}/>
                  <h3>Computer Fundamentals</h3>
                </div>
                <div className={styles.cardBack}>
                  <ul>
                    <li>Computer Networks</li>
                    <li>Operating System</li>
                  </ul>
                </div>
                
                  </div>
                 
             </div>
             </div> */}

  <div className={styles.cardSequence}>
  {skills.map((skill, index) => (
    <div
      key={index}
      className={`${styles.card} ${index<visibleCount?styles.show:""}`}
      onClick={() =>
        setFlippedIndex(flippedIndex === index ? null : index)
      }
    >
      <div
        className={`${styles.cardInner} ${
          flippedIndex === index ? styles.flip : ""
        }`}
      >
        {/* FRONT */}
        <div className={styles.cardFront}>
          <img
            src={skill.img}
            alt={skill.title}
            className={styles.cardImage}
          />
          <h3>{skill.title}</h3>
        </div>

        {/* BACK */}
        <div className={styles.cardBack}>
          <ul>
            {skill.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  ))}
</div>








             </div>
        </div>
      </section>
  )
}

export default Skills
