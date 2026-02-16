import React,{useState} from 'react'
import styles from './Navbar.module.css'
import { getImageURL } from '../../utils'

const Navbar = () => {
    const [menuOpen,setMenuOpen]=useState(false);
  return (
    <nav className={styles.navbar}>
        <a className={styles.title} href="/">Portfolio</a>
        <div className={styles.menu}>
        <img
  className={styles.menuBtn}
  src={menuOpen ? "/close.png" : "/nav1.jpg"}
  onClick={() => setMenuOpen(prev=>!prev)}
  width={30}
  height={30}
  style={{ borderRadius: "8px", cursor: "pointer" , padding:"4px"}}
/>

        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={()=>setMenuOpen(false)} >
            <li><a href="#about" class={styles.navLink}>About</a></li>
            <li><a href="#skills" class={styles.navLink}>Skills</a></li>
            <li><a href="#projects" class={styles.navLink}>Projects</a></li>
            <li><a href="#profile" class={styles.navLink}>Profiles</a></li>
        </ul>
        </div>
    </nav>
  )
}

export default Navbar
