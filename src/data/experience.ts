export interface Role {
  title: string;
  org: string;
  place: string;
  period: string;
  points: string[];
  // Optional link to a related project page or paper.
  related?: { label: string; href: string }[];
}

export const experience: Role[] = [
  {
    title: 'Software Engineering Intern (AI Systems)',
    org: 'EUV Tech',
    place: 'Martinez, CA',
    period: 'Jun 2026 – Aug 2026',
    points: [
      'Built internal tooling around a production LLM assistant: a data-ingestion pipeline that prepares field diagnostic data for the assistant to import and verify, and an evaluation harness for comparing prompt and model changes reliably.',
      'Designed a natural-language data analysis feature that turns plain-English questions into sandboxed, editable Python scripts, and hardened it through adversarial testing.',
      'Moved event aggregation server-side for accuracy, and migrated a knowledge base to a graph database to support path-tracing and centrality queries.',
    ],
  },
  {
    title: 'Undergraduate Researcher',
    org: 'University of California, Santa Cruz',
    place: 'Santa Cruz, CA',
    period: 'Jan 2024 – Jun 2026',
    points: [
      'Designed and ran experiments on failure modes of vision-language-action (VLA) models controlling robot arms (Franka Panda in robosuite / LIBERO), in collaboration with UC Berkeley, looking at biases induced by model priors and how to mitigate them.',
      'Tokenized the MS COCO caption corpus and ran a statistical analysis over a 1M-token sample to test whether image tokens follow the same distribution laws as language.',
      'Built a benchmark of four multi-agent coordination games (Hanabi, Overcooked-AI, Collab Capture, Collab Escape) for evaluating LLM agents; co-authored LLM-Coordination (NAACL 2025 Findings).',
    ],
    related: [{ label: 'LLM-Coordination', href: '/projects/llm-coordination/' }],
  },
  {
    title: 'Research Intern',
    org: 'Carnegie Mellon University',
    place: 'Pittsburgh, PA',
    period: 'Jun 2024 – Aug 2024',
    points: [
      'Evaluated LLMs as personal assistants on the Enron Email Dataset (500,000+ messages), curating and labeling a subset for evaluation and robustness testing.',
      'Identified adversarial security risks in language-agent pipelines and proposed mitigations.',
    ],
  },
  {
    title: 'Research Intern',
    org: 'University of California, Berkeley',
    place: 'Berkeley, CA',
    period: 'Jun 2022 – Oct 2022',
    points: [
      'Studied grounded language learning for efficient video understanding, implementing multimodal architectures in PyTorch.',
      "Built a pipeline that finds the video frames answering a user's natural-language query, and presented the work three times, including as a poster at the SACNAS national conference.",
    ],
    related: [{ label: 'Project page', href: '/projects/video-language-grounding/' }],
  },
];

export const education = [
  {
    school: 'University of California, Santa Cruz',
    degree: 'B.S. Computer Science',
    period: 'Sep 2023 – Jun 2026',
    notes:
      'Coursework: Deep Learning Foundations (graduate), Natural Language Processing, Machine Learning, Artificial Intelligence, Computer Graphics, Computer Architecture, Computer Systems Design, Computational Models, Probability, Linear Algebra.',
  },
];

export const leadership = [
  {
    title: 'Vice President',
    org: 'Ohlone AI Club',
    place: 'Fremont, CA',
    period: 'Aug 2022 – May 2023',
    points: [
      'Organized talks with academics and industry engineers, and coordinated research showcases and hackathons for students new to AI.',
    ],
  },
];
