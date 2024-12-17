import Technos from './components/Technos'
import Hero from './components/Hero'

const About = () => {
  return (
    <div className="py-32">
      {/** About */}
      <div className="container mx-auto">
        <Hero />

        {/*<div className="flex justify-center animate-slideInRight">
            <div className="relative w-96 h-96 rounded-full overflow-hidden shadow-xl">
              <Image
                src="/image1.png" // Update with your image
                alt="Your Image"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>*/}
      </div>
      <div>
        {' '}
        <Technos />
      </div>
    </div>
  )
}

export default About
