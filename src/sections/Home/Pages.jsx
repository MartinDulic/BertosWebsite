import React from 'react'
import PageBanner from '../../components/Home/PageBanner'
import puntica from '../../assets/temp/puntica_1.jpeg'
import bertoBrod1 from '../../assets/temp/berto_brod1.jpg'
import bertoBrod2 from '../../assets/temp/berto_brod2.jpg'
import hvarRiva from '../../assets/temp/hvar_riva.jpeg'

const Pages = () => {
  return (
    <section className='h-fit py-12 lg:py-20  flex justify-center lg:justify-evenly items-center flex-wrap gap-8 '>
        <PageBanner image={hvarRiva} title="Fleet" linkTo={"/fleet"}/>
        <PageBanner image={puntica} title="Private Tours" linkTo={"/privateTours"}/>
        <PageBanner image={bertoBrod2} title="Group Tours" linkTo={"/groupTours"}/>
        <PageBanner image={bertoBrod1} title="Transfers" linkTo={"/transfers"}/>
    </section>
  )
}

export default Pages