// Sidebar.tsx
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faLinkedin,
  faGithub
} from '@fortawesome/free-brands-svg-icons'
import { faTimes, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { content } from '../types'
import Button from './common/Button'
import Logo from './common/Logo'

interface SidebarProps {
  isOpen: boolean
  toggleSidebar: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const iconMap: Record<string, IconDefinition> = {
    faTwitter,
    faLinkedin,
    faGithub
  }

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-1 z-50 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="flex items-center justify-between p-6">
        <Logo />
        <button
          onClick={toggleSidebar}
          className="text-primary focus:outline-none"
        >
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </button>
      </div>
      <nav className="flex flex-col items-center space-y-8 mt-8">
        {content.map((item, index) =>
          item.icon ? null : (
            <Link
              key={index}
              href={item.href}
              className="hover:text-gray-400 text-white"
              onClick={toggleSidebar}
            >
              {item.name}
            </Link>
          )
        )}
        <Button label="Resume" textColor="text-primary" />
      </nav>
    </div>
  )
}

export default Sidebar
