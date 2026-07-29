import React from 'react';
import { ExperimentLayout } from '../../components/layout/ExperimentLayout';
import { CompoundEffectVisualizer } from '../../components/experiment/CompoundEffectVisualizer';
import { EXPERIMENTS } from '../../data/experiments';

export const CompoundEffectPage: React.FC = () => {
  const experiment = EXPERIMENTS.find((e) => e.slug === 'compound-effect')!;

  return (
    <ExperimentLayout experiment={experiment}>
      <CompoundEffectVisualizer />
    </ExperimentLayout>
  );
};
