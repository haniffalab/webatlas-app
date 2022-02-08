import logo from './logo.svg';
import './App.css';

import { Vitessce } from "vitessce/dist/umd/production/index.min.js";
import ViewConfig from "./vitessceConfig.json";
import "vitessce/dist/umd/production/static/css/index.css";

function App() {
  return (
    <Vitessce config={ViewConfig} height={1000} theme="dark" />
  );
}

export default App;
