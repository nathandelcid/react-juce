
import { useState, useEffect } from "react";
import { Knob } from "@/components/plugin/Knob";
import { VUMeter } from "@/components/plugin/VUMeter";
import { PresetSelector } from "@/components/plugin/PresetSelector";

const Index = () => {
  const [gain, setGain] = useState(50);
  const [freq, setFreq] = useState(440);
  const [res, setRes] = useState(0);
  const [meterValue, setMeterValue] = useState(60);

  // Simulate meter movement
  useEffect(() => {
    const interval = setInterval(() => {
      setMeterValue(Math.random() * 100);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-plugin-bg p-8">
      <div className="w-full max-w-3xl bg-plugin-surface/30 backdrop-blur-xl rounded-xl border border-white/10 p-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-semibold text-white">JUCE Harmony</h1>
          <PresetSelector />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center gap-6">
            <Knob
              value={gain}
              onChange={setGain}
              min={0}
              max={100}
              label="Gain"
            />
            <VUMeter value={meterValue} />
          </div>
          
          <div className="flex flex-col items-center gap-6">
            <Knob
              value={freq}
              onChange={setFreq}
              min={20}
              max={20000}
              label="Frequency"
            />
            <div className="text-sm text-white/60 font-mono">
              {freq.toFixed(1)} Hz
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-6">
            <Knob
              value={res}
              onChange={setRes}
              min={0}
              max={100}
              label="Resonance"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
