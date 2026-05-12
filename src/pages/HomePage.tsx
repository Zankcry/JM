import { Hero } from '../components/Hero';
import { Projects } from '../components/Projects';
import { BentoProfile } from '../components/BentoProfile';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-start gap-10 w-full">
      <Hero />
      <Projects />
      <BentoProfile />
    </main>
  );
}
