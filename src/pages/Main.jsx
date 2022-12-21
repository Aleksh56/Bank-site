import React from "react"
import Hero from "../components/Hero"
import Experience from "../components/Experience"
import About from "../components/About"
import Services from "../components/Services"
import Results from "../components/Results"
import Newsletter from "../components/Newsletter"
import styles from "../style.js"

const Main = () => {
  return (
    <>
      <div className={styles.container}>
        <Hero />
        <Experience />
      </div>
      <div>
        <About />
      </div>
      <div className={styles.container}>
        <Services />
        <Results />
        <Newsletter />
      </div>
    </>
  )
}

export default Main
