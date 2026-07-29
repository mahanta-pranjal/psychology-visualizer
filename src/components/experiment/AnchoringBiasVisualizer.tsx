import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, ArrowRight, Check } from 'lucide-react';

type Step = 'anchor' | 'estimate' | 'result';

export const AnchoringBiasVisualizer: React.FC = () => {
  // Randomly select 1000 (High Anchor) or 100 (Low Anchor) on initial mount
  const [anchorValue, setAnchorValue] = useState<number>(() =>
    Math.random() < 0.5 ? 1000 : 100
  );
  const [step, setStep] = useState<Step>('anchor');
  const [anchorChoice, setAnchorChoice] = useState<'taller' | 'shorter' | null>(null);
  const [estimate, setEstimate] = useState<string>('');

  const ACTUAL_HEIGHT = 330;

  const handleAnchorSelect = (choice: 'taller' | 'shorter') => {
    setAnchorChoice(choice);
    setStep('estimate');
  };

  const handleEstimateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!estimate || isNaN(Number(estimate))) return;
    setStep('result');
  };

  const handleReset = (toggleAnchor: boolean = false) => {
    if (toggleAnchor) {
      setAnchorValue((prev) => (prev === 1000 ? 100 : 1000));
    } else {
      setAnchorValue(Math.random() < 0.5 ? 1000 : 100);
    }
    setStep('anchor');
    setAnchorChoice(null);
    setEstimate('');
  };

  const numEstimate = Number(estimate);
  const difference = numEstimate - ACTUAL_HEIGHT;

  return (
    <div className="w-full max-w-md mx-auto space-y-5 py-2">
      {/* Step 1: Initial Anchor Question */}
      {step === 'anchor' && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="space-y-5"
        >
          <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-3">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
              Question 1 of 2
            </span>
            <h3 className="text-base font-semibold text-slate-900 leading-snug">
              Is the Eiffel Tower taller or shorter than{' '}
              <span className="font-extrabold text-blue-600 underline underline-offset-2 decoration-2">
                {anchorValue.toLocaleString()} meters
              </span>
              ?
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => handleAnchorSelect('taller')}
              className="py-3 px-4 rounded-xl border border-slate-200 bg-white font-semibold text-sm text-slate-700
                         hover:border-blue-300 hover:bg-blue-50/60 hover:text-blue-700 transition-all cursor-pointer"
            >
              Taller
            </button>
            <button
              onClick={() => handleAnchorSelect('shorter')}
              className="py-3 px-4 rounded-xl border border-slate-200 bg-white font-semibold text-sm text-slate-700
                         hover:border-blue-300 hover:bg-blue-50/60 hover:text-blue-700 transition-all cursor-pointer"
            >
              Shorter
            </button>
          </div>
        </motion.div>
      )}

      {/* Step 2: Estimate Input */}
      {step === 'estimate' && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="space-y-5"
        >
          <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                Question 2 of 2
              </span>
              <span className="text-xs text-slate-400 font-medium">
                Anchor: {anchorValue.toLocaleString()}m ({anchorChoice})
              </span>
            </div>
            <h3 className="text-base font-semibold text-slate-900 leading-snug">
              What do you think is the actual height of the Eiffel Tower?
            </h3>

            <form onSubmit={handleEstimateSubmit} className="space-y-4 pt-2">
              <div className="relative">
                <input
                  type="number"
                  placeholder="Enter height in meters"
                  value={estimate}
                  onChange={(e) => setEstimate(e.target.value)}
                  min="1"
                  max="10000"
                  required
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-bold
                             focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 text-sm"
                />
                <span className="absolute right-4 top-3.5 text-xs font-semibold text-slate-400 pointer-events-none">
                  meters
                </span>
              </div>

              <button
                type="submit"
                disabled={!estimate || isNaN(Number(estimate))}
                className="w-full py-3 px-4 rounded-xl bg-blue-600 text-white font-semibold text-sm
                           hover:bg-blue-700 active:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed
                           transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                Submit Estimate <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </motion.div>
      )}

      {/* Step 3: Result & Anchor Reveal */}
      {step === 'result' && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="space-y-4"
        >
          <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-4">
            <h3 className="text-sm font-bold text-slate-900 text-center">
              The Results
            </h3>

            <div className="grid grid-cols-3 gap-2 text-center pt-1">
              {/* Anchor Box */}
              <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl space-y-1">
                <span className="text-[11px] font-semibold text-slate-500 block">
                  Initial Anchor
                </span>
                <span className="text-sm font-extrabold text-blue-600 block">
                  {anchorValue.toLocaleString()} m
                </span>
                <span className="text-[10px] text-slate-400 font-medium block">
                  ({anchorValue === 1000 ? 'High' : 'Low'})
                </span>
              </div>

              {/* Your Estimate */}
              <div className="p-3 bg-blue-50 border border-blue-100 rounded-xl space-y-1">
                <span className="text-[11px] font-semibold text-blue-800 block">
                  Your Estimate
                </span>
                <span className="text-sm font-extrabold text-blue-700 block">
                  {numEstimate.toLocaleString()} m
                </span>
                <span className="text-[10px] text-blue-600 font-medium block">
                  {difference === 0
                    ? 'Exact!'
                    : `${difference > 0 ? '+' : ''}${difference} m`}
                </span>
              </div>

              {/* Actual Height */}
              <div className="p-3 bg-emerald-50 border border-emerald-100 rounded-xl space-y-1">
                <span className="text-[11px] font-semibold text-emerald-800 block">
                  Actual Height
                </span>
                <span className="text-sm font-extrabold text-emerald-700 block">
                  {ACTUAL_HEIGHT} m
                </span>
                <span className="text-[10px] text-emerald-600 font-medium block flex items-center justify-center">
                  <Check className="w-3 h-3" />
                </span>
              </div>
            </div>

            {/* Explanation of anchoring impact */}
            <div className="p-4 bg-slate-50/80 rounded-xl border border-slate-200/80 space-y-1.5 text-xs text-slate-600 leading-relaxed">
              <p className="font-semibold text-slate-900">How the Anchor Affected You:</p>
              <p>
                {anchorValue === 1000 ? (
                  <>
                    You were shown a <strong>high anchor (1,000m)</strong>. People shown this high starting number typically estimate between <strong>500m and 800m</strong>, pulling their guess far above the actual 330m.
                  </>
                ) : (
                  <>
                    You were shown a <strong>low anchor (100m)</strong>. People shown this low starting number typically estimate between <strong>150m and 250m</strong>, pulling their guess far below the actual 330m.
                  </>
                )}
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => handleReset(true)}
              className="flex-1 py-2.5 px-3 rounded-xl border border-slate-200 bg-white text-slate-700 text-xs font-semibold
                         hover:bg-slate-50 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Try with {anchorValue === 1000 ? '100m' : '1,000m'} Anchor
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};
