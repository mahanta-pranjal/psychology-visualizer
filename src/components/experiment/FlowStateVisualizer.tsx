import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Coffee, Smile, AlertCircle } from 'lucide-react';

type FlowZone = 'bored' | 'relaxed' | 'flow' | 'anxious';

interface ZoneConfig {
  title: string;
  badgeBg: string;
  badgeText: string;
  cardBg: string;
  borderColor: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const ZONES: Record<FlowZone, ZoneConfig> = {
  bored: {
    title: 'Bored',
    badgeBg: 'bg-slate-100',
    badgeText: 'text-slate-700 border-slate-200',
    cardBg: 'bg-slate-50',
    borderColor: 'border-slate-200',
    description: 'The challenge is far lower than your skill level. Zero effort is needed, so your mind wanders.',
    icon: Coffee,
  },
  relaxed: {
    title: 'Relaxed',
    badgeBg: 'bg-blue-100',
    badgeText: 'text-blue-700 border-blue-200',
    cardBg: 'bg-blue-50/50',
    borderColor: 'border-blue-200/80',
    description: 'The task is comfortable and low-stress, but doesn’t require your full attention or mastery.',
    icon: Smile,
  },
  flow: {
    title: 'Flow State',
    badgeBg: 'bg-emerald-100',
    badgeText: 'text-emerald-800 border-emerald-200',
    cardBg: 'bg-emerald-50/70',
    borderColor: 'border-emerald-200',
    description: 'Perfect balance! High challenge meets high skill—resulting in effortless focus and deep immersion.',
    icon: Zap,
  },
  anxious: {
    title: 'Anxious',
    badgeBg: 'bg-rose-100',
    badgeText: 'text-rose-800 border-rose-200',
    cardBg: 'bg-rose-50/60',
    borderColor: 'border-rose-200/80',
    description: 'The challenge far exceeds your current skill level, causing frustration and stress.',
    icon: AlertCircle,
  },
};

export const FlowStateVisualizer: React.FC = () => {
  const [skill, setSkill] = useState<number>(5);
  const [challenge, setChallenge] = useState<number>(5);

  const diff = challenge - skill;

  let currentZone: FlowZone = 'flow';
  if (diff <= -3) {
    currentZone = 'bored';
  } else if (diff === -2 || diff === -1) {
    currentZone = 'relaxed';
  } else if (diff === 0 || diff === 1) {
    currentZone = 'flow';
  } else {
    currentZone = 'anxious';
  }

  const zoneConfig = ZONES[currentZone];
  const Icon = zoneConfig.icon;

  return (
    <div className="w-full max-w-md mx-auto space-y-5 py-2">
      {/* Sliders Container */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-4">
        {/* Skill Slider */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label htmlFor="skill-slider" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Skill Level
            </label>
            <span className="tabular-nums text-xs font-extrabold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
              {skill} / 10
            </span>
          </div>
          <input
            id="skill-slider"
            type="range"
            min="1"
            max="10"
            value={skill}
            onChange={(e) => setSkill(Number(e.target.value))}
            className="w-full h-2 bg-slate-100 rounded-full appearance-none cursor-pointer accent-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
          />
          <div className="flex justify-between text-[10px] text-slate-400 font-medium">
            <span>Beginner (1)</span>
            <span>Master (10)</span>
          </div>
        </div>

        <div className="border-t border-slate-100" />

        {/* Challenge Slider */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label htmlFor="challenge-slider" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Challenge Level
            </label>
            <span className="tabular-nums text-xs font-extrabold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
              {challenge} / 10
            </span>
          </div>
          <input
            id="challenge-slider"
            type="range"
            min="1"
            max="10"
            value={challenge}
            onChange={(e) => setChallenge(Number(e.target.value))}
            className="w-full h-2 bg-slate-100 rounded-full appearance-none cursor-pointer accent-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
          />
          <div className="flex justify-between text-[10px] text-slate-400 font-medium">
            <span>Very Easy (1)</span>
            <span>Extremely Hard (10)</span>
          </div>
        </div>
      </div>

      {/* Dynamic Status Card */}
      <motion.div
        key={currentZone}
        initial={{ opacity: 0.8, scale: 0.99 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.15 }}
        className={`rounded-xl border p-5 ${zoneConfig.cardBg} ${zoneConfig.borderColor} space-y-3`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center border ${zoneConfig.badgeBg} ${zoneConfig.badgeText}`}>
              <Icon className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block leading-none">
                Current Mental State
              </span>
              <h4 className="text-base font-extrabold text-slate-900 leading-tight mt-0.5">
                {zoneConfig.title}
              </h4>
            </div>
          </div>

          <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${zoneConfig.badgeBg} ${zoneConfig.badgeText}`}>
            {currentZone === 'flow' ? '⚡ Optimal' : 'Sub-optimal'}
          </span>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed font-medium">
          {zoneConfig.description}
        </p>

        {/* Dynamic Tip based on current zone */}
        <div className="pt-2 border-t border-slate-200/50 text-[11px] font-semibold text-slate-500">
          {currentZone === 'bored' && '💡 Tip: Increase task complexity to enter Flow.'}
          {currentZone === 'relaxed' && '💡 Tip: Slightly raise the challenge to reach peak focus.'}
          {currentZone === 'flow' && '✨ You are in the Flow Zone! High performance & immersion.'}
          {currentZone === 'anxious' && '💡 Tip: Break down the task or build skills to reduce anxiety.'}
        </div>
      </motion.div>
    </div>
  );
};
