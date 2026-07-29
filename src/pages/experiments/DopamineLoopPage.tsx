import React from 'react';
import { ExperimentLayout } from '../../components/layout/ExperimentLayout';
import { DopamineLoopVisualizer } from '../../components/experiment/DopamineLoopVisualizer';
import { EXPERIMENTS } from '../../data/experiments';

export const DopamineLoopPage: React.FC = () => {
  const experiment = EXPERIMENTS.find((e) => e.slug === 'dopamine-loop')!;

  return (
    <ExperimentLayout experiment={experiment}>
      <DopamineLoopVisualizer />
    </ExperimentLayout>
  );
};
