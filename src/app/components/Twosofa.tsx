import React from 'react'
import Image from "next/image";

const Twosofa = () => {
  return (
    <div className="h-[400px] flex align-center justify-center gap-4">
       <div className="rounded-md overflow-hidden ml-10  shadow-sm h-[400px]">
            <Image
              className="object-cover object-center"
               src="/foamwhitesofa.jpg"
    
              alt="item"
              width={900}
              height={900}
              priority
            />
          </div>
          <div className="rounded-md overflow-hidden ml-10  shadow-sm h-[400px]">
            <Image
              className="object-cover object-center"
               src="/foamwhitesofa.jpg"
    
              alt="item"
              width={900}
              height={400}
              priority
            />
          </div>
      
    </div>
  )
}

export default Twosofa
