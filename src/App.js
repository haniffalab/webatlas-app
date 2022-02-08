import './App.css';

import { Vitessce } from "vitessce/dist/umd/production/index.min.js";
import ViewConfig from "./vitessceConfig.json";
import "vitessce/dist/umd/production/static/css/index.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Spatial Web App
        </p>
      </header>
      <Vitessce config={ViewConfig} height={1000} theme="dark" />
    </div>
  );
}

export default App;
