import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bookmark, BookmarkX, RotateCcw } from 'lucide-react';

// ── Data ──────────────────────────────────────────────────────────────────────

interface EvidenceCard {
  id: string;
  text: string;
  type: 'supporting' | 'contradicting';
}

interface Belief {
  id: string;
  label: string;
  cards: EvidenceCard[]; // 4 supporting, 2 contradicting — interleaved
}

const BELIEFS: Belief[] = [
  {
    id: 'coffee',
    label: 'Coffee improves productivity',
    cards: [
      { id: 'c1', type: 'supporting',     text: 'Caffeine blocks adenosine receptors in the brain, directly reducing fatigue and improving sustained attention for up to four hours.' },
      { id: 'c2', type: 'supporting',     text: 'A Harvard review of 50 studies linked moderate coffee consumption to better memory consolidation and cognitive performance.' },
      { id: 'c3', type: 'contradicting',  text: 'Regular coffee drinkers develop tolerance — they need caffeine just to reach their normal baseline, not an actual productivity gain.' },
      { id: 'c4', type: 'supporting',     text: 'Workers who drink coffee in the morning report completing tasks faster and feeling more motivated during the first half of the workday.' },
      { id: 'c5', type: 'contradicting',  text: 'A 2022 study found well-rested caffeine-free participants outperformed coffee drinkers on creative problem-solving tasks.' },
      { id: 'c6', type: 'supporting',     text: 'Longitudinal studies show coffee drinkers have significantly lower rates of cognitive decline, suggesting sustained long-term brain benefits.' },
    ],
  },
  {
    id: 'remote',
    label: 'Remote work is better',
    cards: [
      { id: 'r1', type: 'supporting',     text: 'A Stanford study found remote workers were 13% more productive than office counterparts when controlling for task complexity.' },
      { id: 'r2', type: 'supporting',     text: 'Eliminating commutes gives remote workers an average of 54 extra minutes daily — time reinvested in deep work or recovery.' },
      { id: 'r3', type: 'contradicting',  text: "Microsoft's internal data showed remote work weakens cross-team links, measurably reducing organic idea-sharing across departments." },
      { id: 'r4', type: 'supporting',     text: 'Remote workers report significantly lower workplace stress and greater autonomy — both linked to higher long-term job satisfaction.' },
      { id: 'r5', type: 'contradicting',  text: 'A 2023 survey found 41% of remote employees struggle with work-life separation and often work longer hours than in-office peers.' },
      { id: 'r6', type: 'supporting',     text: 'Companies offering full remote work report 25% lower voluntary turnover, demonstrating that remote-friendly policies retain top talent.' },
    ],
  },
  {
    id: 'morning',
    label: 'Morning exercise is best',
    cards: [
      { id: 'm1', type: 'supporting',     text: 'Morning exercise naturally elevates cortisol, providing an energy boost and improved alertness that lasts through the workday.' },
      { id: 'm2', type: 'supporting',     text: 'People who exercise before 9 AM have higher long-term adherence — morning slots are less likely to be cancelled by other commitments.' },
      { id: 'm3', type: 'contradicting',  text: 'Body temperature and muscle strength both peak in the late afternoon, meaning evening exercise produces better athletic performance outcomes.' },
      { id: 'm4', type: 'supporting',     text: 'Morning exercise is associated with better sleep quality — early exercisers fall asleep faster and spend more time in deep sleep.' },
      { id: 'm5', type: 'contradicting',  text: 'A meta-analysis of 23 studies found no significant difference in fat loss or strength gains between morning and evening exercise groups.' },
      { id: 'm6', type: 'supporting',     text: 'Morning exercisers report feeling more energetic and positive throughout the workday, which correlates with higher measured productivity.' },
    ],
  },
];

// ── Types ─────────────────────────────────────────────────────────────────────

type Phase = 'selecting' | 'reviewing' | 'results';

// ── Component ─────────────────────────────────────────────────────────────────

