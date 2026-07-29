import React from 'react';
import { ExperimentLayout } from '../../components/layout/ExperimentLayout';
import { FlowStateVisualizer } from '../../components/experiment/FlowStateVisualizer';
import { EXPERIMENTS } from '../../data/experiments';

export const FlowStatePage: React.FC = () => {
  const experiment = EXPERIMENTS.find((e) => e.slug === 'flow-state')!;

  return (
    <ExperimentLayout experiment={experiment}>
      <FlowStateVisualizer />
    </ExperimentLayout>
  );
};
