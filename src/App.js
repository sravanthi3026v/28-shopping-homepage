import React, { useState } from 'react';
import './style.css';
import Navbar from './navbar.js';
import Header from './header.js';
import Section from './section.js';
import Footer from './footer.js';

export default function App() {
  const [itemcount, setItemcount] = useState(0);
  const handleIncrement = () => {
    setItemcount(itemcount + 1);
  };
  const handleDecrement = () => {
    setItemcount(itemcount - 1);
  };

  return (
    <div>
      <Navbar cartitem={itemcount} />
      <Header />
      <Section
        handleIncrease={() => handleIncrement()}
        handleDecrease={() => handleDecrement()}
      />
      <Footer />
    </div>
  );
}
