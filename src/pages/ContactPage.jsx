import React from 'react'
import Logo from "../assets/Logo_small.webp"
import IconedTextLine from '../components/Navigation/IconedTextLine'
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const ContactPage = () => {
  return (
    <section className='w-full h-[calc(100vh-80px)] relative bg-primary flex flex-col gap-4 sm:gap-8 items-center justify-center text-white'>
      <div className='p-1 bg-white rounded-full mb-8 md:mb-0 '>
        <img src={Logo} className='w-20'/>
      </div>
      <IconedTextLine icon={<FaMapMarkedAlt />} text={"Marineta 15"} linkTo={"https://www.google.com/maps/place/Parking/@43.2914311,17.0203153,19.47z/data=!4m6!3m5!1s0x134aef408b79cfd9:0xe0a49a8467b35995!8m2!3d43.2915483!4d17.0202892!16s%2Fg%2F11h7dd1jpj?entry=ttu&g_ep=EgoyMDI1MDEwMS4wIKXMDSoASAFQAw%3D%3D"}/>
      <IconedTextLine icon={<FaPhone />} text={"+385998204849"} linkTo={"tel:+385998204849"}/>
      <IconedTextLine icon={<FaWhatsapp />} text={"Berto Gilić"} linkTo={"https://wa.me/385998204849?text=Hello,%20I'm%20interested%20in%20your%20services."}/>
      <IconedTextLine icon={<FaInstagram />} text={"rent_a_boat_makarska"}  linkTo={"https://www.instagram.com/rent_a_boat_makarska/"}/>
    </section>
  )
}

export default ContactPage