import React from 'react';
import { ExperimentLayout } from '../../components/layout/ExperimentLayout';
import { HabitLoopVisualizer } from '../../components/experiment/HabitLoopVisualizer';
import { EXPERIMENTS } from '../../data/experiments';

export const HabitLoopPage: React.FC = () => {
  const experiment = EXPERIMENTS.find((e) => e.slug === 'habit-loop')!;

  return (
    <ExperimentLayout experiment={experiment}>
      <HabitLoopVisualizer />
    </ExperimentLayout>
  );
};
