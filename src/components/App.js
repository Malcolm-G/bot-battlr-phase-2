import logo from '../logo.svg';
import '../stylesheets/App.css';
import BotList from './BotList';
import MyList from './MyList';

function App() {
  return (
    <div className="container-75">
      <MyList />
      <BotList />
    </div>
  );
}

export default App;
