import React from 'react'
import {FiArrowRight} from 'react-icons/fi'
import styles from '../style'

const About = () => {
  return (
    <div className={`py-[75px] md:flex-row md:text-start ${styles.flexColTextCenter}`}>
        <img src="https://sun6-23.userapi.com/s/v1/ig2/zO96qnh2eTjo1yIR-AOxtBfpH4Xus9-dhdlnAHbpS1Uf1YgGCGwVrQIYgUMlMpwmh7PXeCw_-YDmkKFp_fl4HZ3A.jpg?size=1704x1707&quality=95&crop=104,0,1704,1707&ava=1" alt="" className='md:max-w-[650px] max-w-[300px]' />
        <div className={`${styles.aboutTextBlock} px-2`}>
            <h4 className={`mb-4 ${styles.heading2}`}>IPDC at a Glance</h4>
            <p className={`max-w-[500px] leading-8 mb-7 ${styles.mainText}`}>IPDC Finance Limited (previously known as "Industrial Promotion and Development Company of Bangladesh Limited") is the first private sector financial institution of the country established in 1981 by a distinguished group of shareholders namely International Finance Corporation (IFC), USA, German Investment and Development Company (DEG), Germany, The Aga Khan Fund for Economic Development (AKFED), Switzerland, Commonwealth Development Corporation (CDC), UK and the Government of Bangladesh</p>
            <div className='flex items-center cursor-pointer md:justify-start justify-center'>
                <button className='text-pink-600 text-xl'>Read more</button>
                <FiArrowRight className='text-xl text-pink-600 mt-1 ml-2' />
            </div>
        </div>
    </div>
  )
}

export default About