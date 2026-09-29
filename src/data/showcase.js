import { Gauge, TrendingUp, CheckCircle2, Star } from "lucide-react";

export const showcaseEyebrow = "See it working";

export const showcaseTitle = "A workspace that shows its work";

export const showcaseIntro =
  "No dashboards that need a manual. Switch opens on the three things that matter today: what is due, what is drifting, and what is already won.";

export const showcasePanel = {
  title: "Focus radar",
  subtitle: "Week 12 · Field season",
  rows: [
    { label: "Ship onboarding rewrite", meta: "Due today", progress: 82, tone: "indigo" },
    { label: "Publish case study", meta: "Due Thu", progress: 54, tone: "emerald" },
    { label: "Interview 5 users", meta: "Drifting", progress: 21, tone: "amber" },
    { label: "Weekly review", meta: "Complete", progress: 100, tone: "sky" },
  ],
  summary: [
    { icon: Gauge, value: "9/10", label: "On-pace goals" },
    { icon: TrendingUp, value: "+38%", label: "Follow-through" },
  ],
};

export const showcaseStories = [
  {
    icon: CheckCircle2,
    quote:
      "I stopped rebuilding my plan every Sunday. Switch held the shape of the season while I only had to show up and do the week.",
    name: "Adaeze Nwosu",
    role: "Product designer, Lagos",
    metric: "46 days",
    metricLabel: "Longest unbroken streak",
  },
  {
    icon: TrendingUp,
    quote:
      "The focus radar caught a slipping deadline two weeks before I would have noticed. That one warning saved the quarter.",
    name: "Marcus Lund",
    role: "Founder, Copenhagen",
    metric: "3 quarters",
    metricLabel: "Targets hit on time",
  },
  {
    icon: Star,
    quote:
      "It is the first tracker my whole study group actually kept open. The shared summary is short enough that nobody mutes it.",
    name: "Priscilla Adeyemi",
    role: "Medical student, Ibadan",
    metric: "12 people",
    metricLabel: "Circle members",
  },
];
