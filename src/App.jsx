import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import Resume from './components/resume';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
