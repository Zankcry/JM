export interface TranslationDictionary {
  [key: string]: {
    en: string;
    ja: string;
  };
}

export const translations: TranslationDictionary = {
  // Navigation & Header
  'nav.home': { en: 'Home', ja: 'ホーム' },
  'nav.about': { en: 'About', ja: 'アバウト' },
  'nav.projects': { en: 'Projects', ja: 'プロジェクト' },
  'nav.posts': { en: 'Posts', ja: 'ポスト' },
  'nav.photos': { en: 'Photos', ja: 'フォト' },
  'nav.theme': { en: 'Theme', ja: 'テーマ' },
  'nav.accent': { en: 'Accent', ja: 'アクセント' },
  'nav.language': { en: 'Language', ja: '言語' },

  // Hero Section
  'hero.greeting': { en: 'Yahho!', ja: 'ヤッホー！' },
  'hero.name': { en: 'James Michael', ja: 'ジェームズ・マイケルです' },
  'hero.bio1': {
    en: "I'm an IT undergraduate specializing in Web Development. I currently build websites for personal projects and local businesses like helping a local",
    ja: 'Web開発を専攻しているIT学生です。現在は個人プロジェクトや、地元の',
  },
  'hero.barbershop': { en: 'Barbershop', ja: '理髪店' },
  'hero.bio1_end': {
    en: 'increase their online awareness.',
    ja: 'のオンライン認知度向上を支援するなど、Webサイト制作を行っています。',
  },
  'hero.bio2_lead': {
    en: 'Right now, my main focus is learning',
    ja: '現在、主に注力しているのは',
  },
  'hero.bio2_middle': {
    en: 'and building intuitive, responsive web apps with high attention to UI/UX detail.',
    ja: 'などの学習と、UI/UXの細部にこだわった直感的でレスポンシブなWebアプリの開発です。',
  },
  'hero.explore_projects': { en: 'Explore Projects', ja: 'プロジェクトを見る' },
  'hero.get_in_touch': { en: 'Get in Touch', ja: 'お問い合わせ' },
  'hero.download_resume': { en: 'Download Resume', ja: '履歴書をダウンロード' },

  // Bento Profile
  'bento.role': { en: 'Developer & Tech Enthusiast', ja: 'デベロッパー ＆ テック愛好家' },
  'bento.location': { en: 'Location', ja: '所在地' },
  'bento.location_val': { en: 'Davao City, Philippines', ja: 'フィリピン、ダバオ市' },
  'bento.located_in': { en: 'Located In', ja: '所在地' },
  'bento.focus': { en: 'Focus', ja: '注力分野' },
  'bento.focus_val': { en: 'Frontend & UI Design', ja: 'フロントエンド ＆ UIデザイン' },
  'bento.status': { en: 'Status', ja: 'ステータス' },
  'bento.status_val': { en: 'Open for Opportunities', ja: 'お仕事・ご相談受付中' },
  'bento.contact_me': { en: 'Contact Me', ja: 'お問い合わせ' },
  'bento.connect_text': {
    en: "Let's connect and explore opportunities together.",
    ja: 'お仕事のご相談やお問い合わせはこちらからどうぞ。',
  },
  'bento.send_message': { en: 'Send Message', ja: 'メッセージを送る' },
  'bento.copy': { en: 'COPY', ja: 'コピー' },
  'bento.copied': { en: 'COPIED', ja: 'コピー完了' },
  'bento.current_stack': { en: 'Current Tech Stack', ja: '現在の使用技術スタック' },
  'bento.bio': {
    en: 'Passionate about creating clean code, modern aesthetics, and interactive user experiences.',
    ja: 'クリーンなコード、モダンなデザイン美学、対話的なユーザー体験の作成に情熱を注いでいます。',
  },
  'bento.hobbies': { en: 'Interests & Hobbies', ja: '趣味・関心' },
  'bento.hobbies_val': {
    en: 'Gaming, Anime, Pixel Art, Custom Keyboards',
    ja: 'ゲーム, アニメ, ピクセルアート, 自作キーボード',
  },

  // Projects Section
  'projects.title': { en: 'Featured Projects', ja: '注目のプロジェクト' },
  'projects.subtitle': {
    en: "A selection of projects I've built, ranging from web applications to client websites.",
    ja: 'Webアプリケーションからクライアント向けサイトまで、これまでに制作した代表的なプロジェクトです。',
  },
  'projects.filter_all': { en: 'All', ja: 'すべて' },
  'projects.filter_web': { en: 'Web Apps', ja: 'Webアプリ' },
  'projects.filter_client': { en: 'Client Work', ja: 'クライアント実績' },
  'projects.filter_personal': { en: 'Personal', ja: '個人制作' },
  'projects.view_details': { en: 'View Details', ja: '詳細を見る' },
  'projects.live_demo': { en: 'Live Demo', ja: 'ライブデモ' },
  'projects.source_code': { en: 'Source Code', ja: 'ソースコード' },
  'projects.key_features': { en: 'Key Features', ja: '主な機能' },
  'projects.overview': { en: 'Overview', ja: '概要' },
  'projects.technologies': { en: 'Technologies Used', ja: '使用テクノロジー' },
  'projects.close': { en: 'Close', ja: '閉じる' },
  'projects.screenshots': { en: 'Screenshots', ja: 'スクリーンショット' },

  // Posts / Recent Activity
  'posts.title': { en: 'Recent Posts', ja: '最新の記事' },
  'posts.subtitle': {
    en: 'Thoughts, tutorials, and insights about web development and technology.',
    ja: 'Web開発やテクノロジーに関する考察、チュートリアル、インサイト。',
  },
  'posts.search_placeholder': { en: 'Search posts by title, tag, or content...', ja: 'タイトル、タグ、キーワードで検索...' },
  'posts.read_more': { en: 'Read Article', ja: '記事を読む' },
  'posts.min_read': { en: 'min read', ja: '分で読める' },
  'posts.back_to_posts': { en: 'Back to Posts', ja: '記事一覧に戻る' },
  'posts.my_picks': { en: 'My Picks', ja: 'おすすめ作品' },

  // About Page
  'about.title': { en: 'About Me', ja: '私について' },
  'about.subtitle': {
    en: 'Learn more about my background, technical journey, and passion for building.',
    ja: '私のバックグラウンド、技術的歩み、ものづくりへの情熱について。',
  },
  'about.background_heading': { en: 'Background & Journey', ja: '経歴と歩み' },
  'about.skills_heading': { en: 'Technical Skills', ja: 'テクニカルスキル' },
  'about.testimonials_heading': { en: 'Recommendations & Testimonials', ja: '推薦と評価' },
  'about.word_title': { en: 'Word of the Week', ja: '今週の日本語' },
  'about.music_title': { en: 'Music I Code To', ja: '作業用BGM' },
  'about.manga_title': { en: 'Manga Recommendations', ja: 'おすすめの漫画 ＆ アニメ' },

  // Photos Page
  'photos.title': { en: 'Photos', ja: '写真' },
  'photos.subtitle': {
    en: 'A collection of photos capturing scenes, life, and travel.',
    ja: '日々の生活、旅行、日常の風景を捉えた写真コレクション。',
  },

  // Footer
  'footer.rights': { en: 'All rights reserved.', ja: '全著作権所有。' },
  'footer.built_with': { en: 'Built with React, TypeScript & Catppuccin', ja: 'React, TypeScript & Catppuccin で制作' },
  'footer.back_to_top': { en: 'Back to Top', ja: 'トップに戻る' },

  // Easter Egg
  'foxy.sorry': { en: 'Im sorry.. hehe ✌️', ja: 'ごめんなさい.. へへ ✌️' },
};
