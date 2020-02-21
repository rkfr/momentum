import React from 'react';
import './App.scss';

import Weather from './components/Weather';
import TodoApp from './components/TodoApp';
import Links from './components/Links';

const App = () => (
  <div className="App">

    <Links />
    <Weather />
    <TodoApp />
  </div>
);

export default App;
