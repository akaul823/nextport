"use client";
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';
import Link from 'next/link';

function Hero() {
    const [text, count] = useTypewriter({
        words: ["print('Hello World!')","console.log('My name's Avi')"],
        loop: true,
        delaySpeed: 2000,
    });
  return (
    // flex min-h-screen flex-col bg-[rgb(24,24,24)] text-red-600 snap-y snap-mandatory overflow-scroll z-0
    // h-screen flex flex-col space-y-8 items-center justify-center text-center
    <div className='min-h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-visible'>
        <BackgroundCircles />
        <Image
            className='relative rounded-full mx-auto object-cover'
            src="/images/black.PNG"
            alt='hero image'
            width={200}
            height={200}
        /> 
        <div className='z-20'>
            <h2 className='text-sm uppercase text-rose-800 tracking-[15px]'>Software Engineer</h2>
            <h1 className='text-5xl lg:text-6xl font-semibold px-10'> 
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='purple' />
            </h1>

            <div className='pt-1 '>
                <Link href='#about'><button className='heroButton'>About</button></Link>
                <Link href='#experience'><button className='heroButton'>Experience</button></Link>
                <Link href='#skills'><button className='heroButton'>Skills</button></Link>
                <Link href='#projects'><button className='heroButton'>Projects</button></Link>
                
                
                
                
            </div>
        </div>

    </div>
  )
}

export default Hero