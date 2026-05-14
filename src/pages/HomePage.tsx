import { Hero } from '../components/Hero';
import { Projects } from '../components/Projects';
import { RecentActivity } from '../components/RecentActivity';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-start gap-12 w-full pt-8 sm:pt-14 lg:pt-16 pb-20 sm:pb-32">
      <Hero />
      <Projects />
      <RecentActivity />
    </main>
  );
}
