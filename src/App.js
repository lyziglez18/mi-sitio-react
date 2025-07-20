import logo from './logo.svg';
import './App.css';

function App() {
  return (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>¡Hola desde Netlify con despliegue continuo!</h1>
      <p>
        Este sitio React se actualiza automáticamente desde GitHub 🚀
      </p>
    </header>
  </div>
);

}

export default App;
