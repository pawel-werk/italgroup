import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Brands from './components/Brands';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative w-full" id="main-content">
      <Navbar />
      <main>
        <Hero />
        <Brands />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;