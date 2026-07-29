import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Coffee, Sun, Bell, ArrowDown, RotateCcw, Sparkles } from 'lucide-react';

interface RoutineOption {
  id: string;
  title: string;
  reward: string;
}

interface CueOption {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  routines: RoutineOption[];
}

const CUE_OPTIONS: CueOption[] = [
  {
    id: 'bored',
    title: 'Feeling bored',
    icon: Coffee,
    routines: [
      {
        id: 'bored-social',
        title: 'Open social media',
        reward: 'Quick entertainment and instant distraction',
      },
      {
        id: 'bored-book',
        title: 'Read a book',
        reward: 'Learned something new and mental stimulation',
      },
      {
        id: 'bored-walk',
        title: 'Go for a short walk',
        reward: 'Felt refreshed and boosted physical energy',
      },
    ],
  },
  {
    id: 'waking',
    title: 'Waking up in the morning',
    icon: Sun,
    routines: [
      {
        id: 'wake-phone',
        title: 'Check phone in bed',
        reward: 'Instant news updates and social connection',
      },
      {
        id: 'wake-water',
        title: 'Drink a glass of water',
        reward: 'Hydrated body and immediate physical alertness',
      },
      {
        id: 'wake-stretch',
        title: 'Do 5 minutes of stretching',
        reward: 'Relieved muscle stiffness and calm morning focus',
      },
    ],
  },
  {
    id: 'notification',
    title: 'Hearing a phone notification',
    icon: Bell,
    routines: [
      {
        id: 'notif-pick',
        title: 'Pick up phone instantly',
        reward: 'Curiosity satisfied and quick dopamine hit',
      },
      {
        id: 'notif-finish',
        title: 'Finish current task first',
        reward: 'Sense of accomplishment and uninterrupted focus',
      },
      {
        id: 'notif-breath',
        title: 'Take a deep breath',
        reward: 'Calmed nervous system and reduced urgency',
      },
    ],
  },
];

type Step = 1 | 2 | 3;

export const HabitLoopVisualizer: React.FC = () => {
  const [step, setStep] = useState<Step>(1);
  const [selectedCue, setSelectedCue] = useState<CueOption | null>(null);
  const [selectedRoutine, setSelectedRoutine] = useState<RoutineOption | null>(null);

  const handleCueSelect = (cue: CueOption) => {
    setSelectedCue(cue);
    setSelectedRoutine(null);
    setStep(2);
  };

  const handleRoutineSelect = (routine: RoutineOption) => {
    setSelectedRoutine(routine);
    setStep(3);
  };

  const handleReset = () => {
    setStep(1);
    setSelectedCue(null);
    setSelectedRoutine(null);
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-5 py-2">
      {/* Step 1: Cue Selection */}
      {step === 1 && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="space-y-4"
        >
          <div className="bg-white rounded-xl border border-slate-200 p-4 space-y-1">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
              Step 1 of 3
            </span>
            <h3 className="text-base font-semibold text-slate-900 leading-snug">
              Choose a Cue (Trigger):
            </h3>
          </div>

          <div className="space-y-2.5">
            {CUE_OPTIONS.map((cue) => {
              const Icon = cue.icon;
              return (
                <button
                  key={cue.id}
                  onClick={() => handleCueSelect(cue)}
                  className="w-full text-left p-4 rounded-xl border border-slate-200 bg-white
                             hover:border-blue-300 hover:bg-blue-50/60 transition-all cursor-pointer
                             flex items-center gap-3.5 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 text-blue-600
                                  flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-900">
                    {cue.title}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>
      )}

      {/* Step 2: Routine Selection */}
      {step === 2 && selectedCue && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="space-y-4"
        >
          <div className="bg-white rounded-xl border border-slate-200 p-4 space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                Step 2 of 3
              </span>
              <span className="text-xs text-slate-400 font-medium truncate max-w-[150px]">
                Cue: {selectedCue.title}
              </span>
            </div>
            <h3 className="text-base font-semibold text-slate-900 leading-snug">
              Choose a Routine (Behavior):
            </h3>
          </div>

          <div className="space-y-2.5">
            {selectedCue.routines.map((routine) => (
              <button
                key={routine.id}
                onClick={() => handleRoutineSelect(routine)}
                className="w-full text-left p-4 rounded-xl border border-slate-200 bg-white
                           hover:border-blue-300 hover:bg-blue-50/60 transition-all cursor-pointer space-y-1 group"
              >
                <p className="text-sm font-bold text-slate-900 group-hover:text-blue-700">
                  {routine.title}
                </p>
                <p className="text-xs text-slate-500">
                  Expected reward: {routine.reward}
                </p>
              </button>
            ))}
          </div>
        </motion.div>
      )}

      {/* Step 3: Complete Habit Loop Display */}
      {step === 3 && selectedCue && selectedRoutine && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="space-y-4"
        >
          <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-4">
            <h3 className="text-sm font-bold text-slate-900 text-center">
              The Complete Habit Loop
            </h3>

            {/* Loop Chain Cards */}
            <div className="space-y-2">
              {/* Cue Card */}
              <div className="p-3.5 bg-blue-50/80 border border-blue-100 rounded-xl flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                  <selectedCue.icon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider block leading-none">
                    1. Cue (Trigger)
                  </span>
                  <span className="text-sm font-extrabold text-slate-900 block mt-0.5">
                    {selectedCue.title}
                  </span>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <ArrowDown className="w-3.5 h-3.5 text-slate-300" />
              </div>

              {/* Routine Card */}
              <div className="p-3.5 bg-white border border-slate-200 rounded-xl flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center shrink-0 font-extrabold text-xs">
                  2
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block leading-none">
                    2. Routine (Behavior)
                  </span>
                  <span className="text-sm font-extrabold text-slate-900 block mt-0.5">
                    {selectedRoutine.title}
                  </span>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <ArrowDown className="w-3.5 h-3.5 text-slate-300" />
              </div>

              {/* Reward Card */}
              <div className="p-3.5 bg-emerald-50/80 border border-emerald-100 rounded-xl flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block leading-none">
                    3. Reward (Feeling)
                  </span>
                  <span className="text-sm font-extrabold text-slate-900 block mt-0.5">
                    {selectedRoutine.reward}
                  </span>
                </div>
              </div>
            </div>

            {/* Loop reinforcement note */}
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 text-xs text-slate-600 leading-relaxed text-center">
              This reward reinforces the connection to <strong className="text-slate-900">{selectedCue.title}</strong>, making the routine automatic next time.
            </div>
          </div>

          <button
            onClick={handleReset}
            className="w-full py-2.5 px-3 rounded-xl border border-slate-200 bg-white text-slate-700 text-xs font-semibold
                       hover:bg-slate-50 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Build Another Habit Loop
          </button>
        </motion.div>
      )}
    </div>
  );
};
