import Image from 'next/image'
import styles from './page.module.css'
import Hero from './components/Hero';
import About from './components/about';
import Dish from './components/Dish';

export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Dish/>
    </main>
  );
}
