import React, { useEffect, useRef, useState } from "react";
import Warning from './Warning';
import Viewer from './Viewer';
import { validateConfig } from './Config';

function checkResponse(response, theme) {
  if (!response.ok) {
    console.log(response)
    return Promise.resolve(
      () => (
        <Warning
          title="Error"
          message="Unable to fetch config file"
          theme={theme}
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
          theme={theme}
        />
      ));
    } catch (e) {
      console.log(e)
      return Promise.resolve(() => (
        <Warning
          title="Error"
          message="Unable to parse config file"
          theme={theme}
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

function App(props) {
  const {
    theme,
  } = props;
  const urlParams = new URLSearchParams(window.location.search);
  const configUrl = urlParams.get('config');
  const config = validateConfig(configUrl)
  const responsePromise = fetch(config)
    .then(response => checkResponse(response, theme))
    .catch(error => Promise.resolve(() => (
      <Warning
        title="Error"
        message="Unable to fetch config file"
        theme={theme}
      />
    )));
  return (
    <AwaitResponse response={responsePromise} />
  );

}

export default App;
