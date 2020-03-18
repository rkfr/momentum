import React from 'react';
import './App.scss';

// import Weather from './components/WeatherApp';
// import TodoApp from './components/TodoApp';
// import Links from './components/LinksApp';
// import Clock from './components/Clock';
import Name from './components/Name';
import Focus from './components/Focus';

const App = () => (
  <div className="App">

    {/* <Clock /> */}

    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    }}
    >
      <Name />
      <Focus />
    </div>
    {/* <Links /> */}
    {/* <Weather /> */}
    {/* <TodoApp /> */}
  </div>
);

export default App;
