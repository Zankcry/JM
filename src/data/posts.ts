export type Post = {
  id: string;
  title: string;
  title_ja?: string;
  description: string;
  description_ja?: string;
  date: string;
  tags: string[];
};

export const posts: Post[] = [
  {
    id: 'why-i-built-simple-player',
    title: 'Why I Created the Simple Miniplayer Extension',
    title_ja: 'Simple Miniplayer 拡張機能を作った理由',
    description: 'The backstory behind building a custom floating miniplayer equipped with subtitle rendering, live chat overlays, and a retro audio visualizer.',
    description_ja: '字幕レンダリング、ライブチャットオーバーレイ、レトロオーディオビジュアライザーを備えたカスタムフローティングミニプレイヤー開発の舞台裏。',
    date: 'May 26, 2026',
    tags: ['ChromeExtension', 'JavaScript', 'Anime', 'DIY']
  },
  {
    id: 'spine-2d-guide',
    title: 'The Power of Spine 2D in Modern Web Design',
    title_ja: 'モダンWebデザインにおけるSpine 2Dの可能性',
    description: 'A deep dive into why Spine 2D is becoming a staple in modern web design and how it bridges the gap between static layouts and interactive motion.',
    description_ja: 'Spine 2DがWebデザインの定番になりつつある理由と、静的レイアウトと対話的アニメーションの架け橋となる仕組みについての考察。',
    date: 'May 12, 2026',
    tags: ['Spine', 'Animation', 'UX Design', 'WebDev']
  }
];
