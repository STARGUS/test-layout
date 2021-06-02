import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import Content from "./Component/content/content";

ReactDOM.render(
  <React.StrictMode>
      <App />
      <Content />
  </React.StrictMode>,
  document.getElementById('root')
);
