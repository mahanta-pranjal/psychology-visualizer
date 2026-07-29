import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Music, ArrowDown, RotateCcw, ArrowRight } from 'lucide-react';

interface SkillOption {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
}

const SKILL_OPTIONS: SkillOption[] = [
  { id: 'chess', title: 'Chess', icon: Brain },
  { id: 'programming', title: 'Programming', icon: Code },
  { id: 'guitar', title: 'Guitar', icon: Music },
];

interface Stage {
  id: string;
  name: string;
  alias: string;
  confidenceText: string;
  knowledgeText: string;
  description: string;
  badgeBg: string;
  badgeText: string;
}

const STAGES: Stage[] = [
  {
    id: 'beginner',
    name: '1. Beginner',
    alias: 'Peak of Mount Stupid',
    confidenceText: 'High Confidence',
    knowledgeText: 'Low Knowledge',
    description: 'You feel like a natural master after learning basic rules, unaware of the vast complexity ahead.',
    badgeBg: 'bg-amber-100',
    badgeText: 'text-amber-800 border-amber-200',
  },
  {
    id: 'learning',
    name: '2. Learning More',
    alias: 'Valley of Despair',
    confidenceText: 'Confidence Drops',
    knowledgeText: 'Knowledge Increases',
    description: 'As you uncover how much you don’t know, confidence plummets and reality sets in.',
    badgeBg: 'bg-rose-100',
    badgeText: 'text-rose-800 border-rose-200',
  },
  {
    id: 'gaining',
    name: '3. Gaining Experience',
    alias: 'Slope of Enlightenment',
    confidenceText: 'Confidence Slowly Rises',
    knowledgeText: 'Real Competence',
    description: 'Consistent practice builds genuine understanding, restoring true confidence based on experience.',
    badgeBg: 'bg-blue-100',
    badgeText: 'text-blue-800 border-blue-200',
  },
  {
    id: 'expert',
    name: '4. Expert',
    alias: 'Plateau of Sustainability',
    confidenceText: 'Realistic Confidence',
    knowledgeText: 'High Knowledge',
    description: 'Deep mastery brings quiet confidence paired with intellectual humility.',
    badgeBg: 'bg-emerald-100',
    badgeText: 'text-emerald-800 border-emerald-200',
  },
];

type Step = 1 | 2 | 3;

export const DunningKrugerVisualizer: React.FC = () => {
  const [step, setStep] = useState<Step>(1);
  const [selectedSkill, setSelectedSkill] = useState<SkillOption | null>(null);
  const [confidence, setConfidence] = useState<number>(75);

  const handleSelectSkill = (skill: SkillOption) => {
    setSelectedSkill(skill);
    setStep(2);
  };

  const handleConfidenceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
  };

  const handleReset = () => {
    setStep(1);
    setSelectedSkill(null);
    setConfidence(75);
  };

  // Determine stage alignment based on confidence input
  let userStageId = 'beginner';
  if (confidence > 70) {
    userStageId = 'beginner';
  } else if (confidence <= 35) {
    userStageId = 'learning';
  } else if (confidence > 35 && confidence <= 65) {
    userStageId = 'gaining';
  } else {
    userStageId = 'expert';
  }

  return (
    <div className="w-full max-w-md mx-auto space-y-5 py-2">
      {/* Step 1: Choose a Skill */}
      {step === 1 && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="space-y-4"
        >
          <div className="bg-white rounded-xl border border-slate-200 p-4 space-y-1 text-center">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
              Step 1 of 3
            </span>
            <h3 className="text-base font-semibold text-slate-900 leading-snug">
              Imagine you have just started learning a new skill:
            </h3>
          </div>

          <div className="space-y-2.5">
            {SKILL_OPTIONS.map((skill) => {
              const Icon = skill.icon;
              return (
                <button
                  key={skill.id}
                  onClick={() => handleSelectSkill(skill)}
                  className="w-full text-left p-4 rounded-xl border border-slate-200 bg-white
                             hover:border-blue-300 hover:bg-blue-50/60 transition-all cursor-pointer
                             flex items-center gap-3.5 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 text-blue-600
                                  flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-bold text-slate-900 group-hover:text-blue-700">
                    {skill.title}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>
      )}

      {/* Step 2: Self-Assessed Confidence Slider */}
      {step === 2 && selectedSkill && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="space-y-4"
        >
          <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                Step 2 of 3
              </span>
              <span className="text-xs text-slate-400 font-medium">
                Skill: {selectedSkill.title}
              </span>
            </div>

            <h3 className="text-base font-semibold text-slate-900 leading-snug">
              After <span className="text-blue-600 font-bold">one week</span> of practicing {selectedSkill.title}, how skilled do you think you would be?
            </h3>

            <form onSubmit={handleConfidenceSubmit} className="space-y-4 pt-1">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="confidence-slider" className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                    Self-Assessed Confidence
                  </label>
                  <span className="tabular-nums text-sm font-extrabold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100">
                    {confidence}%
                  </span>
                </div>

                <input
                  id="confidence-slider"
                  type="range"
                  min="0"
                  max="100"
                  value={confidence}
                  onChange={(e) => setConfidence(Number(e.target.value))}
                  className="w-full h-2 bg-slate-100 rounded-full appearance-none cursor-pointer accent-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                />

                <div className="flex justify-between text-[10px] text-slate-400 font-medium px-0.5">
                  <span>Novice (0%)</span>
                  <span>Moderate (50%)</span>
                  <span>Master (100%)</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl bg-blue-600 text-white font-semibold text-sm
                           hover:bg-blue-700 active:bg-blue-800 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                Reveal Curve Position <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </motion.div>
      )}

      {/* Step 3: Vertical Dunning-Kruger Stage Timeline */}
      {step === 3 && selectedSkill && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="space-y-4"
        >
          <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-4">
            <div className="text-center space-y-1">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                The Dunning–Kruger Curve
              </span>
              <h3 className="text-sm font-semibold text-slate-700">
                Your 1-week estimate ({confidence}%) places you at:
              </h3>
            </div>

            {/* Vertical Timeline Stages */}
            <div className="space-y-2 pt-1">
              {STAGES.map((stage, idx) => {
                const isSelected = stage.id === userStageId;
                return (
                  <React.Fragment key={stage.id}>
                    {idx > 0 && (
                      <div className="flex justify-center">
                        <ArrowDown className="w-3.5 h-3.5 text-slate-300" />
                      </div>
                    )}

                    <div
                      className={`p-3.5 rounded-xl border transition-all ${
                        isSelected
                          ? 'bg-blue-50/90 border-blue-300 ring-2 ring-blue-200/60 shadow-sm'
                          : 'bg-white border-slate-200/80'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-slate-900">
                            {stage.name}
                          </span>
                          <span className="text-[10px] text-slate-500 italic">
                            ({stage.alias})
                          </span>
                        </div>

                        <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full border ${stage.badgeBg} ${stage.badgeText}`}>
                          {stage.confidenceText}
                        </span>
                      </div>

                      <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-medium">
                        {stage.description}
                      </p>

                      {isSelected && (
                        <div className="mt-2 text-[11px] font-bold text-blue-700 bg-blue-100/70 py-1 px-2.5 rounded-md border border-blue-200 inline-block">
                          📍 Your estimated starting point
                        </div>
                      )}
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          <button
            onClick={handleReset}
            className="w-full py-2.5 px-3 rounded-xl border border-slate-200 bg-white text-slate-700 text-xs font-semibold
                       hover:bg-slate-50 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Try with a different skill
          </button>
        </motion.div>
      )}
    </div>
  );
};
