import React from 'react';
import { EXPERIMENTS } from '../data/experiments';
import { ExperimentCard } from '../components/common/ExperimentCard';
import { motion } from 'framer-motion';

export const HomePage: React.FC = () => {
  const readyCount = EXPERIMENTS.filter((e) => e.status === 'ready').length;
  const totalCount = EXPERIMENTS.length;

  return (
    <div className="space-y-8 pb-8">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-2 max-w-3xl"
      >
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Psychology <span className="text-blue-600">Visualizer</span>
        </h1>
        <p className="text-base sm:text-xl text-slate-600 font-medium leading-relaxed">
          Understand psychology through simple interactive experiments.
        </p>
        <p className="text-sm text-slate-400 font-medium">
          {readyCount} of {totalCount} experiments available
        </p>
      </motion.div>

      {/* Experiments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {EXPERIMENTS.map((experiment, index) => (
          <ExperimentCard
            key={experiment.id}
            experiment={experiment}
            index={index}
          />
        ))}
      </div>

    </div>
  );
};
