import React from 'react';
import { ExperimentLayout } from '../../components/layout/ExperimentLayout';
import { ConfirmationBiasVisualizer } from '../../components/experiment/ConfirmationBiasVisualizer';
import { EXPERIMENTS } from '../../data/experiments';

export const ConfirmationBiasPage: React.FC = () => {
  const experiment = EXPERIMENTS.find((e) => e.slug === 'confirmation-bias')!;

  return (
    <ExperimentLayout experiment={experiment}>
      <ConfirmationBiasVisualizer />
    </ExperimentLayout>
  );
};
