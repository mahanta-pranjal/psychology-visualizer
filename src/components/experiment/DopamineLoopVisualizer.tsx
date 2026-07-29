import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, Zap, Smartphone, Gift, RotateCcw, ArrowDown } from 'lucide-react';

type UserChoice = 'immediately' | 'finish' | 'ignore';

const CHOICE_REACTIONS: Record<UserChoice, string> = {
  immediately:
    'The impulse to check immediately is triggered by a sudden spike in dopamine. Your brain craves the potential reward hidden behind the notification!',
  finish:
    'Even as you try to finish your task, the brain holds onto the anticipation. The lingering dopamine spike makes it difficult to maintain full focus until you check.',
  ignore:
    'Ignoring the sound requires deliberate willpower to override the brain’s natural dopamine-driven urge to seek unpredictable rewards.',
};

export const DopamineLoopVisualizer: React.FC = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const [userChoice, setUserChoice] = useState<UserChoice | null>(null);

  const handleSelectChoice = (choice: UserChoice) => {
    setUserChoice(choice);
    setStep(2);
  };

  const handleReset = () => {
    setStep(1);
    setUserChoice(null);
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-5 py-2">
      {/* Step 1: Scenario & Choice */}
      {step === 1 && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="space-y-5"
        >
          <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-3 text-center">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mx-auto">
              <Bell className="w-6 h-6 animate-pulse" />
            </div>
            <h3 className="text-base font-bold text-slate-900 leading-snug">
              "You hear a notification sound on your phone."
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              What would you most likely do?
            </p>
          </div>

          <div className="space-y-2.5">
            <button
              onClick={() => handleSelectChoice('immediately')}
              className="w-full text-left p-4 rounded-xl border border-slate-200 bg-white
                         hover:border-blue-300 hover:bg-blue-50/60 transition-all cursor-pointer group"
            >
              <p className="text-sm font-semibold text-slate-800 group-hover:text-blue-700">
                📱 Check my phone immediately
              </p>
            </button>

            <button
              onClick={() => handleSelectChoice('finish')}
              className="w-full text-left p-4 rounded-xl border border-slate-200 bg-white
                         hover:border-blue-300 hover:bg-blue-50/60 transition-all cursor-pointer group"
            >
              <p className="text-sm font-semibold text-slate-800 group-hover:text-blue-700">
                ⏳ Finish what I'm doing first
              </p>
            </button>

            <button
              onClick={() => handleSelectChoice('ignore')}
              className="w-full text-left p-4 rounded-xl border border-slate-200 bg-white
                         hover:border-blue-300 hover:bg-blue-50/60 transition-all cursor-pointer group"
            >
              <p className="text-sm font-semibold text-slate-800 group-hover:text-blue-700">
                🔕 Ignore it
              </p>
            </button>
          </div>
        </motion.div>
      )}

      {/* Step 2: Reveal & Loop Breakdown */}
      {step === 2 && userChoice && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="space-y-4"
        >
          {/* Reaction banner */}
          <div className="p-4 bg-blue-50/80 rounded-xl border border-blue-100 text-xs text-blue-900 leading-relaxed font-medium">
            {CHOICE_REACTIONS[userChoice]}
          </div>

          {/* Dopamine Loop Card */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-3">
            <h3 className="text-sm font-bold text-slate-900 text-center">
              The Dopamine Anticipation Loop
            </h3>

            <div className="space-y-1.5 pt-1">
              {/* Notification */}
              <div className="p-2.5 bg-slate-50 border border-slate-200/80 rounded-lg flex items-center gap-3">
                <Bell className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-700">
                  1. Notification (External Trigger)
                </span>
              </div>

              <div className="flex justify-center">
                <ArrowDown className="w-3.5 h-3.5 text-slate-300" />
              </div>

              {/* Anticipation */}
              <div className="p-2.5 bg-amber-50 border border-amber-200/80 rounded-lg flex items-center gap-3">
                <Zap className="w-4 h-4 text-amber-600 shrink-0" />
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-extrabold text-amber-900 block leading-tight">
                    2. Anticipation (Dopamine Spike)
                  </span>
                  <span className="text-[10px] text-amber-700 block">
                    Brain craves the unknown reward
                  </span>
                </div>
              </div>

              <div className="flex justify-center">
                <ArrowDown className="w-3.5 h-3.5 text-slate-300" />
              </div>

              {/* Check Phone */}
              <div className="p-2.5 bg-slate-50 border border-slate-200/80 rounded-lg flex items-center gap-3">
                <Smartphone className="w-4 h-4 text-slate-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-700">
                  3. Check Phone (Action Taken)
                </span>
              </div>

              <div className="flex justify-center">
                <ArrowDown className="w-3.5 h-3.5 text-slate-300" />
              </div>

              {/* Possible Reward */}
              <div className="p-2.5 bg-emerald-50 border border-emerald-200/80 rounded-lg flex items-center gap-3">
                <Gift className="w-4 h-4 text-emerald-600 shrink-0" />
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-bold text-emerald-900 block leading-tight">
                    4. Possible Reward (Variable Outcome)
                  </span>
                  <span className="text-[10px] text-emerald-700 block">
                    Sometimes exciting, sometimes trivial
                  </span>
                </div>
              </div>

              <div className="flex justify-center">
                <ArrowDown className="w-3.5 h-3.5 text-slate-300" />
              </div>

              {/* Repeat */}
              <div className="p-2.5 bg-blue-50 border border-blue-200/80 rounded-lg flex items-center justify-center gap-2 text-blue-800 text-xs font-bold">
                <RotateCcw className="w-3.5 h-3.5" />
                5. Repeat (Checking Habit Reinforced)
              </div>
            </div>
          </div>

          <button
            onClick={handleReset}
            className="w-full py-2.5 px-3 rounded-xl border border-slate-200 bg-white text-slate-700 text-xs font-semibold
                       hover:bg-slate-50 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Try Scenario Again
          </button>
        </motion.div>
      )}
    </div>
  );
};
