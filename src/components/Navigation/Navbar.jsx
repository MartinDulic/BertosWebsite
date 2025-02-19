import React from 'react'
import Logo from '../../assets/logo_small.webp'
import navLinks from '../../data/NavLinks'
import NavbarLink from './NavbarLink'
import { Link } from 'react-router-dom'
import Cta from '../Shared/Cta'

const Navbar = () => {
  return (
    <section className=' z-10 fixed bg-secondary h-20 w-full flex items-center justify-between shadow-md'>
        <Link to='/'><img src={Logo} alt="..." className='ml-4 h-16'/></Link>
        <div className='hidden md:flex w-full h-20 gap-6 lg:gap-16 xl:gap-36 items-center justify-end lg:justify-center pr-4 lg:pr-6 xl:pr-8 2xl:pr-10 text-primary'>
          {navLinks.slice(0, -1).map((item, index) => (
            <NavbarLink key={index} Text={item.linkText} Path={item.toPath}/>
          ))}
          <Cta text={"Contact"} linkTo={"/contact"}/>
        </div>
    </section>
  )
}

export default Navbar