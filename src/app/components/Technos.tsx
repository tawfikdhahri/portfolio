'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faReact,
  faNodeJs,
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faDocker,
  faAws
} from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons' // Example for solid icon
import { useEffect, useState } from 'react'

const Technos = () => {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true)
    }, 500) // Delay before animation starts
    return () => clearTimeout(timer)
  }, [])

  const technos = [
    { name: 'React', icon: faReact, color: 'text-blue-600' },
    { name: 'Next.js', icon: faJsSquare, color: 'text-black' }, // Replace with appropriate icon
    { name: 'Node.js', icon: faNodeJs, color: 'text-green-500' },
    { name: 'HTML5', icon: faHtml5, color: 'text-orange-600' },
    { name: 'CSS3', icon: faCss3Alt, color: 'text-blue-600' },
    { name: 'JavaScript', icon: faJsSquare, color: 'text-yellow-500' },
    { name: 'TypeScript', icon: faJsSquare, color: 'text-blue-500' }, // Replace with appropriate icon
    { name: 'Tailwind CSS', icon: faCss3Alt, color: 'text-teal-500' }, // Replace with appropriate icon
    { name: 'GraphQL', icon: faJsSquare, color: 'text-pink-500' }, // Replace with appropriate icon
    { name: 'PostgreSQL', icon: faDatabase, color: 'text-blue-800' }, // Replace with appropriate icon
    { name: 'MongoDB', icon: faDatabase, color: 'text-green-500' }, // Replace with appropriate icon
    { name: 'Docker', icon: faDocker, color: 'text-blue-500' },
    { name: 'AWS', icon: faAws, color: 'text-orange-500' }
  ]

  return (
    <div className="py-20 w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Technologies I Master
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-8">
          {technos.map((tech, index) => (
            <div
              key={tech.name}
              className={`flex flex-col items-center transition-opacity duration-1000 ease-out ${
                animate
                  ? index % 2 === 0
                    ? 'animate-fadeInLeft'
                    : 'animate-fadeInRight'
                  : 'opacity-0'
              }`}
            >
              <div
                className={`rounded-full bg-gray-100 p-6 ${tech.color} w-24 h-24 flex items-center justify-center`}
              >
                <FontAwesomeIcon icon={tech.icon} size="3x" />
              </div>
              <span className="mt-2 text-lg font-semibold text-gray-700">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Technos
