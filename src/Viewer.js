import { useRef, useLayoutEffect, useState } from "react";
import { Vitessce } from "vitessce/dist/umd/production/index.min.js";
import "vitessce/dist/umd/production/static/css/index.css";

export default function Viewer(props) {
  const {
    config
  } = props;
  const targetRef = useRef();
  const [dimensions, setDimensions] = useState({ width:0, height: 0 });

  useLayoutEffect(() => {
    if (targetRef.current) {
      setDimensions({
        width: targetRef.current.offsetWidth,
        height: targetRef.current.offsetHeight
      });
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Spatial Web App
        </p>
      </header>
      <div ref={targetRef} style={{height:'calc(100vh - 100px)'}}>
        <Vitessce config={config} height={dimensions.height} theme="dark" />
      </div>
    </div>
  );
}
