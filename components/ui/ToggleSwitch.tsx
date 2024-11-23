import React from "react";

interface ToggleSwitchProps {
  isOn: boolean;
  handleToggle: () => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ isOn, handleToggle }) => {
  return (
    <div className="flex items-center pr-8">
      <span className="mr-2 text-sm">{isOn ? "Dark Mode" : "Light Mode"}</span>
      <div
        className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer bg-[var(--dark-mode-color-inverse)]`} 
        onClick={handleToggle}
      >
        <div
          className={`w-4 h-4 rounded-full shadow-md transform  ${
            isOn ? "translate-x-6 bg-[var(--dark-mode-color)]" : "translate-x-0 bg-white"
          } transition-transform duration-300 ease-in-out`}
        />
      </div>
    </div>
  );
};

export default ToggleSwitch;
