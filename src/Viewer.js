import { useEffect, useRef, useLayoutEffect, useState } from "react";
import Header from './Header';
import { Vitessce } from "vitessce/dist/umd/production/index.min.js";
import "vitessce/dist/umd/production/static/css/index.css";

export default function Viewer(props) {
  const {
    config,
    theme
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

  let title;
  if (typeof config === 'object' && config.hasOwnProperty('name')) {
    title = config.name;
  } else {
    title = "";
  }
  useEffect(() => {
    document.title = title;
  });

  return (
    <div className="App">
      <Header title={title} theme={theme} />
      <div ref={targetRef} style={{ height: 'calc(100vh - 56px)' }}>
        <Vitessce config={config} height={dimensions.height} theme={theme} />
      </div>
    </div>
  );
}
