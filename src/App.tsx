import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Brands from './components/Brands';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative w-full flex flex-col min-h-screen" id="main-content">
      <Navbar />
      <main className="flex-grow">
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