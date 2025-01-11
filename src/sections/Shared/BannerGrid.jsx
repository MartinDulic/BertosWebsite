import React from 'react'
import LinkBanner from '../../components/Fleet/LinkBanner.jsx'

const BannerGrid = ({banners, items, linkPrefix}) => {
  return (
    <section className='flex flex-wrap items-center justify-center py-12'>
      {banners ? 
        banners
        :
        items.map((item, index) => (
          <LinkBanner key={index} image={item.bannerImage} title={item.name} linkTo={`${linkPrefix}/${item.id}`} />
        )) 
    
      }
      {}
    </section>
  )
}

export default BannerGrid