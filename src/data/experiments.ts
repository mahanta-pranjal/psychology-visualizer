export type ExperimentStatus = 'ready' | 'coming-soon';

export interface Experiment {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
  status: ExperimentStatus;
  oneLiner: string;
  whatHappened: string;
  realLifeExample: string;
  keyTakeaway: string;
}

export const EXPERIMENTS: Experiment[] = [
  {
    id: 'galatea',
    slug: 'galatea',
    title: 'Galatea Effect',
    description: 'How your self-expectations directly shape your performance and outcomes.',
    icon: 'Sparkles',
    status: 'ready',
    oneLiner: 'Your beliefs about your own abilities influence how well you perform.',
    whatHappened:
      'When you believe you are capable, you naturally put in more effort. That extra effort leads to more deliberate practice, and more practice produces better performance.\n\nAs your performance improves, your confidence grows—reinforcing the original belief that you were capable in the first place. This creates a self-sustaining positive feedback loop.\n\nThe opposite is equally true. Low self-belief reduces effort, limits practice, and suppresses performance—which then confirms the original doubt. The slider above demonstrates how the starting level of confidence cascades through each stage of this loop.',
    realLifeExample:
      'A student preparing for a difficult exam believes that focused study will help them improve. That belief motivates them to study more consistently, which builds deeper understanding of the material. On exam day, their preparation pays off with a strong result—reinforcing the conviction that they can succeed when they apply themselves.',
    keyTakeaway:
      'Confidence does not directly create success—it changes the behaviors that make success more likely.',
  },
  {
    id: 'pygmalion',
    slug: 'pygmalion',
    title: 'Pygmalion Effect',
    description: 'How high expectations from leaders or teachers lead to improved performance.',
    icon: 'Users',
    status: 'ready',
    oneLiner: 'When someone believes in your potential, their actions make that belief come true.',
    whatHappened:
      'When a teacher or manager holds high expectations for someone, they unconsciously change how they interact with that person. They offer more encouragement, more detailed feedback, and more opportunities to practice.\n\nThis extra support raises the person\'s own confidence in their abilities. That confidence, in turn, drives greater effort and better performance—fulfilling the original expectation.\n\nAdjust the slider to see how a higher starting expectation cascades through support, confidence, and ultimately performance. Notice how low expectations ripple through the chain just as powerfully.',
    realLifeExample:
      'In a landmark study, teachers were told that certain students had been identified as "intellectual bloomers" likely to show significant progress that year. Those students—randomly selected, not actually exceptional—showed meaningfully higher gains by the year\'s end. The teachers\' belief changed their behavior, and their behavior changed the students.',
    keyTakeaway:
      'The expectations others hold for you change how they treat you—and how they treat you changes what you become.',
  },
  {
    id: 'confirmation-bias',
    slug: 'confirmation-bias',
    title: 'Confirmation Bias',
    description: 'The tendency to search for and favor information that confirms existing beliefs.',
    icon: 'Search',
    status: 'ready',
    oneLiner: 'We naturally pay more attention to evidence that supports what we already believe.',
    whatHappened:
      'As you reviewed the evidence cards, you were free to save or skip each one. Most people save a higher proportion of cards that support their chosen belief—not because they are dishonest, but because the brain automatically flags agreeable information as more relevant and credible.\n\nThis is confirmation bias: a filter the mind applies without conscious effort. Information that aligns with an existing belief feels clear and important. Information that challenges it feels weaker, less applicable, or easier to set aside.\n\nThe bias operates before you consciously evaluate the evidence. By the time you decide to save or skip, the unconscious preference has already nudged your judgment.',
    realLifeExample:
      'When people follow a political candidate they support, they tend to remember the stories that praise the candidate and forget the criticisms—even after reading the same article. On social media, algorithms amplify this by showing content that matches past engagement, creating an echo chamber where dissenting views rarely appear at all.',
    keyTakeaway:
      'Actively seeking out opposing evidence is not a sign of weakness—it is what separates good decisions from comfortable ones.',
  },
  {
    id: 'anchoring-bias',
    slug: 'anchoring-bias',
    title: 'Anchoring Bias',
    description: 'Over-relying on the first piece of information received when making decisions.',
    icon: 'Anchor',
    status: 'ready',
    oneLiner: 'The initial price or number presented sets an anchor that skews all subsequent judgments.',
    whatHappened:
      'When estimating an unknown value, your brain looks for a starting reference point. Once a numerical anchor is introduced—even an arbitrary or extreme one—all subsequent adjustments pull away from that anchor, but usually insufficiently.\n\nIn this experiment, people shown a 1,000m anchor estimate much higher numbers than those shown a 100m anchor for the exact same Eiffel Tower. The initial number acts like a gravitational pull on memory and estimation.\n\nEven when you know an anchor might be extreme, your mind subconsciously uses it as a benchmark, skewing your final decision.',
    realLifeExample:
      'In retail, seeing a shirt tagged with an "Original Price: $200" marked down to "$75" makes $75 feel like a massive bargain—even if the shirt is only worth $40. In salary negotiations, whoever names the first number sets the anchor around which the rest of the negotiation revolves.',
    keyTakeaway:
      'Your first number isn\'t always the best reference. Pause and evaluate independent value before deciding.',
  },
  {
    id: 'loss-aversion',
    slug: 'loss-aversion',
    title: 'Loss Aversion',
    description: 'The psychological pain of losing is twice as powerful as the pleasure of gaining.',
    icon: 'TrendingDown',
    status: 'ready',
    oneLiner: 'People usually feel the pain of losing more strongly than the pleasure of gaining the same amount.',
    whatHappened:
      'People often avoid risk when facing gains but take more risks when trying to avoid losses.\n\nMathematically, both options offer the exact same expected outcome ($50 gain vs -$50 loss). However, because the psychological pain of losing is roughly twice as intense as the joy of gaining, people shift their risk tolerance depending on whether a decision is framed as a win or a loss.',
    realLifeExample:
      'An investor keeps a losing stock because selling makes the loss feel real. Similarly, subscription services offer 30-day free trials because once you feel ownership of a service, losing access feels painful.',
    keyTakeaway:
      'The way choices are framed (gain vs. loss) can change decisions, even when the expected outcomes are equivalent.',
  },
  {
    id: 'flow-state',
    slug: 'flow-state',
    title: 'Flow State',
    description: 'Optimal state of consciousness where you feel and perform at your best.',
    icon: 'Zap',
    status: 'ready',
    oneLiner: 'Flow happens when the difficulty of a task closely matches a person\'s skill level.',
    whatHappened:
      'Flow occurs when your skills are well matched to the challenge. If the task is too easy, you become bored. If it\'s too difficult, you become anxious.\n\nDiscovered by Mihaly Csikszentmihalyi, the flow channel exists in the narrow zone where challenge and skill rise together. In this state, self-consciousness disappears, focus becomes effortless, and time dilates.\n\nBy adjusting either the challenge or your skill level, you can deliberately enter and maintain the flow state.',
    realLifeExample:
      'A video game gradually becomes harder as your skills improve, keeping you engaged.',
    keyTakeaway:
      'Adjust the difficulty of a task to match your current skill level to stay motivated and focused.',
  },
  {
    id: 'habit-loop',
    slug: 'habit-loop',
    title: 'Habit Loop',
    description: 'The neurological loop that governs every habit: Cue, Craving, Response, Reward.',
    icon: 'Repeat',
    status: 'ready',
    oneLiner: 'Habits are formed through the Cue → Routine → Reward cycle.',
    whatHappened:
      'Habits form because the brain links a specific cue with a routine that produces a rewarding feeling.\n\nOver time, the basal ganglia in the brain automates this cycle to conserve mental energy. As soon as the cue occurs, the brain anticipates the reward, driving you to perform the routine almost unconsciously.\n\nBecause the cue and reward are deeply ingrained, trying to eliminate a habit through sheer willpower rarely works. The most effective strategy is habit reversal: keep the cue and reward, but substitute a healthier routine.',
    realLifeExample:
      'Checking your phone every time it vibrates, even when the notification isn\'t important. The vibration is the Cue, unlocking your phone is the Routine, and relief from curiosity or a social update is the Reward.',
    keyTakeaway:
      'Changing a habit is often easier by keeping the same cue and reward while replacing the routine.',
  },
  {
    id: 'dopamine-loop',
    slug: 'dopamine-loop',
    title: 'Dopamine Loop',
    description: 'Anticipation and variable rewards driving seeking behaviors and habits.',
    icon: 'Activity',
    status: 'ready',
    oneLiner: 'Dopamine is driven more by anticipation than by the reward itself, leading to repeated checking behaviors.',
    whatHappened:
      'The brain often responds strongly to the possibility of a reward. This anticipation can reinforce repeated behaviors.\n\nContrary to popular belief, dopamine is not primarily released when you receive a reward—it spikes beforehand, during the anticipation of a potential outcome.\n\nBecause notifications offer variable rewards (sometimes an exciting message, sometimes spam), the uncertainty causes higher dopamine spikes, driving you to check your phone repeatedly.',
    realLifeExample:
      'Refreshing social media feeds or email inboxes repeatedly, even when there are no new updates.',
    keyTakeaway:
      'Reducing unnecessary cues (such as non-essential notifications) can help break repetitive checking habits.',
  },
  {
    id: 'compound-effect',
    slug: 'compound-effect',
    title: 'Compound Effect',
    description: 'Huge rewards come from small, consistent choices made over extended periods.',
    icon: 'TrendingUp',
    status: 'ready',
    oneLiner: 'Small, consistent actions lead to large results over time.',
    whatHappened:
      'Small improvements seem insignificant at first, but consistent repetition creates remarkable long-term results.\n\nThe compound effect works like compound interest: small 1% daily gains accumulate non-linearly over time. Early on, progress feels invisible, but staying consistent eventually crosses an inflection point where results compound rapidly.',
    realLifeExample:
      'Learning a language for just 15 minutes every day eventually becomes hundreds of hours of practice.',
    keyTakeaway:
      'Focus on consistency rather than dramatic short-term changes.',
  },
  {
    id: 'dunning-kruger',
    slug: 'dunning-kruger',
    title: 'Dunning-Kruger Effect',
    description: 'Cognitive bias where beginners overestimate their competence in a domain.',
    icon: 'BarChart3',
    status: 'ready',
    oneLiner: 'Beginners often overestimate their ability, while experienced people become more aware of what they don\'t know.',
    whatHappened:
      'When people know very little, they often don\'t yet realize how much there is to learn. As knowledge grows, confidence usually becomes more realistic.\n\nFirst documented by David Dunning and Justin Kruger, this cognitive bias occurs because novice competence lacks the metacognition required to evaluate one\'s own skill accurately.\n\nAs you gain real experience, confidence initially drops (the Valley of Despair) before slowly rebuilding on actual competence.',
    realLifeExample:
      'Someone watches a few investing videos and feels ready to beat the stock market, only to discover its complexity after gaining experience.',
    keyTakeaway:
      'Confidence is valuable, but continuous learning helps align confidence with actual ability.',
  },
];
