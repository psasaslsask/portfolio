import { useEffect, useState } from "react";

export default function SoundToggle() {
  const [soundEnabled, setSoundEnabled] = useState(
    localStorage.getItem("sound") === "on"
  );

  // Load click sound
  const clickSound = new Audio("/click.wav");
  clickSound.volume = 0.4;

  const toggleSound = () => {
    const newState = !soundEnabled;
    setSoundEnabled(newState);
    localStorage.setItem("sound", newState ? "on" : "off");

    if (newState) clickSound.play();
  };

  return (
    <button className="toggle-btn" onClick={toggleSound}>
      {soundEnabled ? "🔊" : "🔈"}
    </button>
  );
}