export const ConfirmationBiasVisualizer: React.FC = () => {
  const [phase, setPhase] = useState<Phase>('selecting');
  const [selectedBelief, setSelectedBelief] = useState<Belief | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [savedIds, setSavedIds] = useState<Set<string>>(new Set());

  // ── Handlers ────────────────────────────────────────────────────────────────

  const handleSelectBelief = (belief: Belief) => {
    setSelectedBelief(belief);
    setCurrentIndex(0);
    setSavedIds(new Set());
    setPhase('reviewing');
  };

  const advance = (save: boolean) => {
    if (!selectedBelief) return;
    const card = selectedBelief.cards[currentIndex];

    if (save) {
      setSavedIds((prev) => new Set(prev).add(card.id));
    }

    if (currentIndex === selectedBelief.cards.length - 1) {
      setPhase('results');
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const reset = () => {
    setPhase('selecting');
    setSelectedBelief(null);
    setCurrentIndex(0);
    setSavedIds(new Set());
  };

  // ── Phase: Belief Selection ──────────────────────────────────────────────────

  if (phase === 'selecting') {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="w-full space-y-4 py-2"
      >
        <p className="text-sm font-semibold text-slate-700 text-center">
          Choose a belief you hold:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {BELIEFS.map((belief) => (
            <button
              key={belief.id}
              onClick={() => handleSelectBelief(belief)}
              className="text-left px-4 py-4 rounded-xl border border-slate-200 bg-white
                         hover:border-blue-300 hover:bg-blue-50/60 transition-all duration-150
                         text-sm font-medium text-slate-700 hover:text-blue-700 cursor-pointer"
            >
              {belief.label}
            </button>
          ))}
        </div>

        <p className="text-[11px] text-slate-400 text-center">
          Pick the one you personally agree with most
        </p>
      </motion.div>
    );
  }

  // ── Phase: Card Review ───────────────────────────────────────────────────────

  if (phase === 'reviewing' && selectedBelief) {
    const card = selectedBelief.cards[currentIndex];
    const total = selectedBelief.cards.length;
    const progress = (currentIndex / total) * 100;

    return (
      <div className="w-full space-y-4 py-2">

        {/* Header row */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-slate-500">
            Evidence {currentIndex + 1} of {total}
          </span>
          <span className="text-xs text-slate-400 italic truncate max-w-[160px] sm:max-w-xs">
            "{selectedBelief.label}"
          </span>
        </div>

        {/* Progress bar */}
        <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-blue-400 rounded-full"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          />
        </div>

        {/* Evidence card — AnimatePresence for smooth card-to-card transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="bg-white rounded-xl border border-slate-200 px-5 py-5 min-h-[96px]
                       flex items-center"
          >
            <p className="text-sm text-slate-700 leading-relaxed">{card.text}</p>
          </motion.div>
        </AnimatePresence>

        {/* Save / Skip */}
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => advance(true)}
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl
                       bg-blue-600 text-white text-sm font-semibold
                       hover:bg-blue-700 active:bg-blue-800 transition-colors duration-150"
          >
            <Bookmark className="w-4 h-4" />
            Save
          </button>
          <button
            onClick={() => advance(false)}
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl
                       border border-slate-200 bg-white text-slate-600 text-sm font-medium
                       hover:bg-slate-50 hover:text-slate-800 transition-colors duration-150"
          >
            <BookmarkX className="w-4 h-4" />
            Skip
          </button>
        </div>
      </div>
    );
  }

  // ── Phase: Results ───────────────────────────────────────────────────────────

  if (phase === 'results' && selectedBelief) {
    const supporting    = selectedBelief.cards.filter((c) => c.type === 'supporting');
    const contradicting = selectedBelief.cards.filter((c) => c.type === 'contradicting');
    const savedFor      = supporting.filter((c) => savedIds.has(c.id)).length;
    const savedAgainst  = contradicting.filter((c) => savedIds.has(c.id)).length;

    const supportPct = Math.round((savedFor / supporting.length) * 100);
    const contradictPct = Math.round((savedAgainst / contradicting.length) * 100);

    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.22 }}
        className="w-full space-y-4 py-2"
      >
        <p className="text-sm font-semibold text-slate-700 text-center">
          Here's what you saved:
        </p>

        {/* Supporting row */}
        <div className="rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-3 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-emerald-800">
              Supporting evidence saved
            </span>
            <span className="tabular-nums text-base font-extrabold text-emerald-700">
              {savedFor} / {supporting.length}
            </span>
          </div>
          <div className="h-1.5 bg-emerald-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-emerald-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${supportPct}%` }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: 0.1 }}
            />
          </div>
        </div>

        {/* Contradicting row */}
        <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-600">
              Opposing evidence saved
            </span>
            <span className="tabular-nums text-base font-extrabold text-slate-700">
              {savedAgainst} / {contradicting.length}
            </span>
          </div>
          <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-slate-400 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${contradictPct}%` }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: 0.2 }}
            />
          </div>
        </div>

        <p className="text-[11px] text-slate-400 text-center leading-relaxed">
          Most people save more supporting cards — even when they actively try to be objective.
        </p>

        <button
          onClick={reset}
          className="flex items-center justify-center gap-1.5 w-full py-2.5 px-3 rounded-xl
                     border border-slate-200 bg-white text-slate-700 text-xs font-semibold
                     hover:bg-slate-50 transition-colors cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Try with a different belief
        </button>
      </motion.div>
    );
  }

  return null;
};
