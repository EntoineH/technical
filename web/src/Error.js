import React, { useState, useEffect } from 'react';
import "./App.js"

function FlashMessage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(prevIsVisible => !prevIsVisible);
    }, 1000);
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div class ="flex" style={{
      backgroundColor: isVisible ? 'red': 'white',
      padding: '20px',
      color: 'white',
      display: 'block',
    }}>
      <p class="text-center text-2xl">UNKNOWN PERSON</p>
    </div>
  );
}

export default FlashMessage;
