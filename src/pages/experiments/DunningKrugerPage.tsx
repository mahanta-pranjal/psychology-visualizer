import React from 'react';
import { ExperimentLayout } from '../../components/layout/ExperimentLayout';
import { DunningKrugerVisualizer } from '../../components/experiment/DunningKrugerVisualizer';
import { EXPERIMENTS } from '../../data/experiments';

export const DunningKrugerPage: React.FC = () => {
  const experiment = EXPERIMENTS.find((e) => e.slug === 'dunning-kruger')!;

  return (
    <ExperimentLayout experiment={experiment}>
      <DunningKrugerVisualizer />
    </ExperimentLayout>
  );
};
