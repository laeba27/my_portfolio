import CosmicBackground from './components/CosmicBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative text-white overflow-x-hidden min-h-screen">
      <CosmicBackground />
      <Navbar />

      <div className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
