import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    This might be helpful: <a href="https://create-react-app.dev/docs/adding-typescript/#getting-started-with-typescript-and-react">https://create-react-app.dev/docs/adding-typescript/#getting-started-with-typescript-and-react</a>
    <hr/>
    I dunno, do we put a footer here or in <code>App</code>?
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
