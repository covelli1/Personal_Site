import logo from './logo.svg';
import './App.css';

import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="flex flex-col bg-back-pattern min-h-screen bg-cover">
      <Header/>
      <Body/>
    </div>
  );
}

export default App;
