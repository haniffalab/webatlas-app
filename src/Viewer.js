import { useEffect, useRef, useLayoutEffect, useState } from "react";
import { Vitessce } from "vitessce/dist/umd/production/index.min.js";
import "vitessce/dist/umd/production/static/css/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';

export default function Viewer(props) {
  const {
    config
  } = props;
  const targetRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (targetRef.current) {
      setDimensions({
        width: targetRef.current.offsetWidth,
        height: targetRef.current.offsetHeight
      });
    }
  }, []);

  useEffect(() => {
    if (config.hasOwnProperty('name')) {
      document.title = config.name;
    }
  });

  return (
    <div className="App">
      <Header title={config.name} />
      <div ref={targetRef} style={{ height: 'calc(100vh - 56px)' }}>
        <Vitessce config={config} height={dimensions.height} theme="dark" />
      </div>
    </div>
  );
}
