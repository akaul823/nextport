import Image from 'next/image'
import Header from './components/Header';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
import EmailSection from './components/EmailSection';
import Footer from './components/Footer';
// import Head from 'next/head';
// cool red: bg-[rgb(96,38,38)]

export default function Home() {
  return (
    <div className="flex h-screen flex-col bg-[rgb(0,0,0)] text-fuchsia-600 snap-y snap-mandatory overflow-scroll z-0">

      {/* Header */}
      <Header />

      {/* Hero */}
      <section id='hero' className='snap-center'>
        <Hero />
      </section>

      {/* About */}

      {/* Experiences */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}

    </div>
  );
}
