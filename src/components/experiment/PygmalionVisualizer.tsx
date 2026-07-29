import React, { useState } from 'react';
import { Star, Heart, Lightbulb, Trophy } from 'lucide-react';
import { StageChain } from './StageChain';
import { clamp, Stage } from '../../utils/experimentUtils';

export const PygmalionVisualizer: React.FC = () => {
  const [expectation, setExpectation] = useState<number>(50);

  // 0.88 per step — slightly softer than Galatea's 0.9, reflecting that
  // external expectation is an indirect force (mediated through the teacher's
  // changed behaviour before reaching the student).
  const support           = clamp(expectation       * 0.88);
  const studentConfidence = clamp(support            * 0.88);
  const performance       = clamp(studentConfidence  * 0.88);

  const stages: Stage[] = [
    { id: 'expectation',        label: 'Expectation',        value: expectation,        icon: Star,      isEndpoint: true  },
    { id: 'support',            label: 'Support & Feedback', value: support,            icon: Heart,     isEndpoint: false },
    { id: 'student-confidence', label: 'Student Confidence', value: studentConfidence,  icon: Lightbulb, isEndpoint: false },
    { id: 'performance',        label: 'Performance',        value: performance,        icon: Trophy,    isEndpoint: true  },
  ];

  return (
    <StageChain
      sliderLabel="Expectation Level"
      sliderId="expectation-slider"
      sliderValue={expectation}
      onSliderChange={setExpectation}
      stages={stages}
      footerNote="Higher expectations from others ripple through each stage"
    />
  );
};
