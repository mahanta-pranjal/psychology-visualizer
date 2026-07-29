import React from 'react';
import { ExperimentLayout } from '../../components/layout/ExperimentLayout';
import { GalateaVisualizer } from '../../components/experiment/GalateaVisualizer';
import { EXPERIMENTS } from '../../data/experiments';

export const GalateaPage: React.FC = () => {
  const experiment = EXPERIMENTS.find((e) => e.slug === 'galatea')!;

  return (
    <ExperimentLayout experiment={experiment}>
      <GalateaVisualizer />
    </ExperimentLayout>
  );
};
