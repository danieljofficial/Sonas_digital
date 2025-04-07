import { useState } from "react";
type ToggleSize = "small" | "medium" | "large";

interface SwitchTypes {
  isEnabled: boolean;
  setIsEnabled: (newState: boolean) => void;
  enabledColor?: string;
  disabledColor?: string;
  enabledKnobColor?: string;
  disabledKnobColor?: string;
  size?: ToggleSize;
}

const Switch: React.FC<SwitchTypes> = ({
  isEnabled,
  setIsEnabled,
  enabledColor = "bg-[#12B76A]",
  disabledColor = "bg-gray-200",
  enabledKnobColor = "bg-white",
  disabledKnobColor = "bg-gray-400",
  size = "medium",
}) => {
  // const [isEnabled, setIsEnabled] = useState(enabled);
  const toggleSizes: Record<
    ToggleSize,
    {
      width: string;
      height: string;
      knob: string;
      translate: string;
    }
  > = {
    small: {
      width: "w-10",
      height: "h-5",
      knob: "h-4 w-4",
      translate: "translate-x-4",
    },
    medium: {
      width: "w-12",
      height: "h-6",
      knob: "h-5 w-5",
      translate: "translate-x-5",
    },
    large: {
      width: "w-16",
      height: "h-8",
      knob: "h-7 w-7",
      translate: "translate-x-7",
    },
  };

  const DEFAULT_SIZE: ToggleSize = "medium";

  const sizeClass = toggleSizes[size] || toggleSizes[DEFAULT_SIZE];

  const toggleState = () => {
    // const newState = !isEnabled;
    // setIsEnabled(newState);
    // if (onChange) {
    //   onchange(newState);
    // }
    setIsEnabled(!isEnabled);
  };

  return (
    <button
      type="button"
      className={`${sizeClass.width} ${
        sizeClass.height
      } rounded-full relative focus:outline-none  transition-colors duration-200 ease-in-out ${
        isEnabled ? enabledColor : disabledColor
      }`}
      onClick={toggleState}
      aria-pressed={isEnabled}
    >
      <span
        className={`absolute top-1/2 -translate-y-1/2 left-1 ${
          isEnabled ? sizeClass.translate : "translate-x-0"
        } inline-block ${
          sizeClass.knob
        } rounded-full transform transition-transform duration-200 ease-in-out ${
          isEnabled ? enabledKnobColor : disabledKnobColor
        }`}
      />
    </button>
  );
};

export default Switch;
