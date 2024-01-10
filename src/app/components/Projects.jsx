"use client";
import React from 'react'

function Projects() {
  const projectsData = [1,2,3,4];
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-24 uppercase tracking-[10px] md:tracking-[20px] text-lg md:text-2xl text-rose-800'>Projects</h3>
        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'> 
          {projectsData.map((project, index)=>(
            <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
              <img className='w-[250px] h-[250px]' src='/images/scrapp.png' alt='logos' />
              <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                <h4 className='text-4xl font-semibold text-center'><span className='underline decoration-rose-900'>Project {index + 1}:</span> Scrap</h4>
              <p className='text-rose-800 text-lg text-center md:text-left'>Under Construction</p>
              </div>
            </div>
            ))}
        </div>
      <div className='w-full absolute top-[30%] bg-rose-800 bg-opacity-40 left-0 h-[500px] skew-y-12'/>
    </div>
  )
}

export default Projects