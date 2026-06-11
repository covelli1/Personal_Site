import './App.css';

import Header from './Components/Header';
import Body from './Components/Body';


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
    greeting = "Hope you're having a great spring!"

  } else if (season === "summer") {
    season_back = "bg-summer-pattern"
    greeting = "Hope you're having a great summer!"

  } else if (season === "winter") {
    season_back = "bg-winter-pattern"
    greeting = "Hope you're having a great winter!"

  } else if (season === "fall") {
    season_back = "bg-fall-pattern"
    greeting = "Hope you're having a great fall!"

  }


  return (
    <div className={`${season_back} flex flex-col min-h-screen bg-cover overflow-x-hidden`}>
      <Header/>
      <Body greeting = {greeting}/>
    </div>
  );
}

export default App;
