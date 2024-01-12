import Image from 'next/image'
import Contact from './components/Contact';
import Header from './components/Header';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
import EmailSection from './components/EmailSection';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Experience from './components/ExperienceSection';
import Link from 'next/link';
// import Head from 'next/head';
// cool red: bg-[rgb(96,38,38)]

export default function Home() {
  return (
    // flex h-screen flex-col 
    <div className="h-screen bg-[rgb(0,0,0)] text-fuchsia-700 snap-y snap-mandatory overflow-y-scroll 
    overflow-x-hidden z-0 scrollbar scrollbar-track-[rgb(24,24,24)] scrollbar-thumb-rose-800">

      {/* Header */}
      <Header />

      {/* Hero */}
      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      {/* About */}
      <section id='about' className='snap-center'>
        <About />
      </section>

      {/* Experiences */}
      <section id='experience' className='snap-center'>
        <Experience />
      </section>

      {/* Skills */}
      <section id='skills' className='snap-start'>
        <Skills />
      </section>

      {/* Projects */}
      <section id='projects' className='snap-start'>
        <Projects/>
      </section>

      {/* Contact Me */}
      <section id='contact' className='snap-start'>
        <Contact />
      </section>

      <Link href="#hero">
        <footer className='sticky bottom-4 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <img className="h-14 w-14 rounded-full filter grayscale hover:grayscale-0 cursor-pointer" src="/images/coolLogo.png" />
          
          </div>
        </footer>
      </Link>
        

    </div>
  );
}
