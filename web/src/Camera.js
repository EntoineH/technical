import React, { useState, useEffect } from 'react';

function Camera() {
  const [stream, setStream] = useState(null);

  useEffect(() => {
    const handleSuccess = (stream) => {
        setStream(stream);
        const video = document.querySelector('video');
        video.srcObject = stream;
    };

    const handleError = (error) => {
      console.log('Error: ', error);
    };

    navigator.mediaDevices.getUserMedia({ video: true })
      .then(handleSuccess)
      .catch(handleError);
  }, []);

  return (
    <div>
      <video autoPlay playsInline></video>
    </div>
  );
}

export default Camera;