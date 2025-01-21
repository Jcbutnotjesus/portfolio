import React from 'react';
import './App.scss';
import Header from './components/header/header';
import Carousel from './components/carrousel/carousel';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div className="main-content">
        <div className="left-section">
          <div className="large-block">Grand Bloc</div>
        </div>
        <div className="right-section">
          <div className="rectangle">Rectangle 1</div>
          <div className="rectangle">Rectangle 2</div>
          <div className="rectangle">Rectangle 3</div>
          <div className="rectangle">Rectangle 4</div>
        </div>
      </div>
      <div className="carousel-container">
        <Carousel />
      </div>
    </div>
  );
};

export default App;
