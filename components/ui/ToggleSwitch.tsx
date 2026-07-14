import React from "react";
import { Sun, Moon } from "lucide-react";

interface ToggleSwitchProps {
  isOn: boolean;
  handleToggle: () => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ isOn, handleToggle }) => {
  return (
    <button
      onClick={handleToggle}
      className="flex items-center gap-2"
      aria-label={isOn ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isOn ? (
        <Moon size={16} className="text-muted-foreground" />
      ) : (
        <Sun size={16} className="text-muted-foreground" />
      )}
      <div
        className="w-11 h-6 flex items-center rounded-full p-1 cursor-pointer bg-[var(--dark-mode-color-inverse)]"
      >
        <div
          className={`w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
            isOn
              ? "translate-x-5 bg-[var(--dark-mode-color)]"
              : "translate-x-0 bg-white"
          }`}
        />
      </div>
    </button>
  );
};

export default ToggleSwitch;
