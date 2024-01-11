"use client";
import React from 'react'
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid';
import { useForm } from "react-hook-form"

// I am always looking for new opportunities to learn and grow; my inbox is always open.
// I'll do my best to get back to you as soon as possible!

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
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row 
    max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-20 md:top-24 uppercase tracking-[10px] md:tracking-[20px] text-lg md:text-2xl text-rose-800'>
            Contact
        </h3>
        <div className='flex flex-col space-y-10'>
            <br></br>
            <h4 className='text-4xl font-semibold text-center'>
                Interested in working together? <span>Let's chat.</span>
            </h4>

            <div className='space-y-10'>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-rose-800 h-7 w-7 animate-pulse ' /> 
                    <p className='text-rose-800 text-2xl'>(201)-249-1471</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-rose-800 h-7 w-7 animate-pulse ' /> 
                    <p className='text-rose-800 text-2xl'>avikarkaul@gmail.com</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-rose-800 h-7 w-7 animate-pulse ' /> 
                    <p className='text-rose-800 text-2xl'>New York Metropolitan Area</p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>
                    <input {...register('name')} placeholder="Name" className='contactInput' type="text" />
                    <input {...register('email')} placeholder="Email" className='contactInput'type="email" />
                </div>
            
                <input {...register('subject')} placeholder='Subject' className='contactInput'type="text" />

                <textarea {...register('message')} placeholder='Message' className='contactInput'/>
                <button type="submit" className='bg-rose-800 bg-opacity-85 hover:opacity-75 text-black font-bold py-5 px-10 rounded-md text-lg'>Submit</button>


            </form>

        </div>
    </div>
  )
}

export default Contact