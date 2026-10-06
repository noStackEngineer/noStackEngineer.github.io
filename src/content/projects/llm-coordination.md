---
title: LLM-Coordination
summary: A benchmark for testing how well LLM agents coordinate with a partner in cooperative games, published in Findings of NAACL 2025.
kind: Research
date: 2025-04-01
period: 2024 – 2025
tags: [Python, LLM agents, Benchmarks]
image: ../../assets/llm-coordination.png
imageAlt: Overview figure from the LLM-Coordination paper showing agentic coordination, the coordination games, and CoordinationQA.
links:
  - { label: Paper, href: "https://arxiv.org/abs/2310.03903" }
  - { label: Code, href: "https://github.com/eric-ai-lab/llm_coordination" }
featured: true
order: 1
---

Large language models are increasingly used as agents, but most evaluations test them alone. **LLM-Coordination** asks a different question: can an LLM agent work *with* a partner, reading their intent and planning around them, in games where the only way to win is to cooperate?

The benchmark has two parts:

- **Agentic coordination.** LLM agents play full games of Hanabi, Overcooked-AI, Collab Capture, and Collab Escape with a partner.
- **CoordinationQA.** Multiple-choice questions taken from game states, which separate three abilities: understanding the environment, reasoning about the partner (theory of mind), and joint planning.

## My part

I worked on this in Prof. [Xin Eric Wang](https://eric-xw.github.io/)'s ERIC Lab at UC Santa Cruz. I helped develop the benchmark suite across the four games, running and analyzing agent evaluations, and I'm a co-author on the paper.

## Paper

Saaket Agashe, Yue Fan, **Anthony Reyna**, Xin Eric Wang. *LLM-Coordination: Evaluating and Analyzing Multi-agent Coordination Abilities in Large Language Models.* Findings of NAACL 2025.
