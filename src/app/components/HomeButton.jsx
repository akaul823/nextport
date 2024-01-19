"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function HomeButton() {
  return (
    <Link href="#hero">
    <footer className='sticky bottom-4 w-full cursor-pointer'>
      <div className='flex items-center justify-center'>
        <Image width={200} height={200} alt='home-button' className="h-14 w-14 rounded-full filter ml-[-80%] md:ml-[-90%] grayscale hover:grayscale-0 cursor-pointer" src="/images/coolLogo.png" />
      </div>
    </footer>
  </Link>
  )
}

export default HomeButton