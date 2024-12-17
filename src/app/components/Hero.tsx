import React from 'react'
import Button from './common/Button'

const Hero = () => {
  return (
    <section className="h-screen flex items-start ">
      <div className="max-w-screen-xl mx-auto">
        <h5 className="text-xl  mb-8 text-primary">Hi, my name is</h5>
        <h5 className="text-5xl font-bold mb-8 text-[#ccd6f6]">
          Taoufik Dhahri{' '}
        </h5>
        <p className="text-5xl font-bold mb-8 text-[#8892b0]">
          I build things for the web.
        </p>
        <p className="text-lg mb-10 text-[#e6f1ff]">
          I'm a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I'm focused on
          building accessible, human-centered products at Upstatement.
        </p>
        <Button textColor="text-primary" label="Say Hello" />
      </div>
    </section>
  )
}

export default Hero
