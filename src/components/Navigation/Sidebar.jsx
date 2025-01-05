import React, {useEffect, useState} from 'react'
import navLinks from '../../data/NavLinks.js'
import SidebarLink from './SidebarLink.jsx';

const Sidebar = ({isOpen}) => {

  const [visible, setVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
    } else {
      setTimeout(() => setVisible(false), 300); // Match the animation duration
    }
  }, [isOpen]);
  
  if (!visible) return null;

  return (
    <section id='sidebar' className={`z-10 md:hidden bg-secondary fixed h-full w-full transform transition-transform duration-300 ease-in-out
     ${isOpen ? 'translate-y-0' : '-translate-y-full'}`} >
      <div className='flex flex-col'>
        {navLinks.map((item, index) => (
          <SidebarLink Text={item.linkText} Path={item.toPath} />
        ))}
      </div>
    </section>
  )
}

export default Sidebar