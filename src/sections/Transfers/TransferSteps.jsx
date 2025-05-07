import React from 'react'
import TransferStep from '../../components/Transfers/TransferStep'


const TransferSteps = () => {
  return (
    <section className='w-full bg-secondary p-6 flex flex-col items-center justify-center '>
      <h2 className='text-2xl xl:text-4xl text-center text-primary font-bold'>Your perfect day on the sea is just a boat rental away – adventure is calling!</h2>
      <div className='mt-6 md:mt-12 max-w-4xl '>
        <TransferStep number={1} title={"Select Your Boat"} description={"Every boat has a maximum passenger capacity, so please pay attention to this detail."} />
        <TransferStep number={2} title={"Book & Confirm"} description={"Contact us to determine the availability of the boat, the approximate route, and weather."} />
        <TransferStep number={3} title={"Pay Deposit"} description={"After the payment, you will receive a PDF confirmation via email or WhatsApp with all the details."} />
        <TransferStep number={4} title={"Enjoy"} description={"Meet us at 9 AM on the tour day at Marineta 15, Makarska. The remaining payment is due that day. Each trip we offer is designed to be one-of-a-kind, with our professional skippers dedicated to customizing it to your preferences. Choosing a boat that aligns perfectly with both your wishes and budget is crucial. The fees for the boat and skipper remain constant, whereas fuel expenses will vary based on the destinations you choose."} />
      </div>
    </section>
  )
}

export default TransferSteps