import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Stage } from '../../utils/experimentUtils';

interface StageChainProps {
  /** Label shown above the slider (e.g. "Starting Confidence"). */
  sliderLabel: string;
  /** Unique id used for the slider's htmlFor / id pair. */
  sliderId: string;
  /** Current slider value (0–100). Controlled from the parent. */
  sliderValue: number;
  /** Called when the user drags the slider. */
  onSliderChange: (value: number) => void;
  /** Ordered array of stages to render in the chain. */
  stages: Stage[];
  /** Short note shown below the chain (e.g. "Loop completes…"). */
  footerNote: string;
}

/**
 * Shared render tree for chain-style experiment visualizers.
 *
 * Renders: slider → divider → stage rows with progress bars → footer note.
 * Each individual visualizer (Galatea, Pygmalion, …) provides its own
 * slider config, computed stage values, and footer text — nothing else.
 */
export const StageChain: React.FC<StageChainProps> = ({
  sliderLabel,
  sliderId,
  sliderValue,
  onSliderChange,
  stages,
  footerNote,
}) => {
  return (
    <div className="w-full max-w-md mx-auto space-y-5 py-2">

      {/* ── Slider ──────────────────────────────────────────── */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between">
          <label htmlFor={sliderId} className="text-sm font-semibold text-slate-700">
            {sliderLabel}
          </label>
          <motion.span
            key={sliderValue}
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.12 }}
            className="tabular-nums text-sm font-bold text-blue-600 w-10 text-right"
          >
            {sliderValue}%
          </motion.span>
        </div>

        <input
          id={sliderId}
          type="range"
          min="0"
          max="100"
          value={sliderValue}
          onChange={(e) => onSliderChange(Number(e.target.value))}
          className="w-full h-2 rounded-full appearance-none cursor-pointer accent-blue-600
                     focus:outline-none focus:ring-2 focus:ring-blue-500/30"
        />

        <div className="flex justify-between text-[10px] font-medium text-slate-400 px-0.5">
          <span>Low</span>
          <span>High</span>
        </div>
      </div>

      {/* ── Divider ─────────────────────────────────────────── */}
      <div className="border-t border-slate-100" />

      {/* ── Stage Chain ─────────────────────────────────────── */}
      <div className="space-y-0">
        {stages.map((stage, index) => {
          const Icon = stage.icon;
          const isLast = index === stages.length - 1;

          return (
            <div key={stage.id}>
              {/* Arrow connector — static, keeps focus on the values */}
              {index > 0 && (
                <div className="flex justify-center py-1">
                  <ArrowDown className="w-3.5 h-3.5 text-slate-300" />
                </div>
              )}

              {/* Stage row */}
              <div
                className={`rounded-xl px-4 py-3 border ${
                  stage.isEndpoint
                    ? 'bg-blue-50 border-blue-100'
                    : 'bg-white border-slate-200/70'
                } ${isLast ? 'ring-2 ring-blue-200/50' : ''}`}
              >
                <div className="flex items-center gap-3">
                  {/* Icon container */}
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                      stage.isEndpoint
                        ? 'bg-blue-100 text-blue-600'
                        : 'bg-slate-100 text-slate-400'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Label + progress bar + value */}
                  <div className="flex-1 min-w-0 space-y-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`text-xs font-semibold leading-none ${
                          stage.isEndpoint ? 'text-blue-800' : 'text-slate-600'
                        }`}
                      >
                        {stage.label}
                      </span>
                      <motion.span
                        key={stage.value}
                        initial={{ opacity: 0.4 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.15 }}
                        className={`tabular-nums text-sm font-bold leading-none shrink-0 ${
                          stage.isEndpoint ? 'text-blue-700' : 'text-slate-700'
                        }`}
                      >
                        {stage.value}%
                      </motion.span>
                    </div>

                    {/* Progress bar — stable key prevents remount flicker */}
                    <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${
                          stage.isEndpoint ? 'bg-blue-500' : 'bg-slate-300'
                        }`}
                        animate={{ width: `${stage.value}%` }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Footer note ─────────────────────────────────────── */}
      <p className="text-center text-[11px] text-slate-400 leading-relaxed pb-1">
        {footerNote}
      </p>

    </div>
  );
};
