import logo from './logo.svg';
import './App.css';
import '@google/model-viewer';

function App() {
  return (
    <div className="App">
      <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <model-viewer bounds="tight" src="m-viewer\models\RobotExpressive.glb" ar ar-modes="webxr scene-viewer quick-look" camera-controls environment-image="neutral" poster="poster.webp" shadow-intensity="1" autoplay>
        </model-viewer>     
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
