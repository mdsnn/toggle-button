import { useState } from 'react';


function ToggleButton() {
  const [isOn, setIsOn] = useState(false);
  const [toggleCount, setToggleCount] = useState(0);

  const handleToggle = () => {
    setIsOn(!isOn);
    setToggleCount(toggleCount + 1);
  };

  return (
    <div>
      <h1>Toggle Button</h1>
      <button
        onClick={handleToggle}
        className={isOn ? 'on' : 'off'}
      >
        {isOn ? 'On' : 'Off'}
      </button>
      <p>State: {isOn ? 'On' : 'Off'}</p>
      <p>Toggles: {toggleCount}</p>
    </div>
  );
}

export default ToggleButton;