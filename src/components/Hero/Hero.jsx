import React from 'react'
import { getImageURL } from '../../utils'
import styles from "./Hero.module.css"
import Typewriter from 'typewriter-effect'

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>
              <Typewriter onInit={(typewriter)=>{
                typewriter.typeString("Hi, I'm Nithya").typeString('<br/><span class="' + styles.description + '">I am a Full-Stack Developer</span>')
                .start();
                
              }} options={{autoStart:true, cursor:"|",delay:75}}/>
            </h1>
            {/* <p className={styles.description} id="subtext" style={{ display: 'none' }}> <Typewriter onInit={(typewriter)=>{
                typewriter.typeString("I am a Full-Stack Developer").pauseFor(2500).start();}}
            options={{autoStart:true,delay:50}}  /> </p>                                     */}
            {/* <a href="mailto:alalanithya01@gmail.com" className={styles.contactBtn}>Contact Me</a> */}
            <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=alalanithya01@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className={styles.contactBtn}
>
  Contact Me
</a>

        </div>
        <img src="heroImage.png" alt="Hero section" className={styles.heroImg} />
    </section>
  )
}

export default Hero
