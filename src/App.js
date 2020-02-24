import React from 'react';
import './App.scss';

import Weather from './components/WeatherApp';
import TodoApp from './components/TodoApp';
import Links from './components/LinksApp';

const App = () => (
  <div className="App">

    <Links />
    <Weather />
    <TodoApp />
  </div>
);

export default App;
