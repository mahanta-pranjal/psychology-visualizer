import React from 'react';
import { ExperimentLayout } from '../../components/layout/ExperimentLayout';
import { AnchoringBiasVisualizer } from '../../components/experiment/AnchoringBiasVisualizer';
import { EXPERIMENTS } from '../../data/experiments';

export const AnchoringBiasPage: React.FC = () => {
  const experiment = EXPERIMENTS.find((e) => e.slug === 'anchoring-bias')!;

  return (
    <ExperimentLayout experiment={experiment}>
      <AnchoringBiasVisualizer />
    </ExperimentLayout>
  );
};
