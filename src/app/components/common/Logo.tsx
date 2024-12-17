import React from 'react'
import Image from 'next/image'

function Logo() {
  return (
    <div className="w-10 h-10 relative group">
      <Image
        src="/logo.svg" // Update with your image
        alt="logo"
        objectFit="contain"
        className="w-10 h-10 transition-transform transform group-hover:translate-x-[-3px] group-hover:translate-y-[-3px]"
        width={40} // You can adjust the size based on your requirements
        height={40}
      />
    </div>
  )
}

export default Logo
