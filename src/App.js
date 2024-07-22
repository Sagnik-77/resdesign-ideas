import React from 'react';
import './App.css';  // Assuming you have some global styles

// Import images
import img1 from './img/1.png';
import img2 from './img/2.png';
import img3 from './img/3.png';
import img4 from './img/4.png';
import img5 from './img/5.png';
import img6 from './img/6.png';
import img7 from './img/7.png';
import img8 from './img/8.png';
import img9 from './img/9.png';
import img10 from './img/10.png';
import img11 from './img/11.png';
import img12 from './img/12.png';
import img13 from './img/13.png';
import img14 from './img/14.png';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14];

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#FFFFFF'}}>
      <header className="App-header">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} style={{ width: '80%', height: 'auto' }} />
        ))}
      </header>
    </div>
  );
}

export default App;
