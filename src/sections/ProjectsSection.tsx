import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from '../components/FadeIn';
import { LiveProjectButton } from '../components/Buttons';

interface ProjectData {
  num: string;
  category: string;
  name: string;
  col1_img1: string;
  col1_img2: string;
  col2_img: string;
}

const PROJECTS: ProjectData[] = [
  {
    num: '01',
    category: 'Client Project',
    name: 'Nextlevel Studio',
    col1_img1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
    col1_img2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
    col2_img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
  },
  {
    num: '02',
    category: 'Personal Project',
    name: 'Aura Brand Identity',
    col1_img1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
    col1_img2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    col2_img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
  },
  {
    num: '03',
    category: 'Client Project',
    name: 'Solaris Digital',
    col1_img1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
    col1_img2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    col2_img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
  },
];

interface ProjectCardProps extends ProjectData {
  index: number;
  total: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  index,
  total,
  num,
  category,
  name,
  col1_img1,
  col1_img2,
  col2_img,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll details inside the card container scope
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Calculate target scale based on position index
  const targetScale = 1 - (total - 1 - index) * 0.03;
  // Apply a smooth Framer Motion scale transform on scroll
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="sticky [--sticky-top:6rem] md:[--sticky-top:8rem] h-[85vh] flex items-center justify-center w-full"
      style={{
        top: `calc(var(--sticky-top) + ${index * 28}px)`,
        zIndex: index + 10,
      }}
    >
      <motion.div
        style={{ scale }}
        className="w-full h-full bg-[#0C0C0C] border-2 border-[#D7E2EA] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-4 sm:p-6 md:p-8 flex flex-col justify-between overflow-hidden"
      >
        {/* Top Card Row */}
        <div className="flex justify-between items-center w-full flex-shrink-0">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            {/* Project Number */}
            <span
              className="font-black text-[#D7E2EA] leading-none select-none"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
            >
              {num}
            </span>
            {/* Category and Title */}
            <div className="flex flex-col text-left">
              <span className="text-[10px] sm:text-xs uppercase font-light text-[#D7E2EA] opacity-60 tracking-wider">
                {category}
              </span>
              <span
                className="font-medium uppercase text-[#D7E2EA] leading-tight"
                style={{ fontSize: 'clamp(1rem, 2vw, 2rem)' }}
              >
                {name}
              </span>
            </div>
          </div>

          <LiveProjectButton />
        </div>

        {/* Bottom Card Row - Visual Image Grid */}
        <div className="flex-1 mt-4 sm:mt-6 md:mt-8 grid grid-cols-10 gap-3 sm:gap-4 md:gap-5 overflow-hidden min-h-0">
          {/* Column 1 (40% width -> col-span-4) */}
          <div className="col-span-4 flex flex-col gap-3 sm:gap-4 md:gap-5 h-full min-h-0 justify-between">
            <img
              src={col1_img1}
              alt={`${name} visual preview top`}
              loading="lazy"
              className="w-full object-cover rounded-[30px] sm:rounded-[45px] md:rounded-[50px]"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            />
            <img
              src={col1_img2}
              alt={`${name} visual preview bottom`}
              loading="lazy"
              className="w-full object-cover rounded-[30px] sm:rounded-[45px] md:rounded-[50px] flex-1 min-h-0"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            />
          </div>

          {/* Column 2 (60% width -> col-span-6) */}
          <div className="col-span-6 h-full min-h-0">
            <img
              src={col2_img}
              alt={`${name} visual showcase tall`}
              loading="lazy"
              className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="relative bg-[#0C0C0C] text-[#D7E2EA] w-full rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 -mt-10 sm:-mt-12 md:-mt-14 z-25 overflow-hidden flex flex-col items-center"
    >
      <div className="w-full max-w-5xl flex flex-col items-center">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-12 sm:mb-16">
          <h2
            className="hero-heading font-black uppercase text-center tracking-tight leading-none"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Project
          </h2>
        </FadeIn>

        {/* Stacking Card List Container */}
        <div className="w-full flex flex-col gap-12 sm:gap-20 pb-20">
          {PROJECTS.map((project, idx) => (
            <ProjectCard
              key={project.num}
              index={idx}
              total={PROJECTS.length}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
