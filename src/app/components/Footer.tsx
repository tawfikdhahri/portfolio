import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faFacebook
} from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <Link href="https://www.linkedin.com/in/your-profile" passHref>
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2x"
              className="text-white mx-2 hover:text-blue-500 transition-colors duration-300"
              aria-label="LinkedIn"
            />
          </Link>
          <Link href="https://github.com/your-profile" passHref>
            <FontAwesomeIcon
              icon={faGithub}
              size="2x"
              className="text-white mx-2 hover:text-gray-500 transition-colors duration-300"
              aria-label="GitHub"
            />
          </Link>
          <Link href="https://twitter.com/your-profile" passHref>
            <FontAwesomeIcon
              icon={faTwitter}
              size="2x"
              className="text-white mx-2 hover:text-blue-300 transition-colors duration-300"
              aria-label="Twitter"
            />
          </Link>
          <Link href="https://facebook.com/your-profile" passHref>
            <FontAwesomeIcon
              icon={faFacebook}
              size="2x"
              className="text-white mx-2 hover:text-blue-700 transition-colors duration-300"
              aria-label="Facebook"
            />
          </Link>
        </div>
        <div className="text-gray-400">
          <Link href="/" passHref>
            <span className="hover:text-white mx-2 transition-colors duration-300">
              Home
            </span>
          </Link>
          <Link href="/about" passHref>
            <span className="hover:text-white mx-2 transition-colors duration-300">
              About
            </span>
          </Link>
          <Link href="/projects" passHref>
            <span className="hover:text-white mx-2 transition-colors duration-300">
              Projects
            </span>
          </Link>
          <Link href="/contact" passHref>
            <span className="hover:text-white mx-2 transition-colors duration-300">
              Contact
            </span>
          </Link>
        </div>
        <div className="mt-4">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Taoufik. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
