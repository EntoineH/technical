import React, { useState, useEffect } from 'react';

function ValidateMessage() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div class ="flex" style={{
      backgroundColor: 'green',
      padding: '20px',
      color: 'white',
      display: 'block',
    }}>
      <p class="text-center text-2xl">TON GROS TETE</p>
    </div>
  );
}

export default ValidateMessage;
