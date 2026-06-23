import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { Magnet } from '../components/Magnet';
import { ContactButton } from '../components/Buttons';

export const HeroSection: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex flex-col justify-between overflow-hidden bg-[#0C0C0C] w-full">
      {/* Navbar */}
      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        className="w-full flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 z-20"
      >
        <a
          href="#about"
          onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
          className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
        >
          About
        </a>
        <a
          href="#services"
          onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
          className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
        >
          Price
        </a>
        <a
          href="#projects"
          onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
          className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
        >
          Projects
        </a>
        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
          className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
        >
          Contact
        </a>
      </FadeIn>

      {/* Hero Heading Container */}
      <div className="flex-1 flex items-center justify-center w-full z-0 select-none">
        <div className="w-full overflow-hidden text-center mt-6 sm:mt-4 md:-mt-5">
          <FadeIn
            as="h1"
            delay={0.15}
            y={40}
            className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[10vw] sm:text-[11vw] md:text-[11.5vw] lg:text-[12vw]"
          >
            Hi, i&apos;m anjima
          </FadeIn>
        </div>
      </div>

      {/* Hero Portrait: Magnet wrapped image, absolutely centered */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-[60%] -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-[-40px] flex justify-center">
        <FadeIn delay={0.6} y={30} className="w-full">
          <Magnet
            padding={250}
            strength={2}
            maxOffset={100}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="w-full"
          >
            <img
              src="/female_3d_avatar.png"
              alt="Anjima Portrait"
              className="w-full h-auto object-contain select-none pointer-events-none"
              draggable="false"
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="w-full flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 z-20">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[280px] sm:max-w-[420px] md:max-w-[500px] lg:max-w-[620px] text-left"
            style={{ fontSize: 'clamp(0.8rem, 1.3vw, 1.35rem)' }}
          >
            UI/UX Designer | Frontend Developer | Academic Mentor
            <span className="block mt-2 normal-case font-light opacity-75" style={{ fontSize: 'clamp(0.7rem, 1.1vw, 1.05rem)' }}>
              I create user-centered digital experiences, build responsive web solutions, mentor aspiring tech professionals, and contribute to AI research through IEEE publications.
            </span>
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton onClick={() => scrollToSection('contact')} />
        </FadeIn>
      </div>
    </section>
  );
};
