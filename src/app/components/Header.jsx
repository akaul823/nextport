'use client';
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion"
// className='text-[#d2914a]'

function Header() {
  return (
    // took out mx-auto for split icons
    <header className='sticky top-0 p-5 flex items-start justify-between w-full max-w-7xl mx-auto z-20 xl:items-center '> 
        <motion.div 
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}

        transition={{
            duration: 1.5,
        }}
        
        className='flex flex-row items-center'>
            {/* Social Icons */}
            <SocialIcon 
            className='hover:animate-spin'
            url='https://www.linkedin.com/in/avikarkaul/'
            fgColor='#991b1b'
            bgColor='transparent'
            ></SocialIcon>

            <SocialIcon 
            className='hover:animate-spin'
            url='https://medium.com/@avikarkaul'
            fgColor='#991b1b'
            bgColor='transparent'
            ></SocialIcon>
            <SocialIcon 
            className='hover:animate-spin'
            url='https://github.com/akaul823'
            fgColor='#991b1b'
            bgColor='transparent'
            ></SocialIcon>
            {/* <SocialIcon 
            url='https://www.instagram.com/@avikarkaul'
            fgColor='red'
            bgColor='transparent'
            ></SocialIcon> */}
        </motion.div>
        <motion.div 
        initial={{
            x: 500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}

        transition={{
            duration: 1.5,
        }}

        
        className='flex flex-row items-center cursor-pointer'>
            <SocialIcon
            className='cursor-pointer hover:animate-spin'
            network='email'
            fgColor='#991b1b'
            bgColor='transparent'
            ></SocialIcon>
            <p className='uppercase hidden md:inline-flex text-sm text-rose-800 hover:text-fuchsia-800 '>Hit me up</p>
        </motion.div>
    </header>
  )
}

export default Header