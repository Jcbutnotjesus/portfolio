import React from 'react';
import './App.css';
import Header from './components/header/header';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
    </div>
  );
};

export default App;
