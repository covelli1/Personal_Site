import logo from './logo.svg';
import './App.css';

import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="bg-back-pattern h-screen bg-fit">
      <Header/>
      <Body/>
    </div>
  );
}

export default App;
