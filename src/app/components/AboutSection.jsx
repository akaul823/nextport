"use client";
import React, { useState, useTransition } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';
const TAB_DATA = [
  {
    title:"Skills",
    id: "skills",
    content:(
      <ul className='list-disc pl-2' style={{ columns: '2', WebkitColumns: '2', MozColumns: '2' }}>
        <li>Python</li>
        <li>JavaScript</li>
        <li>React.js</li>
        <li>Next.js</li>
        <li>SQL</li>
        <li>FLask</li>
        <li>SQLAlchemy</li>
        <li>R</li>
        <li>PyTorch</li>
        <li>TensorFlow</li>
      </ul>
    )
  },
  {
    title:"Education",
    id: "education",
    content:(
      <ul className='list-disc pl-2'>
        <li>Flatiron School: Fullstack Software Engineering</li>
        <li>University of Pittsburgh</li>
        <li>Institute for Integrative Nutrition</li>
      </ul>
    )
  },
  {
    title:"Experience",
    id: "experience",
    content:(
      <ul className='list-disc pl-2'>
        <li>Job1</li>
        <li>Job2</li>
        <li>Job3</li>
        <li>Job4</li>
      </ul>
    )
  }
]

const AboutSection = () => {
    const [tab, setTab]= useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id)=>{
      startTransition(()=>{
        setTab(id)
      });
    };

  return (
    <section id="about" className='text-white'><div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image src="/images/ironman.jpeg" width={400} height={400}/>
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
            <h2 className='text-txl font-bold text-white mb-4'>About Me</h2>
            <p className='text-base lg:text-lg'>
            I am a passionate explorer, ever on a journey of discovery—whether it's treading new 
            physical terrains, diving deep into intellectual challenges, or embarking on spiritual quests to 
            unearth deeper layers of self-awareness. I am not just driven by curiosity; I am fueled by it. Challenging conventions, 
            dissecting complexities, and solving intricate problems are more than just pursuits—they are thrilling adventures with countless possibilities.
            </p>
            <div className='flex flex-row justify-start mt-8'>
                <TabButton selectTab={()=>handleTabChange("skills")} active={tab ==="skills"}>
                  {" "}
                  Skills{" "}
                  </TabButton>
                <TabButton selectTab={()=>handleTabChange("education")} active={tab ==="education"}>
                  {" "}
                  Education{" "}
                </TabButton>
                <TabButton selectTab={()=>handleTabChange("experience")} active={tab ==="experience"}>
                  {" "}
                  Experience{" "}
                </TabButton>
            </div>
            <div className='mt-8'>{TAB_DATA.find((t)=> t.id ===tab).content}</div>
        </div>
        </div></section>
  )
}

export default AboutSection