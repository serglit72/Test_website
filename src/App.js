import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h2>
          Lets check your location and internet speed.
          </h2>
        </p>
        
        <a
          className="App-link"
          href="http://ip-api.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check your location
        </a>
        <p>

        </p>
        <a
          className="App-link"
          href="https://speedtest.net"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check your internet speed
        </a>
      </header>
    </div>
  );
}

export default App;
