export type Recommendation = {
  id: string;
  title: string;
  description: string;
  rating: number; // 1-10
  status: 'Reading' | 'Finished' | 'Watching' | 'Plan to Watch';
  image?: string;
};

export const mangaRecommendations: Recommendation[] = [
  {
    id: '1',
    title: 'Random Chat',
    description: 'A compelling psychological drama about Joonwoo, a loner who discovers the true nature of his peers through an anonymous chat app.',
    rating: 10,
    status: 'Reading',
    image: '/images/anime_manga/randomChat.webp'
  },
  {
    id: '2',
    title: 'My Bias Gets on the Last Train',
    description: 'A story about a fan who unexpectedly ends up on the same last train as their favorite idol, written by JIXKSEE.',
    rating: 8,
    status: 'Reading',
    image: '/images/anime_manga/myBias.webp'
  },
  {
    id: '3',
    title: 'Jujutsu Kaisen',
    description: 'A high-stakes supernatural battle manga following Yuji Itadori as he enters the world of Jujutsu Sorcerers to combat powerful Curses.',
    rating: 10,
    status: 'Finished',
    image: '/images/anime_manga/jujutsuKaisen.webp'
  },
  {
    id: '4',
    title: 'Demon Slayer',
    description: 'A masterpiece by Koyoharu Gotouge. The manga offers a complete and emotional conclusion to Tanjiro\'s journey to save his sister.',
    rating: 10,
    status: 'Finished',
    image: '/images/anime_manga/demonSlayer.webp'
  },
  {
    id: '5',
    title: 'Tokyo Revengers',
    description: 'A high-octane time-travel thriller about Takemichi Hanagaki as he leaps back in time to save his middle school girlfriend from the notorious Tokyo Manji Gang.',
    rating: 10,
    status: 'Finished',
    image: '/images/anime_manga/tokyoRevengers.jpg'
  },
  {
    id: '6',
    title: 'The 100 Girlfriends Who Really, Really, Really, Really, Really Love You',
    description: 'An absolute peak-comedy harem manga that defies all tropes. Rentarou\'s dedication to his soulmate girlfriends is incredibly wholesome and hilarious.',
    rating: 10,
    status: 'Reading',
    image: '/images/anime_manga/hundredGirlfriends.jpg'
  },
  {
    id: '7',
    title: 'My Hero Academia',
    description: 'A heartwarming story about Deku\'s journey to become the greatest hero. Kohei Horikoshi\'s expressive art and epic battles define the modern superhero shonen era.',
    rating: 10,
    status: 'Finished',
    image: '/images/anime_manga/myHeroAcademia.jpg'
  },
  {
    id: '8',
    title: 'Solo Leveling',
    description: 'The absolute pinnacle of power-fantasy manhwa. Sung Jinwoo\'s transition from the world\'s weakest hunter to the shadow monarch is packed with jaw-dropping action.',
    rating: 10,
    status: 'Finished',
    image: '/images/anime_manga/soloLeveling.jpg'
  }
];

