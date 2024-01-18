"use client";
import React from 'react'
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid';
import { useForm } from "react-hook-form"
import { motion } from 'framer-motion';


function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
      } = useForm()
    
      const onSubmit = (formData) => {
        window.location.href = `mailto:avikarkaul@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} `;
        reset({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
      }
  return (
    <motion.div 
    initial={{
        opacity: 0
    }}
    whileInView={{
        opacity: 1
    }}
    transition={{
        duration: 1.5
    }}
    className='min-h-screen flex overflow-hidden flex-col text-left
    max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className='top-20 md:top-24 uppercase tracking-[10px] md:tracking-[20px] text-lg md:text-2xl mt-16 text-rose-800'>
            Contact
        </h3>
        <div className='flex flex-col space-y-8 mt-2'>
            <h4 className='text-lg md:text-4xl font-semibold text-center'>
                Interested in working together? <span>Let's chat.</span>
            </h4>

            <div className='space-y-2'>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-rose-800 h-7 w-7 animate-pulse ' /> 
                    <p className='text-rose-800 text-lg md:text-2xl'>(201)-249-1471</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-rose-800 h-7 w-7 animate-pulse ' /> 
                    <p className='text-rose-800 text-lg md:text-2xl'>avikarkaul@gmail.com</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-rose-800 h-7 w-7 animate-pulse ' /> 
                    <p className='text-rose-800 text-lg md:text-2xl'>New York Metropolitan Area</p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-full'>
                    <div className='flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0'>
                        <input {...register('name')} placeholder="Name" className='contactInput flex-1' type="text" />
                        <input {...register('email')} placeholder="Email" className='contactInput flex-1' type="email" />
                    </div>
                    <input {...register('subject')} placeholder='Subject' className='contactInput w-full' type="text" />
                    <textarea {...register('message')} placeholder='Message' className='contactInput w-full'/>
                    <button type="submit" className='bg-rose-800 hover:bg-opacity-75 text-black font-bold py-3 px-6 rounded-md'>
                        Submit
                    </button>
                </form>
            
        </div>
    </motion.div>
  )
}

export default Contact