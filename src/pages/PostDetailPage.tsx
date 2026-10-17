import { useParams, Link } from 'react-router-dom';
import { IconArrowLeft, IconCalendar } from '@tabler/icons-react';
import { useLanguage } from '../context/LanguageContext';
import { posts, formatPostDate } from '../data/posts';

export default function PostDetailPage() {
  const { id } = useParams();
  const { t, language } = useLanguage();
  const post = posts.find((p) => p.id === id);

  // Validate the post ID
  if (!post || (id !== 'spine-2d-guide' && id !== 'why-i-built-simple-player')) {
    return (
      <div className="flex flex-col items-center gap-4 py-20">
        <h1 className="text-2xl font-bold text-theme-text">{language === 'ja' ? '記事が見つかりません' : 'Post not found'}</h1>
        <Link to="/posts" className="text-theme-accent hover:underline">{t('posts.back_to_posts', 'Back to all posts')}</Link>
      </div>
    );
  }

  const isSimplePlayer = id === 'why-i-built-simple-player';
  const postDate = formatPostDate(post.date, language);
  const postTags = (language === 'ja' && post.tags_ja) ? post.tags_ja : post.tags;

  return (
    <article className="mx-auto flex w-full max-w-3xl flex-col gap-12 pt-8 sm:pt-14 lg:pt-16 pb-20 sm:pb-32">
      {/* Navigation & Back Button */}
      <Link
        to="/posts"
        className="group flex items-center gap-2 text-sm font-medium text-theme-text-muted transition-colors hover:text-theme-accent"
      >
        <IconArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
        {t('posts.back_to_posts', 'Back to Posts')}
      </Link>

      {/* Hero Header */}
      <header className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-theme-accent">
            <IconCalendar size={14} />
            {postDate}
          </div>
          <h1 className="text-4xl font-black leading-[1.1] tracking-tighter text-theme-text sm:text-5xl lg:text-6xl">
            {isSimplePlayer ? (
              language === 'ja' ? (
                <>Simple Miniplayer <span className="text-theme-accent">拡張機能を作った理由</span></>
              ) : (
                <>Why I Created the <span className="text-theme-accent">Simple Miniplayer</span> Extension</>
              )
            ) : (
              language === 'ja' ? (
                <>モダンWebデザインにおける <span className="text-theme-accent">Spine 2D</span> の可能性</>
              ) : (
                <>The Power of <span className="text-theme-accent">Spine 2D</span> in Modern Web Design</>
              )
            )}
          </h1>
        </div>

        <div className="flex flex-wrap gap-2">
          {postTags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg border border-theme-accent/20 bg-theme-accent/5 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-theme-accent"
            >
              #{tag}
            </span>
          ))}
        </div>
      </header>

      {/* Decorative Line */}
      <div className="h-px w-full bg-gradient-to-r from-theme-accent/40 via-theme-accent/20 to-transparent" />

      {/* Structured Content */}
      <div className="flex flex-col gap-16 text-[17px] leading-relaxed text-theme-text-muted sm:text-[18px]">
        {isSimplePlayer ? (
          language === 'ja' ? (
            <>
              {/* Section 1: The Why */}
              <section className="flex flex-col gap-6">
                <h2 className="flex items-center gap-4 text-2xl font-bold tracking-tight text-theme-text">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-theme-accent/10 text-xs text-theme-accent">01</span>
                  アニメ視聴時の問題意識
                </h2>
                <p>
                  私はコーディングに多くの時間を費やしており、他の多くのデベロッパーと同様に、作業中にアニメやYouTube、韓国ドラマをバックグラウンドで視聴するのが好きです。しかし、標準のブラウザピクチャーインピクチャー（PiP）機能は非常にシンプルすぎます。
                </p>
                <p>
                  最大の問題は、<strong className="text-theme-text">ソフト読み込み字幕（YouTubeのレイアウトテキストなど）が完全に無視されること</strong>です。文字が元のタブに固定されたままで内容が理解できず困っていたため、自分専用のソリューションを自分で開発することにしました。
                </p>
                <div className="overflow-hidden rounded-xl border border-theme-accent/20 bg-theme-bg shadow-lg">
                  <img
                    src="/images/project6Preview_1.png"
                    alt="Simple Miniplayer 字幕表示画面"
                    className="w-full"
                  />
                </div>
                <div className="rounded-xl border border-theme-accent/20 bg-theme-bg p-4 italic text-theme-accent shadow-lg">
                  "どのWebサイトを閲覧していても、動画と一緒に字幕が追従するフローティングウィンドウが欲しかったのです。"
                </div>
              </section>

              {/* Section 2: Tailored Features */}
              <section className="flex flex-col gap-6">
                <h2 className="flex items-center gap-4 text-2xl font-bold tracking-tight text-theme-text">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-theme-accent/10 text-xs text-theme-accent">02</span>
                  音楽とレトロ美学へのこだわり
                </h2>
                <p>
                  タブから動画を切り離した後は、自分の視聴スタイルに合わせたツールを追加し始めました。ライブ配信やMVを観る際、静止画面のままでは退屈です。そこでAudioContextを背景に接続し、音の周波数に合わせてリアルタイムで跳ねる<strong className="text-theme-accent">ターミナルスタイルのオーディオビジュアライザー</strong>を構築しました。
                </p>
                <p>
                  さらにレトロな魅力を加えるため、昔のゲーム機画面を再現するカスタム<span className="font-semibold text-theme-text">CRT走査線（Scanline）フィルター</span>も搭載しています。
                </p>
                <div className="overflow-hidden rounded-xl border border-theme-accent/20 bg-theme-bg shadow-lg">
                  <img
                    src="/images/project6Preview_2.png"
                    alt="Simple Miniplayer UI プレビュー"
                    className="w-full"
                  />
                </div>
              </section>

              {/* Section 3: Reels, Shortcuts & Snapping */}
              <section className="flex flex-col gap-6">
                <h2 className="flex items-center gap-4 text-2xl font-bold tracking-tight text-theme-text">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-theme-accent/10 text-xs text-theme-accent">03</span>
                  リール動画、操作系、グリッド吸着
                </h2>
                <p>
                  Instagram ReelsやYouTube Shorts、Facebook Reelsも頻繁に閲覧します。標準のPiP機能はネストされたレイアウトで動作が破綻してしまいますが、Simple Miniplayerはこれらのコンテナを自動検知してレスポンシブな浮遊ターミナルへマッピングします。
                </p>
                <p>
                  また、主要な再生ツールも統合しました：
                </p>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="rounded-xl border border-theme-accent/20 bg-theme-bg p-4 shadow-lg">
                    <h3 className="mb-2 text-sm font-bold uppercase text-theme-accent">カスタムプレーヤーコントロール</h3>
                    <p className="text-xs leading-relaxed text-theme-text-muted">
                      早送り/巻き戻しシーク、カスタム音量スライダー、ループボタン（短尺リールやBGMループに最適）を標準装備。
                    </p>
                  </div>
                  <div className="rounded-xl border border-theme-accent/20 bg-theme-bg p-4 shadow-lg">
                    <h3 className="mb-2 text-sm font-bold uppercase text-theme-accent">邪魔にならないプログレス表示</h3>
                    <p className="text-xs leading-relaxed text-theme-text-muted">
                      UIがフェードアウトすると最下部にシンプルな進行バーが残り、画面を遮ることなく残り時間を把握できます。
                    </p>
                  </div>
                </div>
                <p>
                  作業領域を整頓するため、画面の四隅や中央へピクセル単位で吸着整列できる<strong className="text-theme-accent">グリッド吸着機能</strong>も開発しました。
                </p>
              </section>

              {/* Section 4: Chat Integration & Future */}
              <section className="flex flex-col gap-6">
                <h2 className="flex items-center gap-4 text-2xl font-bold tracking-tight text-theme-text">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-theme-accent/10 text-xs text-theme-accent">04</span>
                  ライブチャットと今後の展開
                </h2>
                <p>
                  ライブイベント用に、<span className="font-semibold text-theme-text">YouTubeおよびTwitchのライブチャット</span>を表示する軽量サイドパネルを埋め込みました。
                </p>
                <div className="overflow-hidden rounded-xl border border-theme-accent/20 bg-theme-bg shadow-lg">
                  <img
                    src="/images/project6Preview_4.png"
                    alt="ライブチャット表示画面"
                    className="w-full"
                  />
                </div>
                <p>
                  開発当初はChrome拡張機能の知識があまりありませんでしたが、JavaScriptの理解があったためコードを試行錯誤しながら理想の挙動を実現できました。
                </p>
                <p>
                  この拡張機能の制作を通じてShadow DOMやiframe通信の知見が深まりました。開発環境がとても快適になったので、皆様のお役にも立てば幸いです。ありがとうございます！👋❤️❤️
                </p>
              </section>
            </>
          ) : (
            <>
              {/* Section 1: The Why */}
              <section className="flex flex-col gap-6">
                <h2 className="flex items-center gap-4 text-2xl font-bold tracking-tight text-theme-text">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-theme-accent/10 text-xs text-theme-accent">01</span>
                  The Anime Problem
                </h2>
                <p>
                  I spend a lot of time coding, and like many developers, I enjoy watching anime, YouTube, or K-dramas in the background while doing tasks. But standard browser Picture-in-Picture windows are extremely basic.
                </p>
                <p>
                  Their biggest flaw is that <strong className="text-theme-text">they completely ignore soft-loaded subtitles</strong> (like YouTube's layout layers or custom text tracks). I was constantly stuck trying to watch shows I couldn't understand because the text remained pinned back on the original tab. So, I decided to vibe code my own solution.
                </p>
                <div className="overflow-hidden rounded-xl border border-theme-accent/20 bg-theme-bg shadow-lg">
                  <img
                    src="/images/project6Preview_1.png"
                    alt="Simple Miniplayer Active Subtitle View"
                    className="w-full"
                  />
                </div>
                <div className="rounded-xl border border-theme-accent/20 bg-theme-bg p-4 italic text-theme-accent shadow-lg">
                  "I just wanted a floating window that kept the subtitles moving with the video, no matter what site I was on."
                </div>
              </section>

              {/* Section 2: Tailored Features */}
              <section className="flex flex-col gap-6">
                <h2 className="flex items-center gap-4 text-2xl font-bold tracking-tight text-theme-text">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-theme-accent/10 text-xs text-theme-accent">02</span>
                  Building for Music & Nostalgia
                </h2>
                <p>
                  Once I got the video out of the tab, I started adding tools for my specific watching habits. When I'm watching concerts, live streams, or music videos, static screens are boring. I wired a shared AudioContext into the background to generate a custom <strong className="text-theme-accent">terminal-style audio visualizer</strong> that bounces live with the frequency.
                </p>
                <p>
                  For a nice touch of retro style, I added a custom <span className="font-semibold text-theme-text">CRT scanline filter</span> overlay that mimics retro console screens.
                </p>
                <div className="overflow-hidden rounded-xl border border-theme-accent/20 bg-theme-bg shadow-lg">
                  <img
                    src="/images/project6Preview_2.png"
                    alt="Simple Miniplayer UI Preview"
                    className="w-full"
                  />
                </div>
              </section>

              {/* Section 3: Reels, Shortcuts & Snapping */}
              <section className="flex flex-col gap-6">
                <h2 className="flex items-center gap-4 text-2xl font-bold tracking-tight text-theme-text">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-theme-accent/10 text-xs text-theme-accent">03</span>
                  Reels, Controls & Snapping
                </h2>
                <p>
                  I frequently browse Instagram Reels, YouTube Shorts, and Facebook Reels. Standard Picture-in-Picture engines completely break on scrollable nested frame layouts. Simple Miniplayer detects these containers and maps them to a responsive, floating terminal.
                </p>
                <p>
                  I also integrated key playback tools:
                </p>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="rounded-xl border border-theme-accent/20 bg-theme-bg p-4 shadow-lg">
                    <h3 className="mb-2 text-sm font-bold uppercase text-theme-accent">Custom Player Controls</h3>
                    <p className="text-xs leading-relaxed text-theme-text-muted">
                      Equipped with back/forward seeking, a custom volume slider, and a loop button (highly useful for looping short reels or music loops).
                    </p>
                  </div>
                  <div className="rounded-xl border border-theme-accent/20 bg-theme-bg p-4 shadow-lg">
                    <h3 className="mb-2 text-sm font-bold uppercase text-theme-accent">Non-Intrusive Progress</h3>
                    <p className="text-xs leading-relaxed text-theme-text-muted">
                      When the interface fades out, a clean progress line sits at the bottom edge, letting you track exactly how much time is left without blocking the screen.
                    </p>
                  </div>
                </div>
                <p>
                  To keep my workspace organized, I built a <strong className="text-theme-accent">snap-to-grid function</strong>. It lets you snap the miniplayer directly to screen corners, edges, or the exact center with pixel-perfect alignment.
                </p>
              </section>

              {/* Section 4: Chat Integration & Future */}
              <section className="flex flex-col gap-6">
                <h2 className="flex items-center gap-4 text-2xl font-bold tracking-tight text-theme-text">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-theme-accent/10 text-xs text-theme-accent">04</span>
                  Live Chat & Beyond
                </h2>
                <p>
                  For live events, the miniplayer embeds a lightweight side-panel for <span className="font-semibold text-theme-text">YouTube and Twitch Live Chats</span>. While it handles standard messages smoothly, it currently only supports text, but I plan to implement emoji support in the future.
                </p>
                <div className="overflow-hidden rounded-xl border border-theme-accent/20 bg-theme-bg shadow-lg">
                  <img
                    src="/images/project6Preview_4.png"
                    alt="Live Chat Console View"
                    className="w-full"
                  />
                </div>
                <p>
                  I didn't really know much about building Chrome extensions when I started, which is why I vibe coded it. But since I understand JavaScript well, I was pretty confident that I could jump in and modify the code as needed to get everything working exactly how I wanted.
                </p>
                <p>
                  Vibe coding this extension taught me a lot about shadow DOMs, iframe postMessage relays, and custom extension overlays. It has already made my coding sessions much more comfortable, and I hope it does the same for you! Arigatou Gozaimasu and Sayonara!👋❤️❤️
                </p>
              </section>
            </>
          )
        ) : (
          language === 'ja' ? (
            <>
              {/* Section 1 */}
              <section className="flex flex-col gap-6">
                <h2 className="flex items-center gap-4 text-2xl font-bold tracking-tight text-theme-text">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-theme-accent/10 text-xs text-theme-accent">01</span>
                  Spine 2Dとは？
                </h2>
                <p>
                  Spine 2Dは、ブラウザ上でネイティブに動作する<span className="font-semibold text-theme-text">インタラクティブなベクターアニメーション</span>を制作できる革新的なツールです。GIFやMP4動画とは異なり、Spineが書き出すシーンは完全な対話性を保持します。
                </p>
                <div className="rounded-xl border border-theme-accent/20 bg-theme-bg p-4 italic text-theme-accent shadow-lg">
                  "要素がカーソルを追従したり、クリックに反応したり、スクロール位置に応じて演出を変化させることができます。"
                </div>
              </section>

              {/* Section 2 */}
              <section className="flex flex-col gap-6">
                <h2 className="flex items-center gap-4 text-2xl font-bold tracking-tight text-theme-text">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-theme-accent/10 text-xs text-theme-accent">02</span>
                  なぜ選ばれるのか？
                </h2>
                <p>
                  Spine 2Dが活用される最大の理由は<strong className="text-theme-accent underline decoration-theme-accent/30 underline-offset-4">高いパフォーマンスとインタラクティブ性</strong>です。従来の動画形式と異なり、軽量なWebベクターデータで滑らかな動きを実現します。
                </p>
                <p>
                  <a href="https://www.zenlesszonezero.com" className="text-theme-accent">ゼンレスゾーンゼロ</a> の公式サイトなど、トップレベルのWebデザインでも活用されています。
                </p>

                <div className="overflow-hidden rounded-xl border border-theme-accent/20 bg-theme-bg shadow-lg">
                  <img
                    src="/videos/spine2d.webp"
                    alt="Spine 2D デモ"
                    className="w-full"
                  />
                </div>

                <div className="flex items-center gap-2 px-1 text-[11px] font-medium text-theme-text-muted/60">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-theme-accent/10 text-[10px] text-theme-accent">!</span>
                  注記: 上記の素材はゼンレスゾーンゼロ公式サイトより引用しています。
                </div>
              </section>

              {/* Section 3 */}
              <section className="flex flex-col gap-6">
                <h2 className="flex items-center gap-4 text-2xl font-bold tracking-tight text-theme-text">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-theme-accent/10 text-xs text-theme-accent">03</span>
                  Web開発との架け橋
                </h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="rounded-xl border border-theme-accent/20 bg-theme-bg p-4 shadow-lg">
                    <h3 className="mb-2 text-sm font-bold uppercase text-theme-accent">活用法</h3>
                    <p className="text-sm leading-relaxed">デザイナーが演出を作成し、エンジニアがReactコンポーネント経由で手軽に組み込めます。コードから状態制御も自在です。</p>
                  </div>
                  <div className="rounded-xl border border-theme-accent/20 bg-theme-bg p-4 shadow-lg">
                    <h3 className="mb-2 text-sm font-bold uppercase text-theme-accent">相乗効果</h3>
                    <p className="text-sm leading-relaxed">デザイナーの描いたアニメーション表現を、意図通り正確にWebサイト上に再現できます。</p>
                  </div>
                </div>
                <p><a href="https://www.youtube.com/@yuphi_kid" className="text-theme-accent">Yuphi</a> 氏によるSpine 2Dチュートリアル例：</p>

                <div className="overflow-hidden rounded-xl border border-theme-accent/20 bg-theme-bg shadow-lg">
                  <img
                    src="/videos/spine2d_2.webp"
                    alt="Spine 2D チュートリアル例"
                    className="w-full"
                  />
                </div>
              </section>

              {/* Section 4 */}
              <section className="flex flex-col gap-6">
                <h2 className="flex items-center gap-4 text-2xl font-bold tracking-tight text-theme-text">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-theme-accent/10 text-xs text-theme-accent">04</span>
                  まとめ
                </h2>
                <p>
                  Spine 2DはWebサイト上で躍動感あるインタラクティブアニメーションを実現する素晴らしいツールです。パフォーマンス面での利点も大きく、今後の自作プロジェクトでも活用していきたいと思います！
                </p>
                <p>
                  以上が私の考察です。最後までお読みいただきありがとうございました！👋❤️❤️
                </p>
              </section>
            </>
          ) : (
            <>
              {/* Section 1 */}
              <section className="flex flex-col gap-6">
                <h2 className="flex items-center gap-4 text-2xl font-bold tracking-tight text-theme-text">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-theme-accent/10 text-xs text-theme-accent">01</span>
                  What is Spine 2D?
                </h2>
                <p>
                  Spine 2D is a revolutionary tool that allows designers and developers to create <span className="font-semibold text-theme-text">interactive, vector-based animations</span> that run natively in the browser. Unlike traditional video formats like MP4 or static GIFs, Spine exports "scenes" that remain fully interactive.
                </p>
                <div className="rounded-xl border border-theme-accent/20 bg-theme-bg p-4 italic text-theme-accent shadow-lg">
                  "This means elements can follow the user's cursor, react to clicks, or change state based on scroll position."
                </div>
              </section>

              {/* Section 2 */}
              <section className="flex flex-col gap-6">
                <h2 className="flex items-center gap-4 text-2xl font-bold tracking-tight text-theme-text">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-theme-accent/10 text-xs text-theme-accent">02</span>
                  Why is it used?
                </h2>
                <p>
                  The primary reason Spine 2D is used is <strong className="text-theme-accent underline decoration-theme-accent/30 underline-offset-4">Performance and Interactivity</strong>. Traditional high-fidelity animations usually require heavy video files that slow down page loads.
                </p>
                <p>
                  Spine uses WebGL and small vector data, allowing for complex motion that is incredibly lightweight. It's used by top-tier brands to create a custom feel that static sites simply can't match.
                </p>
                <p>
                  Its very cool! Sites like <a href="https://www.zenlesszonezero.com" className="text-theme-accent">Zenlesszonezero </a> uses it for their website, take a look!
                </p>

                <div className="overflow-hidden rounded-xl border border-theme-accent/20 bg-theme-bg shadow-lg">
                  <img
                    src="/videos/spine2d.webp"
                    alt="Spine 2D Demonstration"
                    className="w-full"
                  />
                </div>

                <div className="flex items-center gap-2 px-1 text-[11px] font-medium text-theme-text-muted/60">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-theme-accent/10 text-[10px] text-theme-accent">!</span>
                  Note: All assets shown above are taken from the official Zenless Zone Zero website.
                </div>
              </section>

              {/* Section 3 */}
              <section className="flex flex-col gap-6">
                <h2 className="flex items-center gap-4 text-2xl font-bold tracking-tight text-theme-text">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-theme-accent/10 text-xs text-theme-accent">03</span>
                  The Bridge to Web Dev
                </h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="rounded-xl border border-theme-accent/20 bg-theme-bg p-4 shadow-lg">
                    <h3 className="mb-2 text-sm font-bold uppercase text-theme-accent">How it's used</h3>
                    <p className="text-sm leading-relaxed">Designers create the scene, and developers embed it using a simple React component. You can easily control states via code.</p>
                  </div>
                  <div className="rounded-xl border border-theme-accent/20 bg-theme-bg p-4 shadow-lg">
                    <h3 className="mb-2 text-sm font-bold uppercase text-theme-accent">The Complement</h3>
                    <p className="text-sm leading-relaxed">It allows the designer to build the motion and the developer to implement it exactly as intended.</p>
                  </div>
                </div>
                <p>Heres another Example! From <a href="https://www.youtube.com/@yuphi_kid" className="text-theme-accent">Yuphi</a> a youtuber showcasing and making tutorials about Spine2D</p>

                <div className="overflow-hidden rounded-xl border border-theme-accent/20 bg-theme-bg shadow-lg">
                  <img
                    src="/videos/spine2d_2.webp"
                    alt="Spine 2D Tutorial Example"
                    className="w-full"
                  />
                </div>
              </section>

              {/* Section 4 */}
              <section className="flex flex-col gap-6">
                <h2 className="flex items-center gap-4 text-2xl font-bold tracking-tight text-theme-text">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-theme-accent/10 text-xs text-theme-accent">04</span>
                  Final Thoughts
                </h2>
                <p>
                  Overall, I think Spine2d is a great tool for creating interactive animations that can be embedded in websites. It's easy to use and can be used to create a variety of different animations. Not to mention the performance benefits!
                </p>
                <p>
                  Its why im learning it and hope to use it in my future projects! Thats all about what i think of it so far. Arigatou Gozaimasu and Sayonara!👋❤️❤️
                </p>
              </section>
            </>
          )
        )}
      </div>

      {/* Footer */}
      <footer className="flex flex-col gap-8">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-theme-accent/40 to-transparent" />
        <p className="text-center text-sm font-medium text-theme-text-muted/60">
          {language === 'ja'
            ? '最後までお読みいただきありがとうございました！他の記事もぜひご覧いただくか、ホームへお戻りください。'
            : 'Thanks for reading! Check out my other posts or head back to the homepage.'}
        </p>
      </footer>
    </article>
  );
}
