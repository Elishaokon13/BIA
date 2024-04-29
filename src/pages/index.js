import Navbar from '@/components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Tabs from '../components/Vision';

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <Hero />
      <About />
      <Tabs />
    </div>
  );
}