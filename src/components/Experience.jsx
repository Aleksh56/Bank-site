import React from 'react'
import ExperienceCard from './ExperienceCard'
import { experience } from '../constants'
import styles from '../style'

const Experience = () => {
  return (
    <section className={`py-[50px] ${styles.flexColTextCenter}`}>
        <div className='mb-9'>
            <h2 className={`mb-4 ${styles.heading2}`}>Creating Extraordinary Customer Experience</h2>
            <p className={`max-w-[660px] ${styles.mainText}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum eget morbi dignissim eu pharetra consequat montes, sagittis.</p>
        </div>
        <div className={styles.experienceGrid}>
            {experience.map((item) => (
              <ExperienceCard key={item.id} title={item.title} image={item.image} about={item.about} />
            ))}
        </div>
    </section>
  )
}

export default Experience
