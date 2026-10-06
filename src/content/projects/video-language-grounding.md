---
title: Constant-memory video encoding for language grounding
summary: Research on finding the moments in a video that answer a natural-language question, without memory use growing with video length.
kind: Research
date: 2022-10-01
period: Summer 2022
tags: [Python, PyTorch, Multimodal ML]
image: ../../assets/berkeley-poster.jpg
imageAlt: Anthony standing next to his research poster, "Constant-Memory Video Encoding for Language Grounding", at the SACNAS conference.
order: 4
---

In summer 2022 I was a research intern at UC Berkeley, in the labs of Prof. Dan Klein and Prof. Trevor Darrell, through the Transfer-to-Excellence research program. My mentor was [Rodolfo Corona](https://rcorona.github.io/).

The problem is **language grounding in video**: given a long video and a question like "when did the person put the cup down?", find the frames that answer it. Most models encode the whole video at once, so memory grows with video length. We looked at encoding video in a way that keeps memory constant, so that long videos stay tractable.

I implemented multimodal architectures in PyTorch and built a pipeline that retrieves the video frames matching a natural-language query.

## Presentations

- Poster at the **SACNAS National Diversity in STEM Conference** (2022). That's the photo above.
- Poster at the Transfer-to-Excellence research symposium at UC Berkeley.
- Slide presentation to the Transfer-to-Excellence program.
