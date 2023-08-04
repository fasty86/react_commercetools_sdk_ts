import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // const getProject = () => {
  //   return apiRoot.get().execute();
  // };

  // Retrieve Project information and output the result to the log
  // getProject().then(console.log).catch(console.error);
  // (async function () {
  //   const test = await apiRoot.categories().get().execute();
  //   console.log(test.body);
  // })();
  // apiRoot.categories().get().execute().then(console.log);

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
        />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
