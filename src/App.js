import logo from './logo.svg';
import './App.css';
import Device from './components/Device/Device';
import { useEffect, useState } from 'react';

function App() {
  const [steps, setSteps] = useState(0);
  const handleIncreaseSteps = () => {
    const newSteps = steps + 1;
    setSteps(newSteps);
  }
  useEffect(() => {
    console.log(steps);
  },[steps])
  return (
    <div className="App">
      <h3>My Steps: {steps}</h3>
      <button onClick={handleIncreaseSteps}>Walk</button>
      <Device name="Phone" steps={steps} price="12"/>
    </div>
  );
}

export default App;
