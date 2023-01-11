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

// import React, { useState, useEffect } from 'react';

// function Camera() {
//   const [blob, setBlob] = useState(null);
//   const videoRef = useRef(null);
  
//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch('<your-api-gateway-endpoint>');
//       const blob = await response.blob();
//       setBlob(blob);
//     };
//     fetchData();
//   }, []);

//   useEffect(() => {
//     if (blob && videoRef.current) {
//       const objectUrl = URL.createObjectURL(blob);
//       videoRef.current.src = objectUrl;
//     }
//   }, [blob, videoRef]);
  
//   return (
//     <div>
//       <video autoPlay playsInline ref={videoRef}></video>
//     </div>
//   );
// }

// export default Camera;
