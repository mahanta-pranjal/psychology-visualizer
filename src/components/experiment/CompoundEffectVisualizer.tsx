import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, PiggyBank, Activity, Calendar, RotateCcw } from 'lucide-react';

type Timeframe = 'day' | 'month' | 'year';

interface HabitOption {
  id: string;
  title: string;
  dailyLabel: string;
  icon: React.ComponentType<{ className?: string }>;
  results: Record<Timeframe, { amount: string; context: string }>;
}

const HABITS: HabitOption[] = [
  {
    id: 'reading',
    title: 'Read 10 pages a day',
    dailyLabel: '10 pages / day',
    icon: BookOpen,
    results: {
      day: { amount: '10 pages', context: 'A single chapter (~0.03 books)' },
      month: { amount: '~300 pages', context: '1 complete book read' },
      year: { amount: '~3,650 pages', context: '12 to 15 full books read!' },
    },
  },
  {
    id: 'saving',
    title: 'Save $5 a day',
    dailyLabel: '$5 / day',
    icon: PiggyBank,
    results: {
      day: { amount: '$5', context: 'Equivalent to one daily coffee' },
      month: { amount: '~$150', context: 'Covers a monthly utility bill' },
      year: { amount: '~$1,825', context: 'A solid emergency fund or vacation!' },
    },
  },
  {
    id: 'exercise',
    title: 'Exercise 15 minutes a day',
    dailyLabel: '15 mins / day',
    icon: Activity,
    results: {
      day: { amount: '15 minutes', context: 'A quick daily movement session' },
      month: { amount: '~7.5 hours', context: '450 minutes of total active cardio' },
      year: { amount: '~91 hours', context: 'Over 3.5 full days of continuous workouts!' },
    },
  },
];

export const CompoundEffectVisualizer: React.FC = () => {
  const [selectedHabit, setSelectedHabit] = useState<HabitOption | null>(null);
  const [timeframe, setTimeframe] = useState<Timeframe>('day');

  const handleSelectHabit = (habit: HabitOption) => {
    setSelectedHabit(habit);
    setTimeframe('day');
  };

  const handleReset = () => {
    setSelectedHabit(null);
    setTimeframe('day');
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-5 py-2">
      {/* Step 1: Habit Selection */}
      {!selectedHabit ? (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="space-y-4"
        >
          <div className="bg-white rounded-xl border border-slate-200 p-4 space-y-1 text-center">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
              Step 1 of 2
            </span>
            <h3 className="text-base font-semibold text-slate-900 leading-snug">
              Choose a small daily habit:
            </h3>
          </div>

          <div className="space-y-2.5">
            {HABITS.map((habit) => {
              const Icon = habit.icon;
              return (
                <button
                  key={habit.id}
                  onClick={() => handleSelectHabit(habit)}
                  className="w-full text-left p-4 rounded-xl border border-slate-200 bg-white
                             hover:border-blue-300 hover:bg-blue-50/60 transition-all cursor-pointer
                             flex items-center gap-3.5 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 text-blue-600
                                  flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-slate-900 group-hover:text-blue-700">
                      {habit.title}
                    </p>
                    <p className="text-xs text-slate-500">
                      {habit.dailyLabel}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </motion.div>
      ) : (
        /* Step 2: Timeline & Results */
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="space-y-4"
        >
          {/* Selected Habit Header */}
          <div className="bg-white rounded-xl border border-slate-200 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                <selectedHabit.icon className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block leading-none">
                  Selected Habit
                </span>
                <span className="text-sm font-extrabold text-slate-900 block mt-0.5">
                  {selectedHabit.title}
                </span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="text-xs font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-100 cursor-pointer"
            >
              Change
            </button>
          </div>

          {/* Timeline Horizon Buttons */}
          <div className="bg-slate-100/80 p-1.5 rounded-xl flex gap-1.5 border border-slate-200/60">
            {(['day', 'month', 'year'] as Timeframe[]).map((tf) => {
              const labels: Record<Timeframe, string> = {
                day: '1 Day',
                month: '1 Month',
                year: '1 Year',
              };
              const active = timeframe === tf;
              return (
                <button
                  key={tf}
                  onClick={() => setTimeframe(tf)}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    active
                      ? 'bg-white text-blue-700 shadow-sm border border-slate-200/80'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {labels[tf]}
                </button>
              );
            })}
          </div>

          {/* Result Card */}
          <motion.div
            key={timeframe}
            initial={{ opacity: 0.7, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.15 }}
            className={`p-6 rounded-xl border text-center space-y-3 ${
              timeframe === 'year'
                ? 'bg-emerald-50/80 border-emerald-200'
                : 'bg-white border-slate-200'
            }`}
          >
            <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5 text-blue-600" />
              <span>
                {timeframe === 'day' && 'After 1 Day'}
                {timeframe === 'month' && 'After 1 Month (30 Days)'}
                {timeframe === 'year' && 'After 1 Year (365 Days)'}
              </span>
            </div>

            <div className="space-y-1">
              <p
                className={`text-3xl sm:text-4xl font-black tracking-tight ${
                  timeframe === 'year' ? 'text-emerald-700' : 'text-slate-900'
                }`}
              >
                {selectedHabit.results[timeframe].amount}
              </p>
              <p className="text-xs font-medium text-slate-600">
                {selectedHabit.results[timeframe].context}
              </p>
            </div>

            {timeframe === 'year' && (
              <p className="text-[11px] font-bold text-emerald-800 bg-emerald-100/70 py-1.5 px-3 rounded-lg border border-emerald-200 inline-block">
                ✨ Small daily consistency compounding into massive results!
              </p>
            )}
          </motion.div>

          <button
            onClick={handleReset}
            className="w-full py-2.5 px-3 rounded-xl border border-slate-200 bg-white text-slate-700 text-xs font-semibold
                       hover:bg-slate-50 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Try another habit
          </button>
        </motion.div>
      )}
    </div>
  );
};
