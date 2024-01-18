"use client"
import React from 'react';
import Draggable from 'react-draggable';
import Link from 'next/link';

function HomeButton() {
  return (
    <Link href="#hero">
    <footer className='sticky bottom-4 w-full cursor-pointer'>
      <div className='flex items-center justify-center'>
      <Draggable>
              <img className="h-14 w-14 rounded-full filter grayscale hover:grayscale-0 cursor-pointer" src="/images/coolLogo.png" />
        </Draggable>
      </div>
    </footer>
  </Link>
  )
}

export default HomeButton