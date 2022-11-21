import React from 'react'
import heroLogo from '../assets/hero.png'
import styles from '../style'
import Button from './Button/Button'

const Hero = () => {
  return (
    <section className={`py-[100px] ${styles.flexCenterAround}`}>
        <div className='float-left'>
          <h1 className={`mb-8 ${styles.heading1}`}>Chase Your<br className='md:block hidden' /> Dream with us</h1>
          <p className={`mb-8 max-w-[340px] ${styles.mainText}`}>The harder you work for something, the greater you’ll feel when you achieve it.</p>
          <div className={styles.flexRow}>
            <button className={`bg-pink-600 border-pink-600 py-2 px-3 text-white ${styles.button} mr-5 transition-all hover:scale-105`}>
              Apply online
            </button>  
            <Button title={'Loan calculator'} yPadding={'2'} xPadding={'3'} bgColor={'white'} textColor={'pink-600'} margin={'m-0'} />
          </div>
        </div>
        <div className={`float-right sm:my-0 my-2 relative ${styles.flexCenter}`}>
          <img src={heroLogo} alt="" className='md:block hidden relative z-[10]' />
          
          <div className={styles.bluredBG} />
        </div>
    </section>
  )
}

export default Hero