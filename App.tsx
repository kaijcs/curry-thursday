import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Schedule from './components/Schedule';
import Voices from './components/Voices';
import Contact from './components/Contact';
import FloatingIngredients from './components/FloatingIngredients';

function App() {
  return (
    <div className="relative min-h-screen bg-curry-cream selection:bg-curry-orange selection:text-white">
      <FloatingIngredients />
      <Navbar />
      
      <main className="relative z-10 flex flex-col gap-0 md:gap-12">
        <Hero />
        <About />
        <Schedule />
        <Voices />
        <Contact />
      </main>
    </div>
  );
}

export default App;
