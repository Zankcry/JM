export type Post = {
  id: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
};

export const posts: Post[] = [
  {
    id: 'why-i-built-simple-player',
    title: 'Why I Created the Simple Player Extension',
    description: 'The backstory behind building a custom floating miniplayer equipped with subtitle rendering, live chat overlays, and a retro audio visualizer.',
    date: 'May 26, 2026',
    tags: ['ChromeExtension', 'JavaScript', 'Anime', 'DIY']
  },
  {
    id: 'spine-2d-guide',
    title: 'The Power of Spine 2D in Modern Web Design',
    description: 'A deep dive into why Spine 2D is becoming a staple in modern web design and how it bridges the gap between static layouts and interactive motion.',
    date: 'May 12, 2026',
    tags: ['Spine', 'Animation', 'UX Design', 'WebDev']
  }
];
