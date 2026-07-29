import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../common/Card';
import { BackButton } from '../common/BackButton';
import { SectionTitle } from '../common/SectionTitle';
import { Badge } from '../common/Badge';
import { Experiment } from '../../data/experiments';
import { HelpCircle, Briefcase, Lightbulb, Activity } from 'lucide-react';

interface ExperimentLayoutProps {
  experiment: Experiment;
  children: React.ReactNode;
}

export const ExperimentLayout: React.FC<ExperimentLayoutProps> = ({
  experiment,
  children,
}) => {
  const isReady = experiment.status === 'ready';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-8 max-w-4xl mx-auto pb-12"
    >
      {/* Top Navigation */}
      <div>
        <BackButton />
      </div>

      {/* Header Info */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Badge variant={isReady ? 'blue' : 'slate'}>
            {isReady ? 'Interactive Experiment' : 'Coming Soon'}
          </Badge>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          {experiment.title}
        </h1>

        <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
          {experiment.oneLiner}
        </p>
      </div>

      {/* Interactive Demo Area */}
      <Card variant="default" className="p-6 sm:p-8 border-2 border-slate-200/90 shadow-sm">
        <SectionTitle icon={<Activity className="w-5 h-5" />}>
          Interactive Demo
        </SectionTitle>
        <div className="mt-4 bg-slate-50/80 rounded-2xl border border-slate-200/60 p-4 sm:p-6">
          {children}
        </div>
      </Card>

      {/* Educational Context Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* What Happened? */}
        <Card variant="default" className="space-y-2">
          <SectionTitle icon={<HelpCircle className="w-5 h-5" />}>
            What Happened?
          </SectionTitle>
          <div className="space-y-2">
            {experiment.whatHappened.split('\n\n').map((para, i) => (
              <p key={i} className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </Card>

        {/* Real-Life Example */}
        <Card variant="default" className="space-y-2">
          <SectionTitle icon={<Briefcase className="w-5 h-5" />}>
            Real-Life Example
          </SectionTitle>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {experiment.realLifeExample}
          </p>
        </Card>
      </div>

      {/* Key Takeaway Banner */}
      <Card variant="flat" className="bg-blue-50/70 border-blue-100 p-6 space-y-2">
        <SectionTitle icon={<Lightbulb className="w-5 h-5 text-blue-600" />}>
          Key Takeaway
        </SectionTitle>
        <p className="text-xs sm:text-sm font-medium text-blue-950 leading-relaxed">
          {experiment.keyTakeaway}
        </p>
      </Card>

    </motion.div>
  );
};
