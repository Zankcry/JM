export type ProjectDetail = {
  subtitle?: string;
  subtitle_ja?: string;
  role?: string;
  role_ja?: string;
  detailedDescription?: string;
  detailedDescription_ja?: string;
  architecture?: {
    tech: string;
    description: string;
    description_ja?: string;
  }[];
  keyFeatures?: string[];
  keyFeatures_ja?: string[];
  localSeo?: {
    achievement: string;
    term: string;
    location: string;
    details: string;
  };
  ga4Seo?: {
    strategy: string;
    implementation: string;
    results: string;
  };
};

export type Project = {
  title: string;
  title_ja?: string;
  description: string;
  description_ja?: string;
  image: string;
  poster?: string;
  tags: string[];
  links: {
    github?: string;
    live?: string;
  };
  details?: ProjectDetail;
  screenshots?: string[];
};

export const projects: Project[] = [
  {
    title: "Charlie's Barber & Salon",
    title_ja: "チャーリーズ バーバー ＆ サロン",
    description: "A fast, responsive website for a local barbershop in Angeles City, featuring clean CSS styling, Firebase authentication, local SEO optimizations, and analytics tracking.",
    description_ja: "アンヘレス市にある地元の理髪店向けの高速でレスポンシブな公式Webサイト。クリーンなCSSスタイリング、Firebase認証、ローカルSEO最適化、アナリティクス計測を備えています。",
    image: '/videos/project_1.webp',
    poster: '/images/project_poster_1.webp',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Firebase', 'GA4'],
    links: { live: 'https://charlies-barber.vercel.app/' },
    screenshots: [
      '/images/project1Preview_1.png',
      '/images/project1Preview_2.png',
      '/images/project1Preview_3.png',
      '/images/project1Preview_4.png'
    ],
    details: {
      subtitle: "PREMIUM LOCAL SALON DIGITAL PRESENCE",
      subtitle_ja: "プレミアムローカルサロン デジタルプレゼンス",
      role: "Lead Developer & SEO Strategist",
      role_ja: "リードデベロッパー ＆ SEOストラテジスト",
      detailedDescription: "Charlie's Barber & Salon is a modern digital storefront built for a high-volume local barbershop in Angeles City. Designed from the ground up for speed, local discoverability, and accessibility, the site combines custom CSS animations with robust Google Analytics 4 tracking and Firebase integrations.",
      detailedDescription_ja: "チャーリーズ バーバー ＆ サロンは、アンヘレス市の人気の高い地元理髪店のために構築されたモダンなデジタル店舗です。スピード、ローカル検索での見つけやすさ、アクセシビリティを追求し、カスタムCSSアニメーションとGoogle Analytics 4計測、Firebase統合を組み合わせています。",
      architecture: [
        {
          tech: "Vanilla Tech Stack",
          description: "Built without framework overhead to maintain sub-second page loads, near-zero layout shifts, and 95+ Lighthouse performance scores.",
          description_ja: "サブセカンドのページ読み込み、ほぼゼロのレイアウトシフト、95以上のLighthouseスコアを維持するためフレームワークなしで構築。"
        },
        {
          tech: "Firebase Auth & Realtime Services",
          description: "Secures admin functions and manages live service status updates using Firebase SDK modules.",
          description_ja: "Firebase SDKモジュールを使用して管理者機能を保護し、ライブサービスステータスの更新を管理。"
        },
        {
          tech: "Structured Schema Markup",
          description: "Uses JSON-LD LocalBusiness schema with precise geo-coordinates, opening hours, and service categories to dominate local search packs.",
          description_ja: "ローカル検索パックで上位表示するため、正確な地理座標、営業時間、サービスカテゴリを含むJSON-LD LocalBusinessスキーマを使用。"
        },
        {
          tech: "Google Analytics 4 & Tag Manager",
          description: "Configured custom event listeners tracking button clicks, appointment funnels, gallery views, and directions requests.",
          description_ja: "ボタンのクリック、予約ファンネル、ギャラリー閲覧、アクセス経路のリクエストを計測するカスタムイベントリスナーを構成。"
        }
      ],
      keyFeatures: [
        "💈 Dynamic Services & Pricing Menu with responsive tab filtering and visual indicators.",
        "📍 Integrated Google Maps Location card with one-tap directions routing.",
        "📱 Mobile-First Responsive Design engineered for quick booking on smartphones.",
        "⚡ Sub-second Load Times through asset minification, lazy-loaded media, and optimized font loading.",
        "📊 GA4 Custom Event Tracking capturing high-intent conversion actions across the storefront."
      ],
      keyFeatures_ja: [
        "💈 レスポンシブなタブフィルターとビジュアル表示を備えた動的サービス＆料金メニュー。",
        "📍 ワンタップで経路案内が起動する統合Googleマップロケーションカード。",
        "📱 スマートフォンでのクイック予約に特化したモバイルファーストレスポンシブデザイン。",
        "⚡ アセットの軽量化、遅延読み込み、フォント読み込みの最適化による超高速ロード速度。",
        "📊 店舗全体で高コンバージョンアクションを計測するGA4カスタムイベントトラッキング。"
      ],
      localSeo: {
        achievement: "Top 10 Google Rank",
        term: "Barbershop in Angeles City",
        location: "Angeles City, Pampanga",
        details: "Optimized Google Business Profile integration, structured data markup, and localized keyword targeting pushed the barbershop into the top 10 search results within 60 days of launch."
      },
      ga4Seo: {
        strategy: "Conversion Funnel Instrumentation",
        implementation: "Tagged all high-intent CTAs including call buttons, location directions, and service menu views using custom dataLayer events.",
        results: "Delivered actionable analytics showing peak appointment inquiry times and top-performing hair service categories."
      }
    }
  },
  {
    title: 'Hoyoverse Hub',
    title_ja: 'ホヨバース ハブ',
    description: 'A responsive fan portal built with Angular 18+ and Tailwind CSS. Features a game catalog, active status, search filters, and a database management custom staff directory.',
    description_ja: 'Angular 18+とTailwind CSSで構築されたレスポンシブなファンポータル。ゲームカタログ、アクティブステータス、検索フィルター、データベース管理機能を備えたカスタムスタッフディレクトリを搭載。',
    image: '/videos/project_2.webp',
    poster: '/images/project_poster_2.png',
    tags: ['Angular', 'TypeScript', 'TailwindCSS'],
    links: { github: 'https://github.com/Zankcry/Hoyoverse-Hub', live: 'https://hoyoverse-hub.vercel.app/' },
    screenshots: [
      '/images/project2Preview_1.png',
      '/images/project2Preview_2.png',
      '/images/project2Preview_3.png',
      '/images/project2Preview_4.png'
    ],
    details: {
      subtitle: "ANGULAR 18 HUB & STAFF MANAGEMENT DIRECTORY",
      subtitle_ja: "ANGULAR 18 ハブ ＆ スタッフ管理ディレクトリ",
      role: "Solo Developer",
      role_ja: "ソロデベロッパー",
      detailedDescription: "Hoyoverse Hub is an interactive web portal for fans of miHoYo games including Genshin Impact, Honkai: Star Rail, and Zenless Zone Zero. Built using Angular 18+, the application features signals-driven state management, real-time character search filtering, and a comprehensive database management system for fictional staff records.",
      detailedDescription_ja: "Hoyoverse Hubは、原神、崩壊：スターレイル、ゼンレスゾーンゼロなどのmiHoYoゲームファンのためのインタラクティブなWebポータルです。Angular 18+を使用して構築され、Signalsによる状態管理、リアルタイムキャラクター検索フィルター、架空のスタッフ記録のための包括的なデータベース管理システムを備えています。",
      architecture: [
        {
          tech: "Angular 18+ Signals & RxJS",
          description: "Utilizes Angular Signals for fine-grained reactive state updates alongside RxJS streams for asynchronous search filtering.",
          description_ja: "微細なリアクティブ状態更新のためのAngular Signalsと、非同期検索フィルターのためのRxJSストリームを活用。"
        },
        {
          tech: "Tailwind CSS Component Engine",
          description: "Styled with utility-first Tailwind classes, implementing custom glassmorphism overlays and vibrant game-inspired color schemes.",
          description_ja: "ユーティリティファーストのTailwindクラスでスタイリングし、ゲームにインスパイアされた鮮やかな配色を実装。"
        },
        {
          tech: "Staff Directory CRUD Engine",
          description: "Features a full database panel allowing users to create, update, filter, and delete personnel records with reactive form validation.",
          description_ja: "リアクティブフォームのバリデーションを備え、スタッフ記録の作成、更新、検索、削除を行えるデータベースパネル。"
        },
        {
          tech: "Modular Standalone Components",
          description: "Built using Angular's standalone component architecture for cleaner code separation and lazy-loaded routes.",
          description_ja: "コードの分離と遅延読み込みルートを実現するAngularのスタンドアロンコンポーネントアーキテクチャ。"
        }
      ],
      keyFeatures: [
        "🎮 Multi-Game Catalog showcasing key titles with rich media banners and quick links.",
        "🔍 Instant Search & Filter engine allowing users to sort characters by element, weapon type, and rarity.",
        "📋 Staff Directory Dashboard with full CRUD capabilities for managing roster entries.",
        "⚡ Angular Signals Reactive State providing instant UI updates with zero page refreshes.",
        "🎨 Dynamic Dark Theme tailored to match the polished aesthetic of modern Hoyoverse titles."
      ],
      keyFeatures_ja: [
        "🎮 豊かなメディアバナーとクイックリンクを備えたマルチゲームカタログ。",
        "🔍 属性、武器タイプ、レアリティでキャラクターを並べ替えられる即時検索＆フィルター。",
        "📋 スタッフ名簿を管理するための完全なCRUD機能を備えたダッシュボード。",
        "⚡ ページ再読み込みなしで即座にUIを更新するAngular Signalsリアクティブステート。",
        "🎨 ホヨバース作品の洗練された世界観に合わせたダークテーマ。"
      ]
    }
  },
  {
    title: 'Yomi (読み)',
    title_ja: 'Yomi (読み)',
    description: 'A clean, ad-free novel reader app with a Tachiyomi-inspired dark UI, built using Flutter. Integrates custom reading views, reading progress syncing, and a PHP/MySQL API backend.',
    image: '/videos/project_3.webp',
    poster: '/images/project_poster_3.png',
    tags: ['Flutter', 'Dart', 'PHP', 'MySQL'],
    links: { github: 'https://github.com/Zankcry/Yomi', live: 'https://yomi.infinityfreeapp.com/' },
    screenshots: [
      '/images/project3Preview_1.png',
      '/images/project3Preview_2.png',
      '/images/project3Preview_3.png',
      '/images/project3Preview_4.png'
    ],
    details: {
      subtitle: "TACHIYOMI-INSPIRED CROSS-PLATFORM NOVEL READER",
      subtitle_ja: "TACHIYOMI風クロスプラットフォーム小説リーダー",
      role: "Lead Developer",
      role_ja: "リードデベロッパー",
      detailedDescription: "Yomi is a clean, ad-free web novel and light novel reader application designed for a comfortable, distraction-free reading experience. Drawing inspiration from the popular Tachiyomi interface, Yomi features a responsive dark-themed grid layout, custom reader layouts, and a PHP/MySQL backend that synchronizes user libraries and reading progress across devices.",
      detailedDescription_ja: "Yomiは、快適で集中できる読書体験のために設計された、クリーンで広告なしのWeb小説・ライトノベルリーダーアプリです。人気のTachiyomiインターフェースから着想を得ており、ダークテーマのグリッドレイアウト、カスタム読書設定、デバイス間で本棚と読書進捗を同期するPHP/MySQLバックエンドを備えています。",
      architecture: [
        {
          tech: "Flutter (Dart) Frontend",
          description: "Uses Flutter's cross-platform engine to deploy a single responsive app for Web, Windows, and mobile screens.",
          description_ja: "Flutterのクロスプラットフォームエンジンを使用し、Web、Windows、モバイル画面向けに単一のレスポンシブアプリを配信。"
        },
        {
          tech: "PHP REST API Backend",
          description: "A lightweight PHP API served locally via XAMPP and live in production on InfinityFree hosting.",
          description_ja: "XAMPPでローカル動作し、InfinityFreeホスティングで本番運用される軽量なPHP API。"
        },
        {
          tech: "MySQL Relational DB",
          description: "Uses a MySQL database to track user profiles, novel catalogs, shelf structures, and reading progress coordinates.",
          description_ja: "MySQLデータベースを使用して、ユーザープロファイル、小説カタログ、本棚構造、読書の進捗位置を記録。"
        },
        {
          tech: "GitHub Actions CI/CD",
          description: "Automated pipeline that compiles production Flutter Web builds and pushes updates directly to the web host.",
          description_ja: "本番向けFlutter Webビルドをコンパイルし、Webホストに直接更新をデプロイする自動パイプライン。"
        }
      ],
      keyFeatures: [
        "📖 Tachiyomi-inspired interface featuring dark modes, simple grids, and clean collections.",
        "⚡ Custom reading view with adjustable font sizes, line heights, and vertical scrolling physics.",
        "🔐 User signup and login with secure password hashing.",
        "🔄 Database sync keeping reading progress and shelf additions aligned between different devices.",
        "📁 Modular asset routing utilizing relative paths for easy deployment."
      ],
      keyFeatures_ja: [
        "📖 ダークモード、シンプルなグリッド、クリーンなコレクションを備えたTachiyomi風 UI。",
        "⚡ 調整可能なフォントサイズ、行高、垂直スクロール物理演算を備えたカスタム読書ビュー。",
        "🔐 安全なパスワードハッシュ化をサポートするユーザー登録とログイン。",
        "🔄 デバイス間で読書の進捗状況と本棚の追加を同期するデータベース連動。",
        "📁 簡単なデプロイを可能にするモジュール式アセットルーティング。"
      ]
    }
  },
  {
    title: 'Freedom Wall',
    title_ja: 'フリーダム ウォール',
    description: 'A modern, interactive anonymous message board built with Next.js 16, React 19, Supabase, and Tailwind CSS v4, supporting image uploads and real-time moderation.',
    description_ja: 'Next.js 16、React 19、Supabase、Tailwind CSS v4で構築されたモダンでインタラクティブな匿名掲示板。画像アップロードとリアルタイムモデレーションに対応。',
    image: '/videos/project_4.webp',
    poster: '/images/project_poster_4.png',
    tags: ['Next.js', 'TailwindCSS', 'Supabase', 'TypeScript'],
    links: { github: 'https://github.com/Zankcry/freedom-wall', live: 'https://freedom-wall-three.vercel.app/' },
    screenshots: [
      '/images/project4Preview_1.png',
      '/images/project4Preview_2.png',
      '/images/project4Preview_3.png',
      '/images/project4Preview_4.png'
    ],
    details: {
      subtitle: "REAL-TIME ANONYMOUS EXPRESSION PLATFORM",
      subtitle_ja: "リアルタイム匿名表現プラットフォーム",
      role: "Solo Developer",
      role_ja: "ソロデベロッパー",
      detailedDescription: "Freedom Wall is an interactive web app where users can share authentic thoughts, support messages, and media uploads anonymously. Built using Next.js 16 and React 19, the site features modern glassmorphism styling, real-time database synchronization via Supabase, and a secure moderation dashboard.",
      detailedDescription_ja: "Freedom Wallは、ユーザーが本音の思い、応援メッセージ、メディアファイルを匿名で共有できるインタラクティブWebアプリです。Next.js 16とReact 19で構築され、モダンなグラスモーフィズムデザイン、Supabaseによるリアルタイムデータベース同期、安全なモデレーションダッシュボードを備えています。",
      architecture: [
        {
          tech: "Next.js 16 & React 19",
          description: "Built on Next.js 16 with the App Router, utilizing dynamic layouts, type-safe API endpoints, and optimized server-side components.",
          description_ja: "App Routerを備えたNext.js 16をベースに、動的レイアウト、型安全なAPIエンドポイント、最適化されたSSRコンポーネントを活用。"
        },
        {
          tech: "Supabase & Postgres",
          description: "Uses Supabase for real-time PostgreSQL database synchronization, instant queries, and secure database indexing.",
          description_ja: "リアルタイムのPostgreSQLデータベース同期、即時クエリ、安全なデータベースインデックス作成にSupabaseを使用。"
        },
        {
          tech: "Tailwind CSS v4.0",
          description: "Uses the modern Tailwind CSS v4 engine, incorporating customized color transitions and dark/light mode toggles.",
          description_ja: "モダンなTailwind CSS v4エンジンを使用し、カスタムカラー切り替えとダーク/ライトモード切り替えを組み込み。"
        },
        {
          tech: "Moderation Dashboard",
          description: "Features a password-protected admin dashboard to approve, reject, or restore posts.",
          description_ja: "投稿の承認、拒否、復元を行えるパスワード保護された管理者ダッシュボード。"
        }
      ],
      keyFeatures: [
        "🎨 Glassmorphic UI featuring minimal scrollbars, gradient cards, and subtle animations.",
        "👤 Anonymous Posting enabling visitors to publish entries safely under custom anonymous codenames.",
        "🖼️ Image uploads supporting files up to 5MB encoded as Base64.",
        "❤️ LocalStorage-backed vote validation alongside custom micro-animations for real-time likes.",
        "💬 Relational, threaded comment feeds supporting nested replies and anonymous poster tags.",
        "🔄 Soft-deletes allowing admins to clean the board instantly while preserving relational data integrity."
      ],
      keyFeatures_ja: [
        "🎨 グラスモーフィズムUI、グラデーションカード、繊細なアニメーション。",
        "👤 訪問者がカスタム匿名コードネームで安全に投稿できる匿名投稿機能。",
        "🖼️ 最大5MBのBase64エンコード画像アップロードをサポート。",
        "❤️ リアルタイムイイネのためのLocalStorageベースの投票バリデーション。",
        "💬 ネストされた返信と匿名タグをサポートするスレッド形式のコメントフィード。",
        "🔄 データの整合性を保ちながら即座に掲示板を整理できるソフトデリート。"
      ]
    }
  },
  {
    title: 'Hubspot Coffee',
    title_ja: 'ハブスポット コーヒー',
    description: 'A website for Hubspot Coffee. Features a custom dark-themed Leaflet map, smooth scrolling animations, responsive product lists, and a customer message board.',
    description_ja: 'Hubspot Coffeeの公式Webサイト。ダークテーマのカスタムLeafletマップ、スムーズなスクロールアニメーション、レスポンシブな商品一覧、顧客メッセージボードを搭載。',
    image: '/videos/project_5.webp',
    poster: '/images/project_poster_5.png',
    tags: ['HTML5', 'TailwindCSS', 'JavaScript'],
    links: { github: 'https://github.com/Zankcry/HubSpot-Coffee', live: 'https://hub-spot-coffee.vercel.app/index.html' },
    screenshots: [
      '/images/project5Preview_1.png',
      '/images/project5Preview_2.png',
      '/images/project5Preview_3.png',
      '/images/project5Preview_4.png'
    ],
    details: {
      subtitle: "DARK CAFÉ STOREFRONT & CLIENT DASHBOARD MOCKUP",
      subtitle_ja: "ダークテイストカフェ店舗 ＆ クライアントダッシュボード",
      role: "Lead Developer",
      role_ja: "リードデベロッパー",
      detailedDescription: "Hubspot Coffee is a beautifully designed café website and client dashboard mockup for a modern coffee shop located in front of Holy Angel University in Angeles City. Styled with a cozy dark theme, the site features an interactive shopping cart, a custom dark Leaflet map, and dedicated admin dashboard panels for loyalty customers and feedback records.",
      detailedDescription_ja: "Hubspot Coffeeは、アンヘレス市のホーリー・エンジェル大学前に位置するモダンなコーヒーショップのための美しいカフェWebサイト兼クライアントダッシュボードモックアップです。温かみのあるダークテーマでデザインされ、ショッピングカート、ダーク Leaflet マップ、ロイヤルティ顧客管理パネルを備えています。",
      architecture: [
        {
          tech: "Dark UI & Typography",
          description: "Uses cozy dark utility blocks, custom scrollbars, Poppins typography, and AOS (Animate On Scroll) to create a warm, inviting café atmosphere.",
          description_ja: "落ち着いたダークテーマ、カスタムスクロールバー、Poppinsタイポグラフィ、AOSを使用して居心地の良いカフェ空間を演出。"
        },
        {
          tech: "Leaflet.js Map Integration",
          description: "Includes a custom Leaflet map centered at the café coordinates, styled with CartoDB Dark Matter tiles and gold-tinted map markers.",
          description_ja: "カフェの座標を中心に、CartoDB Dark Matterタイルとゴールドのマップマーカーで装飾したカスタムLeafletマップ。"
        },
        {
          tech: "Dynamic API Mocking",
          description: "Configured mock API fetch endpoints (/products, /customers) that resolve dynamically depending on whether the site is running locally or live.",
          description_ja: "ローカルか本番環境かに応じて動的に解決されるモックAPIエンドポイント（/products, /customers）を構成。"
        },
        {
          tech: "Interactive Cart & Ratings",
          description: "Uses custom vanilla JavaScript to handle live shopping cart updates, PHP price calculations, and star rating interactions.",
          description_ja: "バニラJavaScriptにより、リアルタイムのショッピングカート更新、価格計算、星評価のインタラクションを処理。"
        }
      ],
      keyFeatures: [
        "🗺️ Custom Leaflet.js Map highlighting the café's physical location right in front of Holy Angel University.",
        "🛒 Interactive Shopping Cart computing real-time PHP totals and supporting quantity changes.",
        "⭐ Star Rating System allowing users to rate signature beverages and pastries with instant highlights.",
        "📋 Live Search Filtering enabling instant searches through products, categories, flavor notes, and customer databases.",
        "📬 Contact Form routing user submissions to social media and email mockups based on selected channels.",
        "👥 Admin CRM Dashboards showcasing mock customer loyalty databases and contact records."
      ],
      keyFeatures_ja: [
        "🗺️ ホーリー・エンジェル大学の正面にある店舗位置を指し示すカスタム Leaflet.js マップ。",
        "🛒 リアルタイムで合計金額を計算し、数量変更に対応するインタラクティブなショッピングカート。",
        "⭐ 看板ドリンクやペイストリーを即座にハイライト評価できる星評価システム。",
        "📋 商品、カテゴリー、風味ノート、顧客データベースを即座に検索できるライブ検索フィルター。",
        "📬 選択したチャネルに基づいて問い合わせを送信するコンタクトフォーム。",
        "👥 顧客ロイヤルティデータベースと問い合わせ記録を表示する管理者用CRMダッシュボード。"
      ]
    }
  },
  {
    title: 'Simpler Player',
    title_ja: 'Simple Player (シンプル プレイヤー)',
    description: 'A "Cinematic Terminal" Picture-in-Picture experience for web videos, Reels, and Shorts. Vibe coded as a browser extension using the modern Document PiP API.',
    description_ja: 'Web動画、Reels、Shortsに対応した『シネマティックターミナル』ピクチャー・イン・ピクチャー体験。現代のDocument PiP APIを使用したブラウザ拡張機能。',
    image: '/videos/project_6.webp',
    poster: '/images/project6Preview_1.png',
    tags: ['JavaScript', 'HTML5', 'CSS3'],
    links: { github: 'https://github.com/Zankcry/Simple-Player', live: 'https://chromewebstore.google.com/detail/simple-player-universal-p/nbhenlkfbomgopnkecffgfennnobejfn?authuser=1&hl=en' },
    screenshots: [
      '/images/project6Preview_1.png',
      '/images/project6Preview_2.png',
      '/images/project6Preview_3.png',
      '/images/project6Preview_4.png'
    ],
    details: {
      subtitle: "CINEMATIC TERMINAL PICTURE-IN-PICTURE ENGINE",
      subtitle_ja: "シネマティックターミナル PiP エンジン",
      role: "Solo Developer",
      role_ja: "ソロデベロッパー",
      detailedDescription: "Simple Player is a browser extension I vibe coded that uses the modern Document Picture-in-Picture API to pull videos out of their webpages and place them in a floating, fully controllable cinematic window. Designed to support tricky targets like nested iframes, Reels, and Shadow DOM elements, it provides a universal and smooth desktop playback experience with a terminal-style theme.",
      detailedDescription_ja: "Simple Playerは、最新のDocument Picture-in-Picture APIを使用してWebページから動画を抜き出し、浮かぶ自由なシネマティックウィンドウで再生するブラウザ拡張機能です。ネストされたiframeやReels、Shadow DOM要素にも対応し、ターミナル風のテーマで滑らかな再生体験を提供します。",
      architecture: [
        {
          tech: "Tiered Capture Chain",
          description: "A priority-ordered rendering pipeline featuring Direct PiP (DOM migration), same-origin Iframe Proxy (canvas drawing), cross-origin Iframe Relay (ImageBitmap buffers over postMessage), and DRM Fallback overlays.",
          description_ja: "Direct PiP、同一オリジンIframeプロキシ、クロスオリジンIframeリレー、DRMフォールバックオーバーレイを備えた優先順位付きパイプライン。"
        },
        {
          tech: "SyncManager Layer",
          description: "A cross-frame event bus built on chrome.storage.session that syncs play, pause, seek, and volume changes immediately without heavy messaging overhead.",
          description_ja: "再生、一時停止、シーク、音量変更を即座に同期するイベントバス。"
        },
        {
          tech: "BFS Discovery Engine",
          description: "A custom Breadth-First-Search scanner that traverses frame boundaries and Shadow DOMs to find and lock onto active video elements.",
          description_ja: "フレーム境界やShadow DOMを走査してアクティブな動画要素をロックオンするカスタム幅優先探索スキャナー。"
        },
        {
          tech: "Cinematic Terminal UI",
          description: "A dark theme using glassmorphism backgrounds (backdrop-filter: blur(20px)) with neon accents, monospace typography, terminal-style audio visualizers, and customized subtitles.",
          description_ja: "ネオンアクセント、等幅フォント、ターミナル風オーディオビジュアライザーを備えたダークグラスモーフィズムUI。"
        }
      ],
      keyFeatures: [
        "📺 Universal video extraction using Document Picture-in-Picture to bypass standard webpage container restrictions.",
        "⛓️ Multi-tiered Capture Chain that handles direct, proxy, relay, and DRM-protected media contexts.",
        "⚡ Cross-frame SyncManager ensuring instant playback and volume synchronization across nested frames.",
        "🔍 Shadow DOM-aware BFS scanner to locate and bind to active and visible video elements.",
        "🎨 Dark glassmorphism UI with neon terminal vibes and monospace console styling.",
        "🎵 Shared AudioContext background visualizer streaming real-time frequency data in retro terminal-style graphs.",
        "📝 Animated subtitle rendering supporting standard TextTracks and platforms like YouTube layout."
      ],
      keyFeatures_ja: [
        "📺 Document Picture-in-Picture を使用してWebページのコンテナ制限を回避する汎用動画抽出。",
        "⛓️ 直接、プロキシ、リレー、DRM保護メディアコンテキストを処理するマルチティアキャプチャチェーン。",
        "⚡ フレームを超えて再生と音量を即座に同期する SyncManager。",
        "🔍 アクティブで表示されている動画要素を検出して結合する Shadow DOM 対応 BFS スキャナー。",
        "🎨 ネオンターミナルテイストと等幅コンソールスタイリングを備えたダークグラスモーフィズム UI。",
        "🎵 レトロなターミナルスタイルのグラフで周波数データをリアルタイム表示するオーディオビジュアライザー。",
        "📝 標準の TextTracks や YouTube レイアウトをサポートするアニメーション字幕レンダリング。"
      ]
    }
  }
];

