import { useState, useEffect } from 'react';
import {
  IconCalendar,
  IconMapPin,
  IconClock,
  IconBriefcase,
  IconArrowUpRight,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconCopy,
  IconCheck,
  IconMessage2
} from '@tabler/icons-react';
import { useTheme } from '../theme/ThemeProvider';
import { useLanguage } from '../context/LanguageContext';
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from '../data/navigation';

function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const { t, language } = useLanguage();

  const handleCopy = () => {
    // Only confirm once the browser actually accepted the write
    navigator.clipboard?.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }, () => {});
  };

  return (
    <button
      onClick={handleCopy}
      className="group/icon flex h-10 flex-col items-center justify-center gap-0.5 rounded-xl border border-theme-border/40 bg-theme-surface/40 text-theme-text-muted transition-all hover:border-theme-accent/20 hover:bg-theme-surface/70 hover:text-theme-accent"
      title={language === 'ja' ? 'メールアドレスをコピー' : 'Copy Email'}
    >
      {copied ? (
        <IconCheck size={16} className="text-green-500" />
      ) : (
        <IconCopy size={16} className="transition-transform group-hover/icon:scale-110" />
      )}
      <span className="text-[7px] font-bold uppercase tracking-widest opacity-50">
        {copied ? t('bento.copied', 'COPIED') : t('bento.copy', 'COPY')}
      </span>
    </button>
  );
}

export function AvailabilityCard() {
  const { t, language } = useLanguage();

  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-theme-accent/20 bg-theme-bg p-5 shadow-lg transition-all hover:border-theme-accent/70 lg:col-span-1 min-h-[180px]">
      {/* Decorative Background Kanji */}
      <span className="absolute -right-2 -bottom-2 select-none text-[6.5rem] font-black leading-none text-theme-accent/[0.08] transition-all duration-700 group-hover:text-theme-accent/[0.15] group-hover:scale-110">
        稼働
      </span>

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-center gap-3">
          <div className="h-4 w-[2px] bg-theme-accent"></div>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-theme-accent">
            {t('bento.status')}: {language === 'ja' ? '稼働可能' : 'Available'}
          </span>
        </div>

        <div className="mt-5">
          <div className="flex items-center gap-2 text-theme-text-muted mb-1">
            <IconBriefcase size={14} />
            <span className="text-[11px] font-mono tracking-tighter uppercase">
              {t('bento.focus')}: [{language === 'ja' ? 'ITサポート / ジュニアWeb開発' : 'IT Support / Junior Web Dev'}]
            </span>
          </div>
          <h3 className="text-2xl font-black tracking-tighter text-theme-text leading-tight uppercase">
            {t('bento.status_val', 'Available for Work')}
          </h3>
        </div>

        <div className="mt-auto pt-4 flex items-center gap-2">
          <div className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ConnectCard() {
  const { t } = useLanguage();

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-theme-accent/20 bg-theme-bg p-5 shadow-lg transition-all hover:border-theme-accent/70 lg:col-span-1 min-h-[180px]">
      {/* Decorative Background Kanji */}
      <span className="absolute -right-2 -bottom-2 select-none text-[6.5rem] font-black leading-none text-theme-accent/[0.08] transition-all duration-700 group-hover:text-theme-accent/[0.15] group-hover:scale-110">
        連絡
      </span>

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-4 w-[2px] bg-theme-accent"></div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-theme-accent">
              {t('bento.contact_me', 'Contact Me')}
            </span>
          </div>

          <div className="mt-4">
            <p className="text-[12px] leading-relaxed text-theme-text-muted mb-3">
              {t('bento.connect_text', "Let's connect and explore opportunities together.")}
            </p>

            <div className="grid grid-cols-3 gap-2">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group/icon flex h-9 flex-col items-center justify-center gap-0.5 rounded-lg border border-theme-border/40 bg-theme-surface/40 text-theme-text-muted transition-all hover:border-theme-accent/20 hover:bg-theme-surface/70 hover:text-theme-accent"
                title="GitHub"
              >
                <IconBrandGithub size={14} className="transition-transform group-hover/icon:scale-110" />
                <span className="text-[6px] font-bold uppercase tracking-widest opacity-50">GH</span>
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group/icon flex h-9 flex-col items-center justify-center gap-0.5 rounded-lg border border-theme-border/40 bg-theme-surface/40 text-theme-text-muted transition-all hover:border-theme-accent/20 hover:bg-theme-surface/70 hover:text-theme-accent"
                title="LinkedIn"
              >
                <IconBrandLinkedin size={14} className="transition-transform group-hover/icon:scale-110" />
                <span className="text-[6px] font-bold uppercase tracking-widest opacity-50">LI</span>
              </a>
              <CopyEmailButton email={EMAIL} />
            </div>
          </div>
        </div>

        <a
          href={`mailto:${EMAIL}`}
          className="group/btn mt-3 flex w-full items-center justify-center gap-1.5 rounded-xl bg-theme-accent px-3 py-1.5 text-[12px] font-bold text-theme-on-accent transition-all active:scale-95 hover:brightness-110"
        >
          <IconMessage2 size={14} className="transition-transform group-hover/btn:rotate-12" />
          <span>{t('bento.send_message', 'Send Message')}</span>
          <IconArrowUpRight size={12} className="opacity-50" />
        </a>
      </div>
    </div>
  );
}

function ClockDisplay() {
  const [time, setTime] = useState(new Date());
  const { language } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center gap-1 text-[10px] opacity-80">
      <IconClock size={11} />
      {time.toLocaleTimeString(language === 'ja' ? 'ja-JP' : 'en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      })}
    </div>
  );
}

export function LocationCard() {
  const { theme } = useTheme();
  const { t, language } = useLanguage();

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-theme-accent/20 bg-theme-bg shadow-lg transition-all hover:border-theme-accent/70 lg:col-span-1 min-h-[180px]">
      {/* Header - Absolute overlay */}
      <div className="absolute left-4 top-4 z-20 flex items-center gap-1.5 text-theme-text drop-shadow-md">
        <IconMapPin size={16} stroke={2} className="text-theme-accent" />
        <h3 className="text-xs font-semibold tracking-tight opacity-90">{t('bento.located_in', 'Located In')}</h3>
      </div>

      {/* Map - Fits the container */}
      <div className="absolute inset-0 z-10 grayscale-0 contrast-40 opacity-90 transition-all duration-700 ease-out group-hover:scale-105">
        {/* Static OSM render of Porac at zoom 13; the old live map was decoration only */}
        <img
          src={theme === 'latte' ? '/images/map-light.webp' : '/images/map-dark.webp'}
          alt={language === 'ja' ? 'ポラックの地図' : 'Map of Porac'}
          // shortcut: CSS zoom on an 800px render, blurs on retina; re-render tiles at zoom 14 if it looks soft
          className="h-full w-full object-cover scale-[1.75]"
          loading="lazy"
        />
      </div>
      <span className="absolute right-2 top-1 z-20 text-[8px] text-theme-text-muted/70">© OpenStreetMap</span>

      {/* Footer - Minimal overlay for small size */}
      <div className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-between p-4 bg-gradient-to-t from-theme-bg/95 to-transparent pt-8 text-theme-text drop-shadow-md">
        <div className="text-[11px] font-bold">
          {language === 'ja' ? 'フィリピン・ポラック' : 'Porac, PH'}
        </div>
        <ClockDisplay />
      </div>
    </div>
  );
}
