import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      // Shown on cards, e.g. "Research", "Course project", "Personal project".
      kind: z.string(),
      date: z.coerce.date(),
      // Free-form period label, e.g. "Winter 2025" or "2024 – 2025".
      period: z.string(),
      tags: z.array(z.string()).default([]),
      image: image().optional(),
      imageAlt: z.string().optional(),
      links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
      featured: z.boolean().default(false),
      // Drafts are built only in `npm run dev`, never in production.
      draft: z.boolean().default(false),
      order: z.number().default(100),
    }),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, posts };
