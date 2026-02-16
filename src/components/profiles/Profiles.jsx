import React from 'react'
import styles from "./Profiles.module.css";
import { useState } from 'react';

const Profiles = () => {
    const items=[
        {img:"./leetcode.webp",link:"https://leetcode.com/u/Alala_Nithya_Reddy/"},
        {img:"./github.jpg",link:"https://github.com/alalanithyareddy111"},
        {img:"./hackjava.png",link:"https://www.hackerrank.com/certificates/716c25319a47"},
        {img:"./problemsolving.png",link:"https://www.hackerrank.com/certificates/9e9e9e58e5ad"},
        {img:"./nptel.png",link:"file:///C:/Users/nithy/OneDrive/Desktop/Certifications/22B81A05F9_NPTEL.pdf"},
        {img:"./music.png",link:"file:///C:/Users/nithy/Downloads/music.pdf"},
        {img:"./linkedin.jpg",link:"https://www.linkedin.com/in/alala-nithya-0434b2292/"}
    ];
    const [current,setCurrent]=useState(0);
    const next=()=>{
        setCurrent((prev)=>(prev+1)%items.length);
    }
    const prev=()=>{
        setCurrent((prev)=>(prev-1+items.length)%items.length);
    }
  return (
     <section id="profile">
        <div className={styles.container}>
          <div className={styles.title}>
             <img src="./profile.avif" className={styles.titleImg} alt="profile"/>
             <h1>Profiles and Certifications</h1>
          </div>
          <div className={styles.carousel}>
            < a href={items[current].link} target="_blank" rel="noopener noreferrer"><img src={items[current].img} alt="carousel" className={styles.carouselImg}/></a>
             <div className={styles.controls}>
                <button onClick={prev}>◀</button>
                <button onClick={next}>▶</button>
             </div>
             
          </div>
        </div>

     </section>
  )
}

export default Profiles
