import React, { useState } from 'react';
import { Sparkles, Flame, Target, Trophy, RefreshCw } from 'lucide-react';
import { StageChain } from './StageChain';
import { clamp, Stage } from '../../utils/experimentUtils';

export const GalateaVisualizer: React.FC = () => {
  const [confidence, setConfidence] = useState<number>(50);

  const effort        = clamp(confidence  * 0.9);
  const practice      = clamp(effort      * 0.9);
  const performance   = clamp(practice    * 0.9);
  const newConfidence = clamp(performance * 0.95);

  const stages: Stage[] = [
    { id: 'confidence',     label: 'Confidence',      value: confidence,     icon: Sparkles,   isEndpoint: true  },
    { id: 'effort',         label: 'Effort',           value: effort,         icon: Flame,      isEndpoint: false },
    { id: 'practice',       label: 'Practice',         value: practice,       icon: Target,     isEndpoint: false },
    { id: 'performance',    label: 'Performance',      value: performance,    icon: Trophy,     isEndpoint: false },
    { id: 'new-confidence', label: 'New Confidence',   value: newConfidence,  icon: RefreshCw,  isEndpoint: true  },
  ];

  return (
    <StageChain
      sliderLabel="Starting Confidence"
      sliderId="confidence-slider"
      sliderValue={confidence}
      onSliderChange={setConfidence}
      stages={stages}
      footerNote="New confidence feeds back into the next cycle ↑"
    />
  );
};
