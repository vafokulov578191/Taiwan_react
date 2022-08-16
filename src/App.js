import React from 'react';
import './App.css';
import Header from './Components/header/Header';
import Main from './Components/Main/Main';

let arr = [
  {
    id: 1,
    name: 'Robinhood is limiting purchases of stocks: AMC, Blackberry, Nokia and GameStop',
    buy: 'By Miner49er',
    date: '10 Dec 2017'
  },
  {
    id: 2,
    name: 'Show HN: A reto video game comsole live been working on in my free time',
    buy: 'By pkiller',
    date: '13 Mar 2019'
  },
  {
    id: 3,
    name: 'Show HN: Airmash - Multiplayer Missile Warfare HTML5 Game',
    buy: 'By fivesigma',
    date: '10 Dec 2017'
  },
  {
    id: 4,
    name: 'Lee Sedol Beats AplhaGo in Game 4',
    buy: 'By jswt001',
    date: '13 Dec 2016'
  },
  {
    id: 5,
    name: 'CityBound - An open source city simulation game in Rust',
    buy: 'By Miner49er',
    date: '11 May 2021'
  },
  {
    id: 6,
    name: 'Lee Sedol Beats AplhaGo in Game 4',
    buy: 'Game 10',
    date: '8 Feb 2022'
  }
]

function App() {
  return (
    <div className="App">
        <Header/>
        <div className="Blocks">
        {
          arr.map((item, index) => <Main key={index} item={ item} />)
        }
        </div>
    </div>
  );
}

export default App;