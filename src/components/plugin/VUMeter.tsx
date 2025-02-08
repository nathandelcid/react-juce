
import { useEffect, useRef } from "react";

interface VUMeterProps {
  value: number;
  className?: string;
}

export const VUMeter = ({ value, className }: VUMeterProps) => {
  const meterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (meterRef.current) {
      meterRef.current.style.height = `${value}%`;
    }
  }, [value]);

  return (
    <div className="w-4 h-32 bg-plugin-surface rounded-full overflow-hidden backdrop-blur-md border border-plugin-accent/20">
      <div
        ref={meterRef}
        className="w-full bg-plugin-accent transition-all duration-100 ease-out rounded-full"
        style={{ height: "0%" }}
      />
    </div>
  );
};
