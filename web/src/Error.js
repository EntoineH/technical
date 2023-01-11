import React, { useState, useEffect } from 'react';

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
      backgroundColor: 'red',
      padding: '20px',
      color: 'white',
      display: isVisible ? 'block' : 'none',
    }}>
      <p class="text-center text-2xl">UNKNOWN PERSON</p>
    </div>
  );
}

export default FlashMessage;
