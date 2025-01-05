import React, {useState} from 'react'
import Navbar  from './Navbar';
import Sidebar  from './Sidebar';
import { RiMenuFill } from "react-icons/ri";
import Navbottom from './Navbottom';
import WhatsappButton from './WhatsappButton';

const Nav = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isRotating, setIsRotating] = useState(false);


    const onMenuClick = () => {
        setIsSidebarOpen(!isSidebarOpen);
        setIsRotating(true);
        // Reset the rotation state after the animation completes (0.5s duration)
        setTimeout(() => setIsRotating(false), 500);
    }

    return (
        <>
            <Navbar/>
            <Sidebar isOpen={isSidebarOpen}/>
            {/*Menu button*/}
            <RiMenuFill
                className={`z-10 mr-4 text-2xl fixed top-7 right-2 text-primary 
                ${isRotating ? "animate-spin180" : ""} md:hidden`}
                onClick={onMenuClick}/>

            {/*Padding for page start*/}
            <div className='h-20'></div>
            <Navbottom/>
            <WhatsappButton/>
        </>
    )
}

export default Nav