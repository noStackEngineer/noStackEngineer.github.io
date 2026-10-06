export interface Publication {
  title: string;
  authors: string; // "Anthony Reyna" is bolded when rendered.
  venue: string;
  year: number;
  links: { label: string; href: string }[];
  project?: string; // slug of a related project page
}

export const publications: Publication[] = [
  {
    title:
      'LLM-Coordination: Evaluating and Analyzing Multi-agent Coordination Abilities in Large Language Models',
    authors: 'Saaket Agashe, Yue Fan, Anthony Reyna, Xin Eric Wang',
    venue: 'Findings of NAACL 2025',
    year: 2025,
    links: [
      { label: 'Paper', href: 'https://arxiv.org/abs/2310.03903' },
      { label: 'Code', href: 'https://github.com/eric-ai-lab/llm_coordination' },
    ],
    project: 'llm-coordination',
  },
];

export const presentations: Publication[] = [
  {
    title: 'Constant-Memory Video Encoding for Language Grounding',
    authors: 'Anthony Reyna, Rodolfo Corona, Dan Klein, Trevor Darrell',
    venue:
      'Poster, SACNAS National Diversity in STEM Conference 2022 · Poster and talk, UC Berkeley Transfer-to-Excellence REU symposium',
    year: 2022,
    links: [],
    project: 'video-language-grounding',
  },
];
