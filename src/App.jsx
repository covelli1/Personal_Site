import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ParticleBackground from './Components/ParticleBackground';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-navy text-white overflow-x-hidden">
        <ParticleBackground />
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 pb-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
