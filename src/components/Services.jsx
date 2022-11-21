import React from 'react'
import ServicesCard from './ServicesCard'
import { services } from '../constants'
import styles from '../style'

const Services = () => {
  return (
    <div className={`py-[75px] ${styles.flexColTextCenter}`}>
        <div className='mb-8'>
            <h4 className={`mb-5 ${styles.heading2}`}>Our Services</h4>
            <p className={styles.mainText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, dapibus mattis vel feugiat erat tortor eleifend.</p>
        </div>
        <div className={styles.flexWrapCenter}>
            {services.map((item) => (
              <ServicesCard key={item.id} title={item.title} image={item.image} />
            ))}
        </div>
    </div>
  )
}

export default Services