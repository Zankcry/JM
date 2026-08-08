export type Recommendation = {
  id: string;
  title: string;
  title_ja?: string;
  description: string;
  description_ja?: string;
  rating: number; // 1-10
  status: 'Reading' | 'Finished' | 'Watching' | 'Plan to Watch';
  image?: string;
};

export const mangaRecommendations: Recommendation[] = [
  {
    id: '1',
    title: 'Random Chat',
    title_ja: 'ランダムチャット (Random Chat)',
    description: 'A compelling psychological drama about Joonwoo, a loner who discovers the true nature of his peers through an anonymous chat app.',
    description_ja: '匿名チャットアプリを通じて同級生たちの本質を知っていく一匹狼ジュンウを描いた心理ドラマ作品。',
    rating: 10,
    status: 'Reading',
    image: '/images/anime_manga/randomChat.webp'
  },
  {
    id: '2',
    title: 'My Bias Gets on the Last Train',
    title_ja: '私の推しは終電に乗る (My Bias Gets on the Last Train)',
    description: 'A story about a fan who unexpectedly ends up on the same last train as their favorite idol, written by JIXKSEE.',
    description_ja: '推しのアイドルと思いがけず終電で一緒になるファンを描いた、JIXKSEEによる胸キュンストーリー。',
    rating: 8,
    status: 'Reading',
    image: '/images/anime_manga/myBias.webp'
  },
  {
    id: '3',
    title: 'Jujutsu Kaisen',
    title_ja: '呪術廻戦',
    description: 'A high-stakes supernatural battle manga following Yuji Itadori as he enters the world of Jujutsu Sorcerers to combat powerful Curses.',
    description_ja: '強力な呪いと戦うため呪術師の世界へと足を踏み入れる虎杖悠仁を描いたダークファンタジーバトル漫画。',
    rating: 10,
    status: 'Finished',
    image: '/images/anime_manga/jujutsuKaisen.webp'
  },
  {
    id: '4',
    title: 'Demon Slayer',
    title_ja: '鬼滅の刃',
    description: 'A masterpiece by Koyoharu Gotouge. The manga offers a complete and emotional conclusion to Tanjiro\'s journey to save his sister.',
    description_ja: '吾峠呼世晴による大傑作。妹を救うための炭治郎の旅路を感動的に描いた完結作品。',
    rating: 10,
    status: 'Finished',
    image: '/images/anime_manga/demonSlayer.webp'
  },
  {
    id: '5',
    title: 'Tokyo Revengers',
    title_ja: '東京卍リベンジャーズ',
    description: 'A high-octane time-travel thriller about Takemichi Hanagaki as he leaps back in time to save his middle school girlfriend from the notorious Tokyo Manji Gang.',
    description_ja: '中学時代の彼女を暴走族から救うため過去へタイムリープする花垣武道を描いたサスペンスアクション。',
    rating: 10,
    status: 'Finished',
    image: '/images/anime_manga/tokyoRevengers.jpg'
  },
  {
    id: '6',
    title: 'The 100 Girlfriends Who Really, Really, Really, Really, Really Love You',
    title_ja: '君のことが大大大大大好きな100人の彼女',
    description: 'An absolute peak-comedy harem manga that defies all tropes. Rentarou\'s dedication to his soulmate girlfriends is incredibly wholesome and hilarious.',
    description_ja: '従来の王道を打ち破る最高峰ラブコメディ。運命の彼女たち全員を幸せにしようとする恋太郎の決意が笑えて心温まる。',
    rating: 10,
    status: 'Reading',
    image: '/images/anime_manga/hundredGirlfriends.jpg'
  },
  {
    id: '7',
    title: 'My Hero Academia',
    title_ja: '僕のヒーローアカデミア',
    description: 'A heartwarming story about Deku\'s journey to become the greatest hero. Kohei Horikoshi\'s expressive art and epic battles define the modern superhero shonen era.',
    description_ja: '最高のヒーローを目指すデクの成長物語。堀越耕平の表現力豊かな作画と熱いバトルが魅力的。',
    rating: 10,
    status: 'Finished',
    image: '/images/anime_manga/myHeroAcademia.jpg'
  },
  {
    id: '8',
    title: 'Solo Leveling',
    title_ja: '俺だけレベルアップな件',
    description: 'The absolute pinnacle of power-fantasy manhwa. Sung Jinwoo\'s transition from the world\'s weakest hunter to the shadow monarch is packed with jaw-dropping action.',
    description_ja: '最強を目指すファンタジーウェブトゥーンの最高峰。最弱ハンターから影の君主へと成長する圧巻のアクション。',
    rating: 10,
    status: 'Finished',
    image: '/images/anime_manga/soloLeveling.jpg'
  }
];

