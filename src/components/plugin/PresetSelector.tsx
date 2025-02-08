
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const PRESETS = ["Default", "Warm Bass", "Bright Lead", "Ambient Pad"];

export const PresetSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Default");

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-plugin-surface backdrop-blur-md border border-plugin-accent/20 text-white/80 hover:bg-plugin-surface/80 transition-colors"
      >
        {selected}
        <ChevronDown size={16} className="text-plugin-accent" />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-full bg-plugin-surface backdrop-blur-md border border-plugin-accent/20 rounded-lg overflow-hidden">
          {PRESETS.map((preset) => (
            <button
              key={preset}
              onClick={() => {
                setSelected(preset);
                setIsOpen(false);
              }}
              className="w-full px-4 py-2 text-left text-white/80 hover:bg-plugin-accent/20 transition-colors"
            >
              {preset}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
