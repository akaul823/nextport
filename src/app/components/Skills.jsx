"use client";
import React from 'react'
import { motion } from 'framer-motion';
import Skill from './Skill';
// grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-4 p-4
function Skills() {
  const skillsData = [
    {
      src: 'images/JavaScript.png', name: 'JavaScript', proficiency: ''
    },
    {
      src: 'images/Next.js.png', name: 'Next.js', proficiency: ''
    },
    {
      src: 'images/React.png', name: 'React', proficiency: ''
    },
    {
      src: 'images/Figma.png', name: 'Figma', proficiency: ''
    },
    {
      src: 'images/Tailwind CSS.png', name: 'Tailwind', proficiency: ''
    },
    {
      src: 'images/Python.png', name: 'Python', proficiency: ''
    },
    {
      src: 'images/TensorFlow.png', name: 'Tensor', proficiency: ''
    },
    {
      src: 'images/PyTorch.png', name: 'PyTorch', proficiency: ''
    },
    {
      src: 'images/R.png', name: 'R', proficiency: ''
    },
    {
      src: 'images/SQLite.png', name: 'SQL', proficiency: ''
    },
    {
      src: 'images/Flask.png', name: 'Flask', proficiency: ''
    },
    {
      src: 'images/SQLAlchemy.png', name: 'SQLA', proficiency: ''
    },
    {
      src: 'images/Git.png', name: 'Git', proficiency: ''
    },
    {
      src: 'images/JSON.png', name: 'json', proficiency: ''
    },
    {
      src: 'images/Node.js.png', name: 'Node', proficiency: ''
    },
    {
      src: 'images/Cplus.png', name: 'C++', proficiency: 'Learning'
    },
    {
      src: 'images/Arduino.png', name: 'Arduino', proficiency: 'Learning'
    },
    {
      src: 'images/Unreal Engine.png', name: 'Unreal', proficiency: 'Learning'
    },
  ]
  return (
    
    <motion.div 
    initial={{
        opacity:0,
    }}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='min-h-screen flex overflow-hidden flex-col text-left
    max-w-full px-10 justify-evenly mx-auto items-center'>
      
        <h3 className='top-24 md:top-24 uppercase tracking-[10px] md:tracking-[20px] text-lg md:text-2xl mt-5 md:mt-0 text-rose-800'>Skills</h3>
        {/* <h3 className='top-36 uppercase tracking-[3px] text-lg md:text-lg opacity-60'>Check out my stack!</h3> */}
        {/* grid grid-cols-3 sm:grid-cols-6 gap-8 p-5 w-full bg-fuchsia-800 bg-opacity-60 border rounded-lg border-fuchsia-900 */}
        <div className='grid grid-cols-3 sm:grid-cols-6 gap-8 p-5 w-full bg-fuchsia-800 bg-opacity-60 border rounded-lg border-fuchsia-900'>
          {skillsData.map((skill, index)=>(
            <Skill key={index} src={skill.src} name={skill.name} proficiency={skill.proficiency} />

          )
          )}
        </div>
      {/* <div className='w-full absolute top-[30%] bg-rose-800 bg-opacity-50 right-0 h-[400px] skew-y-12 z-[-1]'/> */}
    </motion.div> 
    
  )
}

export default Skills