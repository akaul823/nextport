import Image from 'next/image'
import Header from './components/Header';
import NavBar from './components/NavBar';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
import EmailSection from './components/EmailSection';
import Footer from './components/Footer';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <Head>
        <title>
          Avi's Portfolio
        </title>
      </Head>
      {/* Header */}
      <Header />

      {/* Hero */}

      {/* About */}

      {/* Experiences */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}

    </div>
  );
}
