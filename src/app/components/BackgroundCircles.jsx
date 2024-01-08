import React from 'react'
import {motion} from "framer-motion"

function BackgroundCircles() {
  return ( 
    <motion.div 
    initial= {{
        opacity: 0,
    }}
    animate = {{
        scale: [1,2,2,3,1],
        opacity: [.1,.2,.4,.8,.1,1.0],
        borderRadius: ["20%","20%","50%","80%","20%" ]
    }}
    transition={{
        duration: 2.5,
    }}
    className='relative flex justify-center items-center'>
        <div className=' absolute border border-fuchsia-500 rounded-full h-[200px] w-[200px] mt-52 animate-ping' />
        <div className='rounded-full border border-red-600 opacity-40 h-[315px] w-[315px] absolute mt-52' />
        <div className='rounded-full border border-red-700 opacity-40 h-[500px] w-[500px] absolute mt-52' />
        <div className='rounded-full border border-fuchsia-800 opacity-500 h-[650px] w-[650px] absolute mt-52 animate-pulse' />
        {/* <div className='rounded-full border border-red-800 h-[665px] w-[665px] absolute mt-52' /> */}
    </motion.div>
  )
} 

export default BackgroundCircles