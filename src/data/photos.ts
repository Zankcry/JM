export type Photo = {
  id: string;
  src: string;
  tags: string[];
  comment: string;
  comment_ja?: string;
};

export const allPhotos: Photo[] = [
  {
    id: '1',
    src: '/images/pics/quiet-afternoon.jpg',
    tags: ['memories'],
    comment: 'A quiet afternoon.',
    comment_ja: '穏やかな午後。'
  },
  {
    id: '2',
    src: '/images/pics/luyang-academy.png',
    tags: ['genshin', 'scenery'],
    comment: 'Luyang Academy',
    comment_ja: '鹿陽書院 (Luyang Academy)'
  },
  {
    id: '3',
    src: '/images/pics/cafe-chill.jpg',
    tags: ['coffee'],
    comment: 'Cafe Chill',
    comment_ja: 'カフェでひと休み'
  },
  {
    id: '4',
    src: '/images/pics/bonfire.jpg',
    tags: ['memories'],
    comment: 'Bonfire, Retreat 2023',
    comment_ja: 'キャンプファイヤー、リトリート 2023'
  },
  {
    id: '5',
    src: '/images/pics/windmills.png',
    tags: ['genshin', 'scenery'],
    comment: 'Windmills in Teyvat.',
    comment_ja: 'テイワットの風車。'
  },
  {
    id: '6',
    src: '/images/pics/late-night.jpg',
    tags: ['university', 'memories'],
    comment: 'Late night, Afterclass',
    comment_ja: '放課後の夜遅くに'
  },
  {
    id: '7',
    src: '/images/pics/christmas-day.jpg',
    tags: ['memories', 'scenery'],
    comment: 'Christmas Day 2023.',
    comment_ja: 'クリスマス・デイ 2023。'
  },
  {
    id: '8',
    src: '/images/pics/elegant-furina.png',
    tags: ['genshin', 'scenery'],
    comment: 'Elegant Furina.',
    comment_ja: 'エレガントなフリーナ。'
  },
  {
    id: '9',
    src: '/images/pics/mecha-oishii.jpeg',
    tags: ['coffee'],
    comment: 'Mecha Oishii~ Coffee.',
    comment_ja: 'めちゃ美味しい〜 コーヒー。'
  },
  {
    id: '10',
    src: '/images/pics/aurora-trip.jpg',
    tags: ['memories', 'scenery'],
    comment: 'Aurora trip',
    comment_ja: 'アウロラ旅行'
  },
  {
    id: '11',
    src: '/images/pics/holy-angel.webp',
    tags: ['university'],
    comment: 'Heading to afternoon class',
    comment_ja: '午後の授業へ向かう'
  },
  {
    id: '12',
    src: '/images/pics/temple-of-space.png',
    tags: ['genshin', 'scenery'],
    comment: 'Pretty place in Temple of Space',
    comment_ja: '時空の神殿の綺麗な場所'
  },
  {
    id: '13',
    src: '/images/pics/christmas-eve.jpg',
    tags: ['memories', 'scenery'],
    comment: 'Christmas Eve 2023.',
    comment_ja: 'クリスマスイブ 2023。'
  },
  {
    id: '14',
    src: '/images/pics/heading-to-class.jpg',
    tags: ['university', 'memories'],
    comment: 'Heading to Late night Class',
    comment_ja: '夜の授業へ向かう'
  },
  {
    id: '15',
    src: '/images/pics/baguio.jpg',
    tags: ['memories', 'scenery'],
    comment: 'Baguio trip',
    comment_ja: 'バギオ旅行'
  },
  {
    id: '16',
    src: '/images/pics/wandering.png',
    tags: ['genshin', 'scenery'],
    comment: 'Wandering through new region',
    comment_ja: '新しい地域を放浪中'
  },
  {
    id: '17',
    src: '/images/pics/starting-2025.jpg',
    tags: ['memories'],
    comment: 'Starting 2025.',
    comment_ja: '2025年の始まり。'
  },
  {
    id: '18',
    src: '/images/pics/silly-furina.png',
    tags: ['genshin'],
    comment: 'Silly furina',
    comment_ja: 'お茶目なフリーナ'
  },
  {
    id: '19',
    src: '/images/pics/august.jpg',
    tags: ['memories'],
    comment: 'August memories.',
    comment_ja: '8月の思い出。'
  },
  {
    id: '20',
    src: '/images/pics/missing.jpg',
    tags: ['personal', 'memories'],
    comment: 'I miss her so much...',
    comment_ja: 'とても寂しい...'
  },
  {
    id: '21',
    src: '/images/pics/motivation.jpg',
    tags: ['personal'],
    comment: 'My role model & motivation❤️',
    comment_ja: '私のロールモデル＆モチベーション❤️'
  },
  {
    id: '22',
    src: '/images/pics/good-times.jpg',
    tags: ['memories', 'scenery'],
    comment: 'Good times.',
    comment_ja: '素晴らしい時間。'
  },
  {
    id: '23',
    src: '/images/pics/captured-moments.jpg',
    tags: ['memories'],
    comment: 'Captured moments.',
    comment_ja: '切り取られた一瞬。'
  },
  {
    id: '24',
    src: '/images/pics/leaving-for-class.jpg',
    tags: ['university', 'memories'],
    comment: 'Pic before leaving for class',
    comment_ja: '授業へ出かける前の写真'
  },
  {
    id: '25',
    src: '/images/pics/billiards.jpg',
    tags: ['memories'],
    comment: 'Billiards',
    comment_ja: 'ビリヤード'
  },
  {
    id: '26',
    src: '/images/pics/natlan-secret-place.png',
    tags: ['genshin', 'scenery'],
    comment: 'Secret Place in Natlan',
    comment_ja: 'ナタの秘密の場所'
  },
  {
    id: '27',
    src: '/images/pics/natlan-volcano-peak.png',
    tags: ['genshin', 'scenery'],
    comment: 'Volcano peak!!',
    comment_ja: '火山頂上！！'
  },
  {
    id: '28',
    src: '/images/pics/genshin-selfie.png',
    tags: ['genshin'],
    comment: 'Selfie~ with Mataray na Masungit',
    comment_ja: 'ツンツンした彼女との自撮り〜'
  }
];
