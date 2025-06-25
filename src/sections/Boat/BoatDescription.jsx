import React from 'react'

const BoatDescription = ({Description}) => {
  return (
    <div>
        <p className="text-lg px-4 sm:px-10 xl:px-40">
            {Description.map((part, index) =>
                part.endl ? ( <><br/> <br/></>) :
                part.bold ? (
                    <span key={index} className="font-bold">
                    {part.text}
                    </span>
                ) : (
                    <span key={index}>{part.text}</span>
                )
            )}
        </p>
    </div>
  )
}

export default BoatDescription