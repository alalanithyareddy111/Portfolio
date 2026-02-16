import { useState } from 'react'

import './App.module.css'

import styles from './App.module.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Profiles from './components/profiles/Profiles'

function App() {
 

  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <Skills/>
      <Projects/>
      <Profiles/>
    </div>
  )
}

export default App
