"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value
        };
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send/";

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSONdata,
        };

        try {
            console.log(endpoint)
            const response = await fetch(endpoint, options);
            console.log(response)
            
            if (!response.ok) {
                // Handle non-OK responses here
                console.error("Server responded with non-OK status:", response.status);
                return;
            }

            const resData = response;
            console.log(resData);

            if (response.status === 200) {
                console.log('Message sent.');
                setEmailSubmitted(true);
                e.target.reset()
            }
        } catch (error) {
            console.error("Fetch error:", error);
        }
    };
    
  return (
    <section id="contact" className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-700 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2 animate-pulse"></div>
        <div><h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
            {" "}
            I am looking for new opportunities to learn and grow; my inbox is always open.
            I'll do my best to get back to you as soon as possible!
        </p>
        <div className='socials flex flex-row gap-2'>
            <Link href="https://github.com/akaul823">
                <Image src={GithubIcon} alt="Github Icon" />
            </Link>
            <Link href="https://www.linkedin.com/in/avikarkaul">
                <Image src={LinkedinIcon} alt="Linkedin Icon" />
            </Link>
        </div>
        </div>
        <div>
            <form className="flex flex-col gap-3"onSubmit={handleSubmit}>
                <label htmlFor="email" className="text-white block mb-0 text-sm font-medium">Your email</label>
                <input type="email" id="email" required className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder="example@gmail.com" />
                <div className="mb-3">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-3 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-">
              <label
                htmlFor="message"
                className="text-white block text-sm font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
            {
                emailSubmitted && (
                    <p className="text-green-500 text-sm mt-2">
                        Email sent successfully!
                    </p>
                )
            }
            </form>
        </div>
    </section>
  )
}

export default EmailSection