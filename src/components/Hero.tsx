import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { socialLinks } from '../data/navigation';
import { YahhoTooltip } from './Tooltip';
import { techStack, techStackIcons } from '../data/tech';
import { useTerminal } from '../context/TerminalContext';
import { useLanguage } from '../context/LanguageContext';

export function Hero() {
  const { setHoveredCommand } = useTerminal();
  const { t, language } = useLanguage();

  return (
    <section
      id="home"
      className="flex w-full flex-1 items-start pb-10 "
      aria-labelledby="hero-title"
    >
      <div className="w-full max-w-4xl">

        <h1
          id="hero-title"
          className="flex max-w-3xl flex-wrap items-center gap-x-3 gap-y-2 text-3xl font-semibold leading-[1.1] tracking-snug text-theme-text sm:text-4xl lg:text-5xl"
        >
          <span>
            <YahhoTooltip>{t('hero.greeting', 'Yahho!')}</YahhoTooltip>{' '}
            {language === 'en' ? "I'm" : ''}
          </span>
          <span className="inline-flex items-center gap-2 whitespace-nowrap">
            <span className="text-theme-accent ml-0 sm:ml-3">
              {t('hero.name', 'James Michael')}
            </span>
            {/* Mobile: WebP Image */}
            <img
              src="/videos/chibi.webp"
              alt={language === 'ja' ? 'ミニキャラ' : 'Chibi character'}
              className="h-14 w-14 rounded-2xl object-cover sm:h-16 sm:w-16 md:hidden"
              aria-hidden="true"
            />
            {/* Desktop: WebM Video */}
            <video
              className="hidden md:block h-14 w-14 rounded-2xl object-cover sm:h-16 sm:w-16"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              aria-hidden="true"
            >
              <source src="/videos/chibi.webm" type="video/webm" />
            </video>
          </span>
        </h1>

        <div className="mt-8 max-w-3xl space-y-5 text-base leading-8 text-theme-text-muted sm:text-lg">
          <p>
            {t('hero.bio1')} <a
              href="#projects"
              className="text-theme-accent -mx-1.5 px-1.5 py-0.5 rounded-md transition-colors hover:bg-theme-accent/20"
              onMouseEnter={() => setHoveredCommand('open projects/charlies-barber-salon')}
              onMouseLeave={() => setHoveredCommand(null)}
            >{t('hero.barbershop')}</a> {t('hero.bio1_end')}
          </p>
          <p>
            {t('hero.bio2_lead')} <a
              href="https://esotericsoftware.com/"
              className="text-theme-accent -mx-1.5 px-1.5 py-0.5 rounded-md transition-colors hover:bg-theme-accent/20"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => setHoveredCommand('open spine2d')}
              onMouseLeave={() => setHoveredCommand(null)}
            >Spine 2D</a> {t('hero.bio2_middle')}
          </p>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-theme-text-muted">
          {socialLinks.map((link) => {
            const isInternal = (link.href.startsWith('/') || link.href.startsWith('#')) && !link.href.endsWith('.pdf');
            const cls = "group flex items-center gap-2 rounded-lg border border-theme-accent/20 bg-theme-bg/50 px-3 py-1.5 text-xs font-medium text-theme-text-muted transition-all hover:border-theme-accent/50 hover:text-theme-text hover:shadow-sm active:scale-95";
            const cmd = link.cmd;
            const displayLabel = (language === 'ja' && link.label_ja) || link.label;

            const inner = (
              <>
                <link.Icon size={16} stroke={1.8} aria-hidden="true" />
                <span>{displayLabel}</span>
              </>
            );

            return (
              <span key={link.label}>
                {isInternal ? (
                  <Link
                    to={link.href}
                    aria-label={displayLabel}
                    className={cls}
                    onMouseEnter={() => setHoveredCommand(cmd)}
                    onMouseLeave={() => setHoveredCommand(null)}
                  >
                    {inner}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    aria-label={displayLabel}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cls}
                    onMouseEnter={() => setHoveredCommand(cmd)}
                    onMouseLeave={() => setHoveredCommand(null)}
                  >
                    {inner}
                  </a>
                )}
              </span>
            );
          })}
        </div>

        <div className="mt-12 pt-6">
          <div className="mb-5 flex items-center gap-3">
            <p className="text-xs uppercase tracking-[0.35em] text-theme-text-muted/80">
              {language === 'ja' ? '技術スタック' : 'Tech stack'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 pb-1">
            {techStack.map((item) => (
              <a
                key={item.label}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1.5 rounded-md border border-theme-accent/10 bg-theme-bg/50 px-2 py-[0.30rem] transition-all hover:border-theme-accent/30 hover:bg-theme-bg hover:shadow-sm active:scale-95"
                style={{ '--brand-color': item.tone } as React.CSSProperties}
                onMouseEnter={() => setHoveredCommand(`open docs/${item.label.toLowerCase()}`)}
                onMouseLeave={() => setHoveredCommand(null)}
              >
                <div
                  className="flex h-4 w-4 items-center justify-center rounded transition-transform group-hover:scale-110"
                  style={{ color: item.tone }}
                >
                  {(() => {
                    const TechIcon = techStackIcons[item.icon];
                    return <TechIcon size={14} stroke={2} aria-hidden="true" />;
                  })()}
                </div>
                <span className="text-[11px] font-semibold tracking-wide text-theme-text-muted transition-colors group-hover:text-theme-text uppercase">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}