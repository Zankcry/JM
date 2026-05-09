export type Post = {
  id: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
};

export const posts: Post[] = [
  {
    id: '1',
    title: 'Building a High-Performance Portfolio with React & Vite',
    description: 'A deep dive into how I optimized my portfolio for speed and accessibility using modern web tools and best practices.',
    date: 'May 12, 2024',
    tags: ['React', 'Performance', 'WebDev']
  },
  {
    id: '2',
    title: 'Why I Switched to Catppuccin Mocha for All My Projects',
    description: 'Exploring the psychology of color and why the Catppuccin theme provides the perfect balance of contrast and comfort for developers.',
    date: 'May 08, 2024',
    tags: ['Design', 'Theme', 'UX']
  },
  {
    id: '3',
    title: 'The Future of Web Interactivity with Spine 2D',
    description: 'How bringing skeletal animations to the web can create more immersive and "alive" user interfaces compared to traditional CSS animations.',
    date: 'April 28, 2024',
    tags: ['Animation', 'Spine2D', 'Frontend']
  }
];
