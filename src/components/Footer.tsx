import React from 'react';
import { Instagram, Youtube, Linkedin, Github, ArrowUpRight } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const Footer: React.FC = () => {
  const socialLinks = [
    { name: 'Instagram', url: 'https://www.instagram.com/_capo.aks_?igsh=Mmt6MG05N3U2bnhq', icon: Instagram },
    { name: 'YouTube', url: 'https://youtube.com/@vlogbyanjii?si=NadxJTaS6aPm1WXk', icon: Youtube },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/anjima-ks-055877220/', icon: Linkedin },
    { name: 'GitHub', url: 'https://github.com/AnjimaKS', icon: Github },
  ];

  return (
    <footer
      id="contact"
      className="relative bg-[#0C0C0C] text-[#D7E2EA] w-full px-6 md:px-10 py-16 md:py-24 border-t border-[#D7E2EA]/10 z-30"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-12">
        {/* Header Block */}
        <div className="text-center flex flex-col items-center gap-4">
          <FadeIn delay={0} y={20}>
            <span className="text-xs uppercase font-light tracking-widest opacity-60">
              Get in Touch
            </span>
          </FadeIn>
          <FadeIn delay={0.1} y={30}>
            <a
              href="mailto:anjimaks24@gmail.com"
              className="group font-black uppercase text-center block leading-none select-all relative"
              style={{ fontSize: 'clamp(2rem, 6vw, 80px)' }}
            >
              anjimaks24@gmail.com
              <span className="block h-[4px] bg-gradient-to-r from-[#B600A8] to-[#BE4C00] w-0 group-hover:w-full transition-all duration-300 mx-auto mt-2" />
            </a>
          </FadeIn>
        </div>

        {/* Social Media & Extra Links */}
        <FadeIn delay={0.2} y={30} className="w-full">
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-16 my-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm sm:text-base uppercase tracking-wider text-[#D7E2EA] hover:text-[#B600A8] transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              );
            })}
          </div>
        </FadeIn>

        {/* Bottom Credits */}
        <FadeIn delay={0.3} y={20} className="w-full">
          <div className="flex justify-center items-center border-t border-[#D7E2EA]/10 pt-8 mt-4 text-xs tracking-wider uppercase opacity-40">
            <span>© {new Date().getFullYear()} ANJIMA. All Rights Reserved.</span>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
};
