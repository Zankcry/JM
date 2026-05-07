import { socialLinks } from '../data/navigation';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconFileCv,
  IconAddressBook,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandTailwind,
} from '@tabler/icons-react';

type TechStackItem = {
  label: string;
  shortLabel: string;
  tone: string;
  icon: 'brand-javascript' | 'brand-html5' | 'brand-tailwind';
};

const techStack: TechStackItem[] = [
  { label: 'JavaScript', shortLabel: 'JS', tone: '#F7DF1E', icon: 'brand-javascript' },
  { label: 'HTML5', shortLabel: 'H5', tone: '#E34F26', icon: 'brand-html5' },
  { label: 'TailwindCSS', shortLabel: 'TW', tone: '#38BDF8', icon: 'brand-tailwind' },
];

const techStackIcons = {
  'brand-javascript': IconBrandJavascript,
  'brand-html5': IconBrandHtml5,
  'brand-tailwind': IconBrandTailwind,
} as const;

const socialIcons = {
  'brand-github': IconBrandGithub,
  'brand-linkedin': IconBrandLinkedin,
  'brand-instagram': IconBrandInstagram,
  'file-cv': IconFileCv,
  user: IconAddressBook,
} as const;

export function Hero() {
  return (
    <section
      id="home"
      className="flex w-full flex-1 items-start pb-10 pt-8 sm:pt-14 lg:pt-16"
      aria-labelledby="hero-title"
    >
      <div className="w-full max-w-4xl">

        <h1
          id="hero-title"
          className="flex max-w-3xl flex-wrap items-center gap-x-3 gap-y-2 text-3xl font-semibold leading-[1.1] tracking-snug text-theme-text sm:text-4xl lg:text-5xl"
        >
          <span>Hey! I&apos;m</span>
          <span className="inline-flex items-center gap-2 whitespace-nowrap">
            <span className="ml-2 text-theme-accent transition-colors duration-300 ease-out">
              James Michael
            </span>
            <video
              className="h-14 w-14 rounded-2xl object-cover transition-transform duration-300 ease-out sm:h-16 sm:w-16"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              aria-hidden="true"
            >
              <source src="/chibi.webm" type="video/webm" />
            </video>
          </span>
        </h1>

        <div className="mt-8 max-w-3xl space-y-5 text-base leading-8 text-theme-text-muted sm:text-lg">
          <p>
            I build product interfaces, design systems, and lightweight tools that help teams ship
            quickly without losing the details that make a site feel considered.
          </p>
          <p>
            Right now I&apos;m focused on polished frontend experiences, thoughtful information
            hierarchy, and the kind of small interactions that make a page feel calm instead of
            cluttered.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-theme-text-muted">
          {socialLinks.map((link, index) => (
            <span key={link.label} className="flex items-center gap-3">
              <a
                href={link.href}
                aria-label={link.label}
                className="inline-flex items-center gap-2 transition hover:text-theme-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-theme-focus focus-visible:ring-offset-2 focus-visible:ring-offset-theme-bg"
              >
                {link.icon ? (() => {
                  const SocialIcon = socialIcons[link.icon as keyof typeof socialIcons];
                  return <SocialIcon size={18} stroke={1.8} aria-hidden="true" />;
                })() : null}
                <span>{link.label}</span>
              </a>
              {index < socialLinks.length - 1 ? <span aria-hidden="true">|</span> : null}
            </span>
          ))}
        </div>

        <div className="mt-12 pt-6">
          <div className="mb-5 flex items-center gap-3">
            <p className="text-xs uppercase tracking-[0.35em] text-theme-text-muted/80">
              Tech stack
            </p>
          </div>

          <div className="flex items-center gap-4 overflow-x-auto pb-1 text-sm text-theme-text-muted sm:gap-4">
            {techStack.map((item, index) => (
              <span key={item.label} className="inline-flex items-center whitespace-nowrap">
                <span className="inline-flex items-center gap-2">
                  {(() => {
                    const TechIcon = techStackIcons[item.icon];
                    return <TechIcon size={22} stroke={1.8} style={{ color: item.tone }} aria-hidden="true" />;
                  })()}
                  <span className="text-xs font-medium tracking-tight text-theme-text-muted sm:text-[13px]">
                    {item.label}
                  </span>
                </span>
                {index < techStack.length - 1 ? (
                  <span className="mx-3 text-theme-text-muted/60 sm:mx-4">/</span>
                ) : null}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}