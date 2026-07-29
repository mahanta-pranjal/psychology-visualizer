import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, ShieldCheck, Dice5 } from 'lucide-react';

type Choice = 'guaranteed' | 'gamble';
type Step = 1 | 2 | 3;

export const LossAversionVisualizer: React.FC = () => {
  const [step, setStep] = useState<Step>(1);
  const [gainChoice, setGainChoice] = useState<Choice | null>(null);
  const [lossChoice, setLossChoice] = useState<Choice | null>(null);

  const handleGainSelect = (choice: Choice) => {
    setGainChoice(choice);
    setStep(2);
  };

  const handleLossSelect = (choice: Choice) => {
    setLossChoice(choice);
    setStep(3);
  };

  const handleReset = () => {
    setStep(1);
    setGainChoice(null);
    setLossChoice(null);
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-5 py-2">
      {/* Step 1: Gain Scenario */}
      {step === 1 && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="space-y-5"
        >
          <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-2">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
              Scenario 1 of 2 — Gains
            </span>
            <h3 className="text-base font-semibold text-slate-900 leading-snug">
              You are given a choice between two positive options:
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Option A: Guaranteed Gain */}
            <button
              onClick={() => handleGainSelect('guaranteed')}
              className="text-left p-4 rounded-xl border border-slate-200 bg-white space-y-2
                         hover:border-blue-300 hover:bg-blue-50/60 transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider group-hover:text-blue-600">
                  Option A (Guaranteed)
                </span>
              </div>
              <p className="text-base font-extrabold text-slate-900">
                Receive <span className="text-emerald-600">+$50</span>
              </p>
              <p className="text-xs text-slate-500">100% certainty of gain</p>
            </button>

            {/* Option B: Gamble Gain */}
            <button
              onClick={() => handleGainSelect('gamble')}
              className="text-left p-4 rounded-xl border border-slate-200 bg-white space-y-2
                         hover:border-blue-300 hover:bg-blue-50/60 transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-2">
                <Dice5 className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider group-hover:text-blue-600">
                  Option B (50/50 Gamble)
                </span>
              </div>
              <p className="text-base font-extrabold text-slate-900">
                50% <span className="text-emerald-600">+$100</span> / 50% $0
              </p>
              <p className="text-xs text-slate-500">50% chance of double, 50% nothing</p>
            </button>
          </div>
        </motion.div>
      )}

      {/* Step 2: Loss Scenario */}
      {step === 2 && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="space-y-5"
        >
          <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-2">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
              Scenario 2 of 2 — Losses
            </span>
            <h3 className="text-base font-semibold text-slate-900 leading-snug">
              Now choose between two potential losses:
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Option A: Guaranteed Loss */}
            <button
              onClick={() => handleLossSelect('guaranteed')}
              className="text-left p-4 rounded-xl border border-slate-200 bg-white space-y-2
                         hover:border-blue-300 hover:bg-blue-50/60 transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-rose-500 shrink-0" />
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider group-hover:text-blue-600">
                  Option A (Guaranteed)
                </span>
              </div>
              <p className="text-base font-extrabold text-slate-900">
                Lose <span className="text-rose-600">-$50</span>
              </p>
              <p className="text-xs text-slate-500">100% certainty of loss</p>
            </button>

            {/* Option B: Gamble Loss */}
            <button
              onClick={() => handleLossSelect('gamble')}
              className="text-left p-4 rounded-xl border border-slate-200 bg-white space-y-2
                         hover:border-blue-300 hover:bg-blue-50/60 transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-2">
                <Dice5 className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider group-hover:text-blue-600">
                  Option B (50/50 Gamble)
                </span>
              </div>
              <p className="text-base font-extrabold text-slate-900">
                50% <span className="text-rose-600">-$100</span> / 50% $0
              </p>
              <p className="text-xs text-slate-500">50% chance of double loss, 50% avoid loss</p>
            </button>
          </div>
        </motion.div>
      )}

      {/* Step 3: Results & Psychological Reveal */}
      {step === 3 && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="space-y-4"
        >
          <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-4">
            <h3 className="text-sm font-bold text-slate-900 text-center">
              Your Choices Breakdown
            </h3>

            <div className="grid grid-cols-2 gap-3 text-center">
              {/* Gain choice summary */}
              <div className="p-3 bg-emerald-50/70 border border-emerald-100 rounded-xl space-y-1">
                <span className="text-[11px] font-semibold text-emerald-800 block">
                  Scenario 1 (Gains)
                </span>
                <span className="text-xs font-extrabold text-emerald-700 block">
                  {gainChoice === 'guaranteed' ? 'Guaranteed +$50' : '50/50 Gamble'}
                </span>
                <span className="text-[10px] text-emerald-600 font-medium block">
                  {gainChoice === 'guaranteed' ? 'Risk-Averse' : 'Risk-Seeking'}
                </span>
              </div>

              {/* Loss choice summary */}
              <div className="p-3 bg-rose-50/70 border border-rose-100 rounded-xl space-y-1">
                <span className="text-[11px] font-semibold text-rose-800 block">
                  Scenario 2 (Losses)
                </span>
                <span className="text-xs font-extrabold text-rose-700 block">
                  {lossChoice === 'guaranteed' ? 'Guaranteed -$50' : '50/50 Gamble'}
                </span>
                <span className="text-[10px] text-rose-600 font-medium block">
                  {lossChoice === 'guaranteed' ? 'Risk-Averse' : 'Risk-Seeking'}
                </span>
              </div>
            </div>

            {/* Psychological Insight */}
            <div className="p-4 bg-slate-50/80 rounded-xl border border-slate-200/80 space-y-2 text-xs text-slate-600 leading-relaxed">
              <p className="font-semibold text-slate-900">The Psychology at Play:</p>
              <p>
                Mathematically, both scenarios are identical: the expected value of both choices in both steps is <strong>$50</strong>.
              </p>
              {gainChoice === 'guaranteed' && lossChoice === 'gamble' ? (
                <p className="text-blue-900 font-medium bg-blue-50/70 p-2.5 rounded-lg border border-blue-100">
                  You showed the classic <strong>Loss Aversion pattern</strong>: you chose the safe option when gaining money, but risked a gamble to try to avoid a loss!
                </p>
              ) : (
                <p>
                  Most people choose the <strong>guaranteed gain</strong> when dealing with positive outcomes, but take the <strong>gamble</strong> when trying to avoid a loss—because the pain of losing feels twice as severe as the joy of gaining.
                </p>
              )}
            </div>
          </div>

          <button
            onClick={handleReset}
            className="w-full py-2.5 px-3 rounded-xl border border-slate-200 bg-white text-slate-700 text-xs font-semibold
                       hover:bg-slate-50 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Try Experiment Again
          </button>
        </motion.div>
      )}
    </div>
  );
};
