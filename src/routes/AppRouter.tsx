import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from '../components/layout/MainLayout';
import { HomePage } from '../pages/HomePage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { GalateaPage } from '../pages/experiments/GalateaPage';
import { PygmalionPage } from '../pages/experiments/PygmalionPage';
import { ConfirmationBiasPage } from '../pages/experiments/ConfirmationBiasPage';
import { AnchoringBiasPage } from '../pages/experiments/AnchoringBiasPage';
import { LossAversionPage } from '../pages/experiments/LossAversionPage';
import { FlowStatePage } from '../pages/experiments/FlowStatePage';
import { HabitLoopPage } from '../pages/experiments/HabitLoopPage';
import { DopamineLoopPage } from '../pages/experiments/DopamineLoopPage';
import { CompoundEffectPage } from '../pages/experiments/CompoundEffectPage';
import { DunningKrugerPage } from '../pages/experiments/DunningKrugerPage';

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="galatea" element={<GalateaPage />} />
          <Route path="pygmalion" element={<PygmalionPage />} />
          <Route path="confirmation-bias" element={<ConfirmationBiasPage />} />
          <Route path="anchoring-bias" element={<AnchoringBiasPage />} />
          <Route path="loss-aversion" element={<LossAversionPage />} />
          <Route path="flow-state" element={<FlowStatePage />} />
          <Route path="habit-loop" element={<HabitLoopPage />} />
          <Route path="dopamine-loop" element={<DopamineLoopPage />} />
          <Route path="compound-effect" element={<CompoundEffectPage />} />
          <Route path="dunning-kruger" element={<DunningKrugerPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
