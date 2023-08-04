import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { apiRoot } from './sdk/Client';
// import reportWebVitals from './reportWebVitals';
(async function () {
  const categories = await apiRoot.categories().get().execute();
  // const apiClients = await apiRoot.apiClients().get().execute();
  const customers = await apiRoot.customers().get().execute();
  console.log(categories.body, customers.body);
})();
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
