import logo from './logo.svg';
import './App.css';

import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import { useEffect } from 'react';


function App() {

  const seasons = {
    "spring": [3, 4, 5],
    "summer": [6, 7, 8],
    "fall": [9, 10, 11],
    "winter": [12, 1, 2],
  }

  const current = new Date();
  let month = current.getMonth() + 1
 

  let season = null

  let season_back = null;
  let greeting = null;

  for(var key in seasons) {

    if(seasons[key].includes(month)) {
      season = key
    }
  }


  if(season === "spring") {
    season_back = "bg-spring-pattern"
    greeting = "HOPE YOU\'RE HAVING A GREAT SPRING!"

  } else if (season === "summer") {
    season_back = "bg-summer-pattern"
    greeting = "HOPE YOU\'RE HAVING A GREAT SUMMER!"

  } else if (season === "winter") {
    season_back = "bg-winter-pattern"
    greeting = "HOPE YOU\'RE HAVING A GREAT WINTER!"

  } else if (season === "fall") {
    season_back = "bg-fall-pattern"
    greeting = "HOPE YOU\'RE HAVING A GREAT FALL!"

  }


  return (
    <div className={`${season_back} flex flex-col min-h-screen bg-cover overflow-x-hidden`}>
      <Header/>
      <Body greeting = {greeting}/>
    </div>
  );
}

export default App;
