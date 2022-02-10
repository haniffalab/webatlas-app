import React, { useEffect, useRef, useLayoutEffect, useState } from "react";
import Warning from './Warning';
import Viewer from './Viewer';
import DemoConfig from "./config/demo.json";

import './App.css';

function checkResponse(response, theme, debug) {
  if (!response.ok) {
    return Promise.resolve(
      () => (
        <Warning
          title="Fetch response not OK"
        />
      ),
    );
  }
  return response.text().then((text) => {
    try {
      const config = JSON.parse(text);
      return Promise.resolve(() => (
        <Viewer
          config={config}
        />
      ));
    } catch (e) {
      return Promise.resolve(() => (
        <Warning
          title="Error parsing JSON"
        />
      ));
    }
  });
}

function AwaitResponse(props) {
  const {
    response,
    theme,
  } = props;
  const [isLoading, setIsLoading] = useState(true);
  const responseRef = useRef();
  useEffect(() => {
    response.then((c) => {
      responseRef.current = c;
      setIsLoading(false);
    });
  }, [response]);
  return (!isLoading ? React.createElement(responseRef.current) : <Warning title="Loading..." />);
}

function App() {
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

  const urlParams = new URLSearchParams(window.location.search);
  const configUrl = urlParams.get('config');

  if (configUrl) {
    const responsePromise = fetch(configUrl)
      .then(response => checkResponse(response))
      .catch(error => Promise.resolve(() => (
        <Warning
          title="Error fetching"
        />
      )));
    return (
      <AwaitResponse response={responsePromise} />
    );
  }
  
  return (
    <Viewer
      config={DemoConfig}
    />
  );
}

export default App;
