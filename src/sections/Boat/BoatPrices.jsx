import React from 'react'

const BoatPrices = ({prices}) => {
  return (
    <div className='flex justify-center'>
        
        <table className="border border-primary border-collapse w-full">
            <thead>
                <tr className='flex text-xl'>
                    <th className="flex-1 border border-primary px-4 py-2">From</th>
                    <th className="flex-1 border border-primary px-4 py-2">To</th>
                    <th className="flex-1 border border-primary px-4 py-2">Price</th>
                </tr>
            </thead>
            <tbody>
                {prices.map((item, index) => (
                    <tr key={index} className={`${index % 2 === 0 ? "bg-primary/10" : ""} flex text-center `}>
                        <td className="flex-1 border border-primary py-2">{item.from}</td>
                        <td className="flex-1 border border-primary py-2">{item.to}</td>
                        <td className="flex-1 border border-primary py-2">{item.price} €</td>
                    </tr>
                ))}
            </tbody>
        </table>

    </div>
  )
}

export default BoatPrices