"use client";
import React from 'react'

function Projects() {
  const projectsData = [1,2,3,4];
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-24 uppercase tracking-[10px] md:tracking-[20px] text-lg md:text-2xl text-rose-800'>Projects</h3>
        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'> 
          {projectsData.map((project)=>(
            <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
              <img className='w-[270px] h-[270px]' src='/images/scrapp.png' alt='logos' />
              <div><h4>Case Study 1 of 3</h4></div>
            </div>
            ))}
        </div>
      <div className='w-full absolute top-[30%] bg-rose-800 bg-opacity-40 left-0 h-[500px] skew-y-12'/>
    </div>
  )
}

export default Projects