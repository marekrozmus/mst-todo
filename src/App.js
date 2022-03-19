import './App.css';

import AppView from './AppView';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://mobx-state-tree.js.org/intro/getting-started"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn MST (MobX-state-tree)
        </a>
        <AppView store={props.store} />
      </header>
    </div>
  );
}

export default App;
