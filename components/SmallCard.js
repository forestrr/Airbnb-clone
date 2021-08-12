import Image from 'next/image'
import React from 'react'

function SmallCard({img,location,distance}) {
    return (
        <div className="flex items-center m-2 space-x-4 
        rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105  transition-transform-200 ease-out">
            
            <div className="relative h-16 w-16">
                <Image className="rounded-lg " src={img} layout="fill"/>
            </div>
            
            <div className="">
                <h2>{location}</h2>
                <h3>{distance}</h3>
            </div>
        </div>
    )
}

export default SmallCard
