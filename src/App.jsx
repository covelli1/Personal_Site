import Header from './Components/Header';
import Body from './Components/Body';
import ParticleBackground from './Components/ParticleBackground';

function App() {
  return (
    <div className="min-h-screen bg-navy text-white overflow-x-hidden">
      <ParticleBackground />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <Body />
      </div>
    </div>
  );
}

export default App;
