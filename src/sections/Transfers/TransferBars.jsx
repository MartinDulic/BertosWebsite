import React from 'react'
import { transfers, getTransferMinutes, MAX_TRANSFER_MINUTES } from '../../data/transfers/transfers'
import AnimatedBar from '../../components/Transfers/AnimatedBar' 

const TransferBars = () => {

  const transferBars = transfers.map((transfer, index) => {
    return <AnimatedBar 
      key={index} 
      fillAmount={(getTransferMinutes(transfer.duration)) / MAX_TRANSFER_MINUTES}
      duration={transfer.duration}
      route={transfer.route}
      price={transfer.price}

    />
  });

  return (
    <section className='px-12 py-8'>
      {transferBars}
    </section>
  )
}

export default TransferBars