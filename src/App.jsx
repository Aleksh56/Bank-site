import React from "react"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Main from "./pages/main"
import About from "./pages/About"
import styles from "./style"
import Blog from "./pages/Blog"
import Footer from "./components/Footer/Footer"

const App = () => {
  return (
    <>
      <div className={styles.container + " " + styles.navContainer}>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <div className={styles.footerBG}>
        <Footer />
      </div>
    </>
  )
}

export default App
