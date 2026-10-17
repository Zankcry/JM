import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconFileCv,
  IconMail,
  IconAddressBook,
  type Icon,
} from '@tabler/icons-react';

export type NavLink = {
  label: string;
  href: string;
};

export const primaryNavLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Posts', href: '/posts' },
  { label: 'Photos', href: '/photos' },
];

export const EMAIL = 'duquejames657@gmail.com';
export const GITHUB_URL = 'https://github.com/Zankcry';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/jamesmichaelduque/';

export type SocialLink = NavLink & {
  label_ja?: string;
  Icon: Icon;
  cmd: string; // shown in the navbar terminal on hover
};

// The first four are external contacts; footer and About page show only those
export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: GITHUB_URL, Icon: IconBrandGithub, cmd: 'open github' },
  { label: 'LinkedIn', href: LINKEDIN_URL, Icon: IconBrandLinkedin, cmd: 'open linkedin' },
  { label: 'Resume', label_ja: '履歴書', href: '/resume.pdf', Icon: IconFileCv, cmd: 'cat resume.pdf' },
  { label: 'Mail', label_ja: 'メール', href: `mailto:${EMAIL}`, Icon: IconMail, cmd: 'ssh mail' },
  { label: 'About me...', label_ja: '私について...', href: '/about', Icon: IconAddressBook, cmd: 'about' },
];
