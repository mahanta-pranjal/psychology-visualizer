import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Users,
  Search,
  Anchor,
  TrendingDown,
  Zap,
  Repeat,
  Activity,
  TrendingUp,
  BarChart3,
  Brain,
  ArrowRight,
  Lock,
} from 'lucide-react';
import { Card } from './Card';
import { Button } from './Button';
import { Badge } from './Badge';
import { Experiment } from '../../data/experiments';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles,
  Users,
  Search,
  Anchor,
  TrendingDown,
  Zap,
  Repeat,
  Activity,
  TrendingUp,
  BarChart3,
  Brain,
};

interface ExperimentCardProps {
  experiment: Experiment;
  index?: number;
}

export const ExperimentCard: React.FC<ExperimentCardProps> = ({
  experiment,
  index = 0,
}) => {
  const IconComponent = ICON_MAP[experiment.icon] || Brain;
  const isReady = experiment.status === 'ready';

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: index * 0.04 }}
      whileHover={isReady ? { y: -2 } : undefined}
      className="h-full"
    >
      <Card
        variant={isReady ? 'interactive' : 'default'}
        className={`h-full flex flex-col justify-between transition-shadow duration-200 ${
          !isReady ? 'bg-slate-50/60' : ''
        }`}
      >
        {/* Top section: icon + badge */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center border ${
                isReady
                  ? 'bg-blue-50 border-blue-100 text-blue-600'
                  : 'bg-slate-100 border-slate-200 text-slate-400'
              }`}
            >
              <IconComponent className="w-5 h-5" />
            </div>

            {isReady ? (
              <Badge variant="green">Ready</Badge>
            ) : (
              <Badge variant="slate">Coming Soon</Badge>
            )}
          </div>

          <div>
            <h3
              className={`text-base font-bold tracking-tight ${
                isReady ? 'text-slate-900' : 'text-slate-500'
              }`}
            >
              {experiment.title}
            </h3>
            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
              {experiment.description}
            </p>
          </div>
        </div>

        {/* Bottom section: action button */}
        <div className="pt-5 mt-5 border-t border-slate-100">
          {isReady ? (
            <NavLink to={`/${experiment.slug}`} className="block">
              <Button
                variant="primary"
                size="md"
                className="w-full bg-emerald-600 hover:bg-emerald-700 shadow-emerald-500/20 active:bg-emerald-800"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                Try Experiment
              </Button>
            </NavLink>
          ) : (
            <Button
              variant="ghost"
              size="md"
              disabled
              className="w-full text-slate-400 cursor-not-allowed hover:bg-transparent hover:text-slate-400"
              icon={<Lock className="w-3.5 h-3.5" />}
            >
              Coming Soon
            </Button>
          )}
        </div>
      </Card>
    </motion.div>
  );
};
