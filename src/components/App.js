import React,{useState} from 'react';
import '../stylesheets/App.css';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

function App() {

  const [myBots,setMyBots] = useState([]);

  function addMyBot(bot){
      const newBots = [...myBots,bot];
      setMyBots(()=>newBots);
  }

  return (
    <div className="container-75">
      <YourBotArmy
      myBots={myBots}
      addMyBot={addMyBot}
      />
      <BotCollection
      addMyBot={addMyBot}
      />
    </div>
  );
}

export default App;
