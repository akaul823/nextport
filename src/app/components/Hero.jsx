"use client";
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';

function Hero() {
    const [text, count] = useTypewriter({
        words: ["Software Engineer","Problem Solver", "Creative Explorer"],
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
        <h1>
            <span>{text}</span>
            <Cursor cursorColor='purple' />
        </h1>
    </div>
  )
}

export default Hero