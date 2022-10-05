import React, { useEffect, useRef, useState } from "react";
import Warning from './Warning';
import Viewer from './Viewer';
import { validateConfig } from './Config';

import './App.css';

function checkResponse(response) {
  if (!response.ok) {
    return Promise.resolve(
      () => (
        <Warning
          message="Error fetching config"
        />
      ),
    );
  }
  return response.text().then((text) => {
    try {
      const config = JSON.parse(text);
      if (!config.version) {
        // @TODO add version property if it's missing
        // https://github.com/vitessce/vitessce/blob/7e08d6b26c8aa2724fe3b684480fa8da930aad16/src/app/Vitessce.js#L69
        config.version = "X.Y.Z";
      }
      return Promise.resolve(() => (
        <Viewer
          config={config}
        />
      ));
    } catch (e) {
      return Promise.resolve(() => (
        <Warning
          message="Error parsing config"
        />
      ));
    }
  });
}

function AwaitResponse(props) {
  const {
    response,
  } = props;
  const [isLoading, setIsLoading] = useState(true);
  const responseRef = useRef();
  useEffect(() => {
    response.then((c) => {
      responseRef.current = c;
      setIsLoading(false);
    });
  }, [response]);
  return (!isLoading ? React.createElement(responseRef.current) : <Warning message="Loading..." />);
}

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const configUrl = urlParams.get('config');
  const config = validateConfig(configUrl)
  const responsePromise = fetch(config)
    .then(response => checkResponse(response))
    .catch(error => Promise.resolve(() => (
      <Warning
        message="Error fetching config"
      />
    )));
  return (
    <AwaitResponse response={responsePromise} />
  );

}

export default App;
