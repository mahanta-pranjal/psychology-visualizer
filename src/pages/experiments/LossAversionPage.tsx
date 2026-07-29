import React from 'react';
import { ExperimentLayout } from '../../components/layout/ExperimentLayout';
import { LossAversionVisualizer } from '../../components/experiment/LossAversionVisualizer';
import { EXPERIMENTS } from '../../data/experiments';

export const LossAversionPage: React.FC = () => {
  const experiment = EXPERIMENTS.find((e) => e.slug === 'loss-aversion')!;

  return (
    <ExperimentLayout experiment={experiment}>
      <LossAversionVisualizer />
    </ExperimentLayout>
  );
};
