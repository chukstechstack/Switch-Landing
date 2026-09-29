import {
  Target,
  LineChart,
  Radar,
  ShieldCheck,
  Users,
  Layers,
} from "lucide-react";

export const featuresEyebrow = "Built for focus";

export const featuresTitle = "Everything you need to finish what you start";

export const featuresIntro =
  "Switch replaces the pile of notes, tabs, and half-used trackers with one workspace where every goal has an owner, a rhythm, and a visible result.";

export const features = [
  {
    icon: Target,
    title: "Goal architecture",
    description:
      "Break a season-sized ambition into weekly moves. Every layer stays linked, so a finished task always answers to a real objective.",
    accent: "from-indigo-500 to-indigo-600",
  },
  {
    icon: LineChart,
    title: "Momentum signals",
    description:
      "See streaks, slips, and recovery the moment they happen instead of discovering them at month end.",
    accent: "from-emerald-500 to-emerald-600",
  },
  {
    icon: Radar,
    title: "Focus radar",
    description:
      "One screen ranks what is due, what is drifting, and what can safely wait, so your next hour is obvious.",
    accent: "from-amber-500 to-amber-600",
  },
  {
    icon: Layers,
    title: "Field templates",
    description:
      "Start from proven layouts for study, training, shipping, and business seasons, then bend them to your own rhythm.",
    accent: "from-sky-500 to-sky-600",
  },
  {
    icon: Users,
    title: "Accountability circles",
    description:
      "Small private groups share progress summaries, not noise. Encouragement without another feed to scroll.",
    accent: "from-rose-500 to-rose-600",
  },
  {
    icon: ShieldCheck,
    title: "Private by default",
    description:
      "Your plans stay on your device first. Export everything in one click and delete it all just as easily.",
    accent: "from-slate-600 to-slate-700",
  },
];
