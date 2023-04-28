import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

if (process.env.REACT_APP_SENTRY_DSN) {
  Sentry.init({
    dsn: process.env.REACT_APP_SENTRY_DSN,
    integrations: [new BrowserTracing()],
    environment: process.env.NODE_ENV,
    tracesSampleRate: 1.0,
  });
}

const urlParams = new URLSearchParams(window.location.search);
const themeParam = urlParams.get('theme');
const themes = ["dark", "light"];
const theme = themes.includes(themeParam) ? themeParam : "dark";
const ThemeLight = React.lazy(() => import('./themes/Light'));
const ThemeDark = React.lazy(() => import('./themes/Dark'));
const ThemeSelector = ({ children }) => {
  return (
    <>
      <React.Suspense fallback={<></>}>
        {(theme === "dark") && <ThemeDark />}
        {(theme === "light") && <ThemeLight />}
      </React.Suspense>
      {children}
    </>
  )
}

ReactDOM.render(
  <ThemeSelector>
    <App theme={theme} />
  </ThemeSelector>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
