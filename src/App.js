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
  const urlParams = new URLSearchParams(window.location.search);
  const configUrl = urlParams.get('config');
  const config = validateConfig(configUrl)
  const responsePromise = fetch(config)
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

export default App;
