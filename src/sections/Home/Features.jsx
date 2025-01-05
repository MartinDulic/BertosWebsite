import React from 'react'
import IconBanner from '../../components/Home/IconBanner'
import { FaMoneyBillAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { IoBoatSharp } from "react-icons/io5";
import { MdExplore } from "react-icons/md";


const Features = () => {
  return (
    <section className='w-full flex flex-col lg:flex-row items-center justify-center'>
        <IconBanner icon={<FaMoneyBillAlt/>} title={"Best Value"} text={"Book with or without a skipper at the best price on the market!"}/>
        <IconBanner icon={<FaClock />} title={"24/7 Customer care"} text={"From booking to docking, our team is available to support you."}/>
        <IconBanner icon={<IoBoatSharp />} title={"Premium Experience"} text={"All boats are inspected, cleaned, and equipped to exceed your expectations."}/>
        <IconBanner icon={<MdExplore />} title={"Explore like a local"} text={"Gain insider tips on the best routes, hidden gems and must-see places"}/>
    </section>
  )
}

export default Features