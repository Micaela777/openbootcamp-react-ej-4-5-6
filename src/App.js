import logo from './logo.svg';
import './App.css';
import Clock from './components/container/componenteClase';
import { ComponenteFuncion } from './components/container/componenteFuncion';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ComponenteFuncion></ComponenteFuncion>
      </header>
    </div>
  );
}

export default App;