export const animeRecommendations: Recommendation[] = [
  {
    id: '1',
    title: 'Demon Slayer',
    title_ja: '鬼滅の刃',
    description: 'A visual masterpiece by Koyoharu Gotouge. Tanjiros journey to save his sister is emotionally gripping and beautifully animated.',
    description_ja: '吾峠呼世晴原作の映像美の最高峰。妹を救う炭治郎の旅路は心を揺さぶり、圧倒的なアニメーションで描かれます。',
    rating: 10,
    status: 'Finished',
    image: '/images/anime_manga/demonSlayer.webp'
  },
  {
    id: '2',
    title: 'Black Clover',
    title_ja: 'ブラッククローバー',
    description: 'A story about never giving up. Astas journey from a magic-less boy to a powerful wizard knight is truly inspiring.',
    description_ja: '決して諦めない心を伝える物語。魔力を持たない少年アスタが最強の魔法騎士へと成長する姿に感動。',
    rating: 9,
    status: 'Finished',
    image: '/images/anime_manga/blackClover.webp'
  },
  {
    id: '3',
    title: 'Jujutsu Kaisen',
    title_ja: '呪術廻戦',
    description: 'A visually stunning adaptation by MAPPA, featuring incredible fight choreography and a dark, compelling supernatural world.',
    description_ja: 'MAPPAによる圧巻の映像化。素晴らしい戦闘殺陣とダークで魅力的な異能バトルワールド。',
    rating: 10,
    status: 'Finished',
    image: '/images/anime_manga/jujutsuKaisen.webp'
  },
  {
    id: '4',
    title: 'Hunter x Hunter',
    title_ja: 'HUNTER×HUNTER',
    description: 'A masterpiece of storytelling and power systems. Gon\'s journey to find his father is legendary, with complex characters and deep themes.',
    description_ja: '緻密なストーリー構成と念能力システムが光る名作。父親を探すゴンの旅は伝説的。',
    rating: 10,
    status: 'Finished',
    image: '/images/anime_manga/hxh.webp'
  },
  {
    id: '5',
    title: 'Your Name',
    title_ja: '君の名は。',
    description: 'A breathtakingly beautiful masterpiece by Makoto Shinkai. A cosmic body-swapping story of love, fate, and connection that leaves an unforgettable emotional resonance.',
    description_ja: '新海誠監督が送る息をのむほど美しい名作。愛、運命、絆を描いた入れ替わりストーリー。',
    rating: 10,
    status: 'Finished',
    image: '/images/anime_manga/yourName.jpg'
  },
  {
    id: '6',
    title: 'Attack on Titan',
    title_ja: '進撃の巨人',
    description: 'A dark fantasy masterpiece of unmatched scale. Eren Yeager\'s struggle for freedom is a phenomenal narrative filled with jaw-dropping plot twists and deep philosophical themes.',
    description_ja: 'スケールの大きさを誇るダークファンタジーの最高峰。自由を求めるエレンの闘いと伏線回収が圧巻。',
    rating: 9,
    status: 'Finished',
    image: '/images/anime_manga/attackOnTitan.jpg'
  },
  {
    id: '7',
    title: 'A Silent Voice',
    title_ja: '聲の形',
    description: 'A profoundly moving and realistic exploration of redemption, empathy, and hearing loss. Shoya and Shoko\'s journey of emotional healing is incredibly powerful.',
    description_ja: '贖罪と共感をテーマにした感動的な物語。将也と硝子の心の再生を描いた至高の作品。',
    rating: 10,
    status: 'Finished',
    image: '/images/anime_manga/aSilentVoice.jpg'
  },
  {
    id: '8',
    title: 'Re:Zero - Starting Life in Another World',
    title_ja: 'Re:ゼロから始める異世界生活',
    description: 'A dark, psychological isekai masterpiece. Subaru Natsuki\'s grueling struggle against despair through the "Return by Death" ability is intensely emotional.',
    description_ja: 'ダーク異世界転生ものの最高峰。「死に戻り」の能力で絶望に立ち向かうスバルの過酷な闘い。',
    rating: 10,
    status: 'Finished',
    image: '/images/anime_manga/reZero.jpg'
  },
  {
    id: '9',
    title: 'Horimiya',
    title_ja: 'ホリミヤ',
    description: 'A sweet and refreshing rom-com that perfectly captures the beauty of discovering someone\'s hidden side. The gorgeous adaptation by CloverWorks brings their sweet story to life.',
    description_ja: '甘く爽やかなラブコメディ。CloverWorksによる素晴らしい作画で描かれる、二人の秘密の素顔。',
    rating: 10,
    status: 'Finished',
    image: '/images/anime_manga/horimiya.jpg'
  },
  {
    id: '10',
    title: 'The Mikadono Sisters Are Surprisingly Easy to Deal With',
    title_ja: '帝乃三姉妹は案外、チョロい。',
    description: 'A charming and hilarious rom-com about a boy living with three exceptionally talented sisters who are surprisingly easy to fluster. Highly entertaining!',
    description_ja: '文武両道な三姉妹と同居する心温まるラブコメディ。意外と照れやすい姉妹とのやり取りが面白い。',
    rating: 9,
    status: 'Finished',
    image: '/images/anime_manga/mikadonoSisters.jpg'
  },
  {
    id: '11',
    title: 'Hell Mode',
    title_ja: 'ヘルモード',
    description: 'An engaging isekai about Kenichi, who chooses the hardest "Hell Mode" difficulty. His journey as a summoner is filled with strategic battles and satisfying growth.',
    description_ja: '最高難易度「ヘルモード」を選んだ健一の異世界ファンタジー。召喚士としての戦略的バトルと爽快な成長。',
    rating: 9,
    status: 'Finished',
    image: '/images/anime_manga/hellMode.jpg'
  },
  {
    id: '12',
    title: 'Tower of God',
    title_ja: '神之塔 -Tower of God-',
    description: 'An epic fantasy action series with unique world-building. Bam\'s quest to find Rachel as he climbs the mysterious, dangerous Tower is beautifully animated with an incredible soundtrack.',
    description_ja: '独特な世界観を持つ壮大なファンタジー。塔を登る夜の物語と素晴らしい音楽。',
    rating: 9,
    status: 'Finished',
    image: '/images/anime_manga/towerOfGod.jpg'
  },
  {
    id: '13',
    title: 'Tokyo Revengers',
    title_ja: '東京卍リベンジャーズ',
    description: 'A thrilling time-travel action drama. Takemichi travels back in time to his middle school days to rise within a notorious gang and save his first love.',
    description_ja: 'スリリングなタイムリープアクション。初恋の相手を救うため中学時代へタイムスリップするタケミチ。',
    rating: 10,
    status: 'Finished',
    image: '/images/anime_manga/tokyoRevengers.jpg'
  },
  {
    id: '14',
    title: 'The 100 Girlfriends Who Really, Really, Really, Really, Really Love You',
    title_ja: '君のことが大大大大大好きな100人の彼女',
    description: 'A boundary-breaking, extremely hilarious harem comedy. Rentarou\'s absolute devotion to making every single one of his soulmate girlfriends happy is legendary.',
    description_ja: '爆笑必至の超ハイテンションラブコメ。彼女全員を命がけで愛する恋太郎の男気が最高。',
    rating: 10,
    status: 'Finished',
    image: '/images/anime_manga/hundredGirlfriends.jpg'
  },
  {
    id: '15',
    title: 'Chainsaw Man',
    title_ja: 'チェンソーマン',
    description: 'A cinematic, high-octane dark action masterpiece. Denji\'s life as a devil hunter is chaotic, brutal, and emotionally resonant, perfectly animated by MAPPA.',
    description_ja: '映画的演出が光るダークアクションの大作。デンジの悪魔ハンターとしての混沌とした生き様。',
    rating: 10,
    status: 'Finished',
    image: '/images/anime_manga/chainsawMan.jpg'
  },
  {
    id: '16',
    title: 'One Punch-Man',
    title_ja: 'ワンパンマン',
    description: 'An absolute masterpiece of action and comedy. Madhouse\'s legendary adaptation of Saitama, a hero who can defeat any foe with a single punch, features god-tier animation.',
    description_ja: 'アクションとギャグの最高峰。一撃で敵を倒すサイタマの神作画アニメーション。',
    rating: 10,
    status: 'Finished',
    image: '/images/anime_manga/onePunchMan.jpg'
  },
  {
    id: '17',
    title: 'My Hero Academia',
    title_ja: '僕のヒーローアカデミア',
    description: 'An epic superhero journey following Izuku Midoriya as he inherits the world\'s greatest power. Filled with emotional battles, outstanding hero designs, and iconic soundtracks.',
    description_ja: '最高の力を受け継いだ緑谷出久のヒーロー成長譚。胸を熱くする戦闘と素晴らしいBGM。',
    rating: 10,
    status: 'Finished',
    image: '/images/anime_manga/myHeroAcademia.jpg'
  },
  {
    id: '18',
    title: 'My Dress-Up Darling',
    title_ja: 'その着せ替え人形は恋をする',
    description: 'A gorgeous, heartwarming anime celebrating the passion of cosplay and crafting. The phenomenal chemistry between Gojo and Marin is sweet, respectful, and beautifully animated.',
    description_ja: 'コスプレとモノづくりへの情熱を描いた心温まるアニメ。新菜と海夢の尊い掛け合いが魅力。',
    rating: 9,
    status: 'Finished',
    image: '/images/anime_manga/myDressUpDarling.jpg'
  },
  {
    id: '19',
    title: 'Solo Leveling',
    title_ja: '俺だけレベルアップな件',
    description: 'An outstanding, action-packed fantasy adaptation. Jinwoo\'s spectacular growth from the weakest hunter to an unstoppable force features jaw-dropping animation by A-1 Pictures.',
    description_ja: 'A-1 Picturesによる圧倒的アニメ化。最弱から最強へと覚醒する水篠旬のバトルアクション。',
    rating: 9,
    status: 'Finished',
    image: '/images/anime_manga/soloLeveling.jpg'
  },
  {
    id: '20',
    title: 'The Shiunji Family Children',
    title_ja: '紫雲寺家の子供たち',
    description: 'An intriguing, high-tension family romance drama detailing the complex relationships and secrets between the talented Shiunji siblings.',
    description_ja: '紫雲寺家の才能豊かな兄弟姉妹の間に秘められた愛と葛藤を描くサスペンスラブコメ。',
    rating: 10,
    status: 'Finished',
    image: '/images/anime_manga/shiunjiFamily.jpg'
  }
];

