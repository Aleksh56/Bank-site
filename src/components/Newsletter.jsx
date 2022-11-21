import React from 'react'
import styles from '../style'
import Button from './Button/Button'

const Newsletter = () => {
  return (
    <div className={`py-[75px] ${styles.flexColTextCenter}`}>
        <div className='mb-8'>
            <h4 className={`mb-5 ${styles.heading2}`}>Our best results for the year</h4>
            <p className={`max-w-[410px] ${styles.mainText}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, dapibus mattis vel feugiat erat tortor eleifend.</p>
        </div>
        <div className={`ss:flex-row ${styles.flexColCenter }`}>
            <input type="text" className={styles.newslatterInput} placeholder='Your Email...'/>
            <Button title={'Subscribe'} yPadding={'2'} xPadding={'3'} bgColor={'pink-600'} textColor={'white'} margin={'m-0'} />
        </div>
    </div>
  )
}

export default Newsletter