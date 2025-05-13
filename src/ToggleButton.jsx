import { useState } from 'react';

function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
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
    </div>
  );
}

export default ToggleButton;