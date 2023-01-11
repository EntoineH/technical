import './App.css';
import './Error.js';
import './Validate.js';
import Camera from './Camera';
import FlashMessage from './Error.js';
import ValidateMessage from './Validate.js';

function App() {
  
  return (
    <div class="flex h-screen">
      <div style={{
          width: '639px',
          height: '479px',
        }} class="justify-content-center m-auto w-2/4 h-3/4 border-2 border-sky-500">
        <FlashMessage />
        <Camera ></Camera>
        <div>
        </div>
      </div>
    </div>
  );
}

export default App;
