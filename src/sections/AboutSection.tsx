import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { AnimatedText } from '../components/AnimatedText';
import { ContactButton } from '../components/Buttons';

export const AboutSection: React.FC = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 w-full"
    >
      {/* 3D Decorative Corner Elements */}
      {/* Top Left: Moon icon */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px] z-0"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt="Decorative Moon"
          className="w-full h-auto object-contain select-none pointer-events-none"
          draggable="false"
        />
      </FadeIn>

      {/* Top Right: Lego icon */}
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px] z-0"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt="Decorative Lego"
          className="w-full h-auto object-contain select-none pointer-events-none"
          draggable="false"
        />
      </FadeIn>

      {/* Bottom Left: 3D object */}
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px] z-0"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt="Decorative Element"
          className="w-full h-auto object-contain select-none pointer-events-none"
          draggable="false"
        />
      </FadeIn>

      {/* Bottom Right: 3D group */}
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px] z-0"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt="Decorative Group"
          className="w-full h-auto object-contain select-none pointer-events-none"
          draggable="false"
        />
      </FadeIn>

      {/* About Content Container */}
      <div className="flex flex-col items-center z-10 w-full max-w-4xl text-center">
        {/* Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Heading to Text Gap: gap-10 sm:gap-14 md:gap-16 */}
        <div className="h-10 sm:h-14 md:h-16" />

        {/* Animated Paragraph */}
        <div className="w-full flex justify-center text-center">
          <AnimatedText
            text="I am a UI/UX Designer, Frontend Developer, Academic Mentor, and AI Researcher passionate about creating intuitive digital experiences. By combining design, technology, and research, I strive to build solutions that are both impactful and user-centered."
            className="text-[#D7E2EA] font-medium leading-relaxed max-w-[560px] text-center"
          />
        </div>

        {/* Text to Button Gap: gap-16 sm:gap-20 md:gap-24 */}
        <div className="h-16 sm:h-20 md:h-24" />

        {/* Action Button */}
        <FadeIn delay={0.3} y={20}>
          <ContactButton onClick={scrollToContact} />
        </FadeIn>
      </div>
    </section>
  );
};
