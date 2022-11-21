import React from 'react'
import styles from '../style'
import AboutImage from '../assets/about.jpg'

const About = () => {
  return (
    <div className={`${styles.container} ${styles.flexCenter} py-[90px] flex-col md:flex-row`}>
      <div className={styles.aboutPageTextContainer}>
        <h4 className={`${styles.heading1} mb-[40px]`}>About us</h4>
        <p className={`${styles.mainText} leading-7 mb-3`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure illo dolorum alias fuga dolore similique? Placeat nobis nesciunt laudantium necessitatibus facilis unde doloremque, quas aspernatur, veritatis est ut velit ipsum corporis similique quae ab.</p>
        <p className={`${styles.mainText} leading-7`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus cupiditate ratione, enim nam itaque laudantium hic et at natus ipsam molestias dolorum tempore tenetur, voluptatibus repudiandae impedit vitae ea veniam velit consequatur sit deserunt, omnis earum labore. Possimus labore rem autem deserunt, illo dolorum quam quia maiores, accusantium alias pariatur nihil officiis?</p>
      </div>
      <div className='float-right max-w-[700px]'>
        <img src={AboutImage} alt="About Image" className='w-full'/>
      </div>
    </div>
  )
}

export default About