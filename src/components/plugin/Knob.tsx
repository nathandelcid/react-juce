
import { useState } from "react";
import { cn } from "@/lib/utils";

interface KnobProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  label?: string;
  className?: string;
}

export const Knob = ({
  value,
  onChange,
  min = 0,
  max = 100,
  label,
  className,
}: KnobProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const rotation = ((value - min) / (max - min)) * 270;

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    const movementY = e.movementY;
    const newValue = value - (movementY * (max - min)) / 100;
    onChange(Math.max(min, Math.min(max, newValue)));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className={cn("flex flex-col items-center gap-2", className)}>
      <div
        className="w-16 h-16 rounded-full bg-plugin-surface backdrop-blur-md border border-plugin-accent/20 cursor-pointer relative"
        onMouseDown={handleMouseDown}
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: isDragging ? "none" : "transform 0.1s ease-out",
        }}
      >
        <div className="absolute top-2 left-1/2 w-0.5 h-3 bg-plugin-accent -translate-x-1/2" />
      </div>
      {label && (
        <span className="text-sm text-white/80 font-medium">{label}</span>
      )}
      <span className="text-xs text-white/60">{value.toFixed(1)}</span>
    </div>
  );
};
