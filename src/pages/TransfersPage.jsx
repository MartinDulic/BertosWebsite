import React from 'react';
import TransfersHero from '../sections/Transfers/TransfersHero'
import TransferBars from '../sections/Transfers/TransferBars'
import TransferSteps from '../sections/Transfers/TransferSteps'

const TransfersPage = () => {
  return (
    <>
      <TransfersHero 
        title={"Transfers"}
        description={"Experience a faster, more comfortable, and cost-efficient cruise to your destination with our speedboat. We offer fast speedboat transfers to the listed locations. For more information, please contact us! The exact price depends on the time of the year and type of boat."}
      />
      <TransferBars />
      {/* <TransferSteps/> */}
    </>
  )
}

export default TransfersPage