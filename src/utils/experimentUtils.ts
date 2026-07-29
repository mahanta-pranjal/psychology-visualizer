/**
 * Shared utilities for chain-style experiment visualizers.
 * Import from here — never duplicate in individual visualizer files.
 */

/** Clamps and rounds a number to a whole integer between 0 and 100. */
export const clamp = (val: number): number =>
  Math.min(100, Math.max(0, Math.round(val)));

/** Describes one stage in a causal chain visualizer. */
export interface Stage {
  /** Stable identifier — used as the React key. Must be unique within the chain. */
  id: string;
  /** Display label shown inside the stage row. */
  label: string;
  /** Current computed value (0–100). */
  value: number;
  /** Lucide icon component rendered inside the stage icon container. */
  icon: React.ComponentType<{ className?: string }>;
  /**
   * Whether this stage is visually highlighted as an "endpoint."
   * Typically true for the first and last stage to show they form a loop,
   * or for input/output stages that frame the chain.
   */
  isEndpoint: boolean;
}
