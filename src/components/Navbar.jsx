import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { navLinks } from '../constants'
import { BsSearch } from 'react-icons/bs'
import { BiMenu } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import Button from './Button/Button'
import styles from '../style'

const Navbar = () => {
    const [toggled, setToggled] = useState(false)

  return (
    <nav className={styles.navBar}>
        <Link to={'/'}>
            <img src="https://www.freedownloadlogo.com/logos/e/eurasian-bank-3.svg" alt="logo" className='w-[200px]' />
        </Link>

        <ul className={styles.navBarMenu}>
            {navLinks.map((link) => (
                <li key={link.id} className={`${styles.navBarLinks} ${link === navLinks.length - 1 ? 'mr-0' : 'mr-5'}`}>
                    <Link to={`/${link.id}`}>
                        {link.title}
                    </Link>
                </li>
            ))}
        </ul>

        <div className='md:flex hidden items-center'>
            <BsSearch className='w-[22px] h-[22px] cursor-pointer text-pink-600 mr-5'/>
            <Button title={'Service'} yPadding={'2'} xPadding={'2'} bgColor={'pink-600'} textColor={'white'} />
        </div>
        
        <div className='md:hidden flex flex-col items-center relative'>
            <div onClick={() => setToggled((prev) => !prev)}>
                {toggled ? <AiOutlineClose className='h-[30px] w-[30px]' /> : <BiMenu className='h-[30px] w-[30px]'/> }
            </div>
            {toggled && <ul className='flex flex-col items-start justify-start bg-pink-100 fixed top-[0px] right-[0vw] h-[100vh] w-[50vw] z-10 leading-9 pt-[50px]'>
                <AiOutlineClose className='absolute top-[15px] right-[15px] z-20 text-3xl' onClick={() => setToggled((prev) => !prev)}/>
                {navLinks.map((link) => (
                    <li key={link.id} className={`list-none font-notoSans cursor-pointer font-normal lg:text-[16px] text-[14px] uppercase tracking-widest ml-[20px] ${link === navLinks.length - 1 ? 'mr-0' : 'mr-5'}`}>
                        <Link to={`/${link.id}`}>
                            {link.title}
                        </Link>
                    </li>
                ))}
            </ul>}
        </div>
    </nav>
  )
}

export default Navbar