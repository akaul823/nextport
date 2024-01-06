import React from 'react'
import { SocialIcon } from 'react-social-icons'
// className='text-[#d2914a]'

function Header() {
  return (
    // took out mx-auto for split icons
    <header className='sticky top-0 p-5 flex items-start justify-between w-full max-w-7xl mx-auto z-20 xl:items-center '> 
        <div className='flex flex-row items-center'>
            {/* Social Icons */}
            <SocialIcon 
            url='https://www.linkedin.com/in/avikarkaul/'
            fgColor='red'
            bgColor='transparent'
            ></SocialIcon>

            <SocialIcon 
            url='https://medium.com/@avikarkaul'
            fgColor='red'
            bgColor='transparent'
            ></SocialIcon>
            <SocialIcon 
            url='https://github.com/akaul823'
            fgColor='red'
            bgColor='transparent'
            ></SocialIcon>
            {/* <SocialIcon 
            url='https://www.instagram.com/@avikarkaul'
            fgColor='red'
            bgColor='transparent'
            ></SocialIcon> */}
        </div>
        <div className='flex flex-row items-center text-red-600 cursor-pointer'>
            <SocialIcon
            className='cursor-pointer'
            network='email'
            fgColor='red'
            bgColor='transparent'
            ></SocialIcon>
            <p className='uppercase hidden md:inline-flex text-sm text-red-600 '>Hit me up</p>
        </div>
    </header>
  )
}

export default Header