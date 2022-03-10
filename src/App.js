import cherry from './cherry.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={cherry} className="App-logo" alt="logo" />
        <p>
          체루체루체루체루체루앵두앵두앵두앵두앵두@!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
