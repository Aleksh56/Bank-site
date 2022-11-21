import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Main from './pages/main'
import About from './pages/About'
import styles from './style'
import Blog from './pages/Blog'

const App = () => {
  return (
    <>
      <div className={styles.container}>
            <Navbar />
      </div>
      <Routes>
        <Route path='/' exact element={<Main/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
    </>
  )
}

export default App
