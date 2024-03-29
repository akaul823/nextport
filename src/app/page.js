import Contact from './components/Contact';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Experience from './components/ExperienceSection';
import HomeButton from './components/HomeButton';


export default function Home() {
  return (
    <div className="h-screen bg-[rgb(0,0,0)] text-fuchsia-700 snap-y snap-mandatory overflow-y-scroll 
    overflow-x-hidden z-0 scrollbar scrollbar-track-[rgb(24,24,24)] scrollbar-thumb-rose-800">
      <Header />

      <section id='hero' className='md:snap-start'>
        <Hero />
      </section>

      <section id='about' className='md:snap-start'>
        <About />
      </section>

      <section id='experience' className='md:snap-center'>
        <Experience />
      </section>

      <section id='skills' className='md:snap-start'>
        <Skills />
      </section>

      <section id='projects' className='md:snap-center'>
        <Projects/>
      </section>

      <section id='contact' className='md:snap-start'>
        <Contact />
      </section>

      <HomeButton />
        
    </div>
  );
}
