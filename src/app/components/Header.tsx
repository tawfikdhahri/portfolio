'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import Link from 'next/link'
import { content } from '../types'
import { useState } from 'react'
import Sidebar from './SideBar'
import Button from './common/Button'
import Logo from './common/Logo'
const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <>
      <header
        className={`${
          sidebarOpen ? 'hidden' : 'flex'
        } w-full bg-dark text-white shadow-xl animate-slide-dow z-50`}
      >
        <div className="container mx-auto  flex items-center justify-between py-6 text-sm">
          {/*<div className="flex items-center">
            <div className="w-10 h-10 bg-transparent border-2 flex items-center justify-center border-[#64ffda] rotate-45 transform">
              <span className="font-bold  text-xl">T</span>
            </div>
          </div>*/}
          <Logo />

          <div className="hidden sm:grid grid-cols-[3fr,1fr] gap-10 items-center justify-between">
            <nav className="flex space-x-8">
              {content.map((item, index) =>
                item.icon ? null : (
                  <Link
                    key={index}
                    href={item.href}
                    className="hover:text-primary"
                  >
                    <span className="text-primary">{`0${index + 1}.`}</span>{' '}
                    {item.name}
                  </Link>
                )
              )}
            </nav>
            <Button label="Resume" textColor="text-primary" />
          </div>
          <div className="sm:hidden">
            <button
              onClick={toggleSidebar}
              className="text-white focus:outline-none"
            >
              <FontAwesomeIcon icon={faBars} size="lg" />
            </button>
          </div>
        </div>
      </header>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  )
}

export default Header
