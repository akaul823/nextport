import Image from 'next/image'
import Header from './components/Header';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
import EmailSection from './components/EmailSection';
import Footer from './components/Footer';
import About from './components/About';
// import Head from 'next/head';
// cool red: bg-[rgb(96,38,38)]

export default function Home() {
  return (
    // flex h-screen flex-col 
    <div className="h-screen bg-[rgb(0,0,0)] text-fuchsia-700 snap-y snap-mandatory overflow-scroll z-0">

      {/* Header */}
      <Header />

      {/* Hero */}
      <section id='hero' className='snap-center'>
        <Hero />
      </section>

      {/* About */}
      <section id='about' className='snap-center'>
        <About />
      </section>

      {/* Experiences */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}

    </div>
  );
}
