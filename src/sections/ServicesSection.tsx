import React from 'react';
import { FadeIn } from '../components/FadeIn';

interface ServiceItem {
  num: string;
  name: string;
  desc: string;
}

const SERVICES: ServiceItem[] = [
  {
    num: '01',
    name: 'UI/UX Design',
    desc: 'Creating intuitive and visually appealing user experiences through user research, wireframing, prototyping, and modern interface design using Figma.',
  },
  {
    num: '02',
    name: 'Frontend Web Development',
    desc: 'Building responsive, fast, and user-friendly websites using HTML, CSS, JavaScript, and modern web development practices.',
  },
  {
    num: '03',
    name: 'WordPress Website Development',
    desc: 'Designing and customizing professional WordPress websites tailored to business, portfolio, and e-commerce needs.',
  },
  {
    num: '04',
    name: 'Website Redesign & Optimization',
    desc: 'Improving existing websites with enhanced usability, mobile responsiveness, accessibility, and modern design standards.',
  },
  {
    num: '05',
    name: 'Technical Mentoring & Academic Guidance',
    desc: 'Providing mentorship in web development, database concepts, programming fundamentals, and project development to help learners achieve their goals.',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="relative bg-[#FFFFFF] text-[#0C0C0C] w-full rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 z-10"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center">
          <h2
            className="font-black uppercase text-center text-[#0C0C0C] tracking-tight leading-none mb-16 sm:mb-20 md:mb-28"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Services
          </h2>
        </FadeIn>

        {/* Services List */}
        <div className="w-full border-t border-[rgba(12,12,12,0.15)]">
          {SERVICES.map((service, idx) => (
            <FadeIn
              key={service.num}
              delay={idx * 0.1}
              y={30}
              className="w-full border-b border-[rgba(12,12,12,0.15)] py-8 sm:py-10 md:py-12 flex flex-row items-center gap-6 sm:gap-10 md:gap-16"
            >
              {/* Number on the left */}
              <div
                className="font-black text-[#0C0C0C] leading-none select-none flex-shrink-0 min-w-[70px] sm:min-w-[120px] md:min-w-[160px]"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {service.num}
              </div>

              {/* Title & Description stacked on the right */}
              <div className="flex flex-col gap-2 md:gap-3 text-left">
                <h3
                  className="font-medium uppercase text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.name}
                </h3>
                <p
                  className="font-light leading-relaxed text-[#0C0C0C] opacity-60 max-w-2xl"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {service.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
