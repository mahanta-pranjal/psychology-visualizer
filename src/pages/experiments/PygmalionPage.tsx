import React from 'react';
import { ExperimentLayout } from '../../components/layout/ExperimentLayout';
import { PygmalionVisualizer } from '../../components/experiment/PygmalionVisualizer';
import { EXPERIMENTS } from '../../data/experiments';

export const PygmalionPage: React.FC = () => {
  const experiment = EXPERIMENTS.find((e) => e.slug === 'pygmalion')!;

  return (
    <ExperimentLayout experiment={experiment}>
      <PygmalionVisualizer />
    </ExperimentLayout>
  );
};