export const animeRecommendations: Recommendation[] = [
  {
    id: '1',
    title: 'Demon Slayer',
    description: 'A visual masterpiece by Koyoharu Gotouge. Tanjiros journey to save his sister is emotionally gripping and beautifully animated.',
    rating: 10,
    status: 'Finished',
    image: '/images/anime_manga/demonSlayer.webp'
  },
  {
    id: '2',
    title: 'Black Clover',
    description: 'A story about never giving up. Astas journey from a magic-less boy to a powerful wizard knight is truly inspiring.',
    rating: 9,
    status: 'Finished',
    image: '/images/anime_manga/blackClover.webp'
  },
  {
    id: '3',
    title: 'Jujutsu Kaisen',
    description: 'A visually stunning adaptation by MAPPA, featuring incredible fight choreography and a dark, compelling supernatural world.',
    rating: 10,
    status: 'Finished',
    image: '/images/anime_manga/jujutsuKaisen.webp'
  },
  {
    id: '4',
    title: 'Hunter x Hunter',
    description: 'A masterpiece of storytelling and power systems. Gon\'s journey to find his father is legendary, with complex characters and deep themes.',
    rating: 10,
    status: 'Finished',
    image: '/images/anime_manga/hxh.webp'
  },
  {
    id: '5',
    title: 'Your Name',
    description: 'A breathtakingly beautiful masterpiece by Makoto Shinkai. A cosmic body-swapping story of love, fate, and connection that leaves an unforgettable emotional resonance.',
    rating: 10,
    status: 'Finished',
    image: '/images/anime_manga/yourName.jpg'
  },
  {
    id: '6',
    title: 'Attack on Titan',
    description: 'A dark fantasy masterpiece of unmatched scale. Eren Yeager\'s struggle for freedom is a phenomenal narrative filled with jaw-dropping plot twists and deep philosophical themes.',
    rating: 9,
    status: 'Finished',
    image: '/images/anime_manga/attackOnTitan.jpg'
  },
  {
    id: '7',
    title: 'A Silent Voice',
    description: 'A profoundly moving and realistic exploration of redemption, empathy, and hearing loss. Shoya and Shoko\'s journey of emotional healing is incredibly powerful.',
    rating: 10,
    status: 'Finished',
    image: '/images/anime_manga/aSilentVoice.jpg'
  },
  {
    id: '8',
    title: 'Re:Zero - Starting Life in Another World',
    description: 'A dark, psychological isekai masterpiece. Subaru Natsuki\'s grueling struggle against despair through the "Return by Death" ability is intensely emotional.',
    rating: 10,
    status: 'Finished',
    image: '/images/anime_manga/reZero.jpg'
  },
  {
    id: '9',
    title: 'Horimiya',
    description: 'A sweet and refreshing rom-com that perfectly captures the beauty of discovering someone\'s hidden side. The gorgeous adaptation by CloverWorks brings their sweet story to life.',
    rating: 10,
    status: 'Finished',
    image: '/images/anime_manga/horimiya.jpg'
  },
  {
    id: '10',
    title: 'The Mikadono Sisters Are Surprisingly Easy to Deal With',
    description: 'A charming and hilarious rom-com about a boy living with three exceptionally talented sisters who are surprisingly easy to fluster. Highly entertaining!',
    rating: 9,
    status: 'Finished',
    image: '/images/anime_manga/mikadonoSisters.jpg'
  },
  {
    id: '11',
    title: 'Hell Mode',
    description: 'An engaging isekai about Kenichi, who chooses the hardest "Hell Mode" difficulty. His journey as a summoner is filled with strategic battles and satisfying growth.',
    rating: 9,
    status: 'Finished',
    image: '/images/anime_manga/hellMode.jpg'
  },
  {
    id: '12',
    title: 'Tower of God',
    description: 'An epic fantasy action series with unique world-building. Bam\'s quest to find Rachel as he climbs the mysterious, dangerous Tower is beautifully animated with an incredible soundtrack.',
    rating: 9,
    status: 'Finished',
    image: '/images/anime_manga/towerOfGod.jpg'
  },
  {
    id: '13',
    title: 'Tokyo Revengers',
    description: 'A thrilling time-travel action drama. Takemichi travels back in time to his middle school days to rise within a notorious gang and save his first love.',
    rating: 10,
    status: 'Finished',
    image: '/images/anime_manga/tokyoRevengers.jpg'
  },
  {
    id: '14',
    title: 'The 100 Girlfriends Who Really, Really, Really, Really, Really Love You',
    description: 'A boundary-breaking, extremely hilarious harem comedy. Rentarou\'s absolute devotion to making every single one of his soulmate girlfriends happy is legendary.',
    rating: 10,
    status: 'Finished',
    image: '/images/anime_manga/hundredGirlfriends.jpg'
  },
  {
    id: '15',
    title: 'Chainsaw Man',
    description: 'A cinematic, high-octane dark action masterpiece. Denji\'s life as a devil hunter is chaotic, brutal, and emotionally resonant, perfectly animated by MAPPA.',
    rating: 10,
    status: 'Finished',
    image: '/images/anime_manga/chainsawMan.jpg'
  },
  {
    id: '16',
    title: 'One Punch-Man',
    description: 'An absolute masterpiece of action and comedy. Madhouse\'s legendary adaptation of Saitama, a hero who can defeat any foe with a single punch, features god-tier animation.',
    rating: 10,
    status: 'Finished',
    image: '/images/anime_manga/onePunchMan.jpg'
  },
  {
    id: '17',
    title: 'My Hero Academia',
    description: 'An epic superhero journey following Izuku Midoriya as he inherits the world\'s greatest power. Filled with emotional battles, outstanding hero designs, and iconic soundtracks.',
    rating: 10,
    status: 'Finished',
    image: '/images/anime_manga/myHeroAcademia.jpg'
  },
  {
    id: '18',
    title: 'My Dress-Up Darling',
    description: 'A gorgeous, heartwarming anime celebrating the passion of cosplay and crafting. The phenomenal chemistry between Gojo and Marin is sweet, respectful, and beautifully animated.',
    rating: 9,
    status: 'Finished',
    image: '/images/anime_manga/myDressUpDarling.jpg'
  },
  {
    id: '19',
    title: 'Solo Leveling',
    description: 'An outstanding, action-packed fantasy adaptation. Jinwoo\'s spectacular growth from the weakest hunter to an unstoppable force features jaw-dropping animation by A-1 Pictures.',
    rating: 9,
    status: 'Finished',
    image: '/images/anime_manga/soloLeveling.jpg'
  },
  {
    id: '20',
    title: 'The Shiunji Family Children',
    description: 'An intriguing, high-tension family romance drama detailing the complex relationships and secrets between the talented Shiunji siblings.',
    rating: 10,
    status: 'Finished',
    image: '/images/anime_manga/shiunjiFamily.jpg'
  }
];

