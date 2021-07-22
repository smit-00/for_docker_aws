import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          "This one line here is the sole of this app huh ;-) m n m x"
          <br/>
        </p>
          <h5>Dockerfile ka working directory WORKDIR jo hoga wo docker-compose.yml me use hoga volumes mention karne ke lie</h5>
      </header>
    </div>
  );
}

export default App;
