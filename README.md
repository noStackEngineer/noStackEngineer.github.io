# anthony-reyna.com

Source for [anthony-reyna.com](https://anthony-reyna.com), built with [Astro](https://astro.build) and deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `master`.

## Running locally

```sh
npm install
npm run dev      # http://localhost:4321, drafts visible
npm run build    # production build into dist/, drafts hidden
npm run preview  # serve dist/
```

## Where things live

| What | Where |
|---|---|
| Projects (one Markdown file each) | `src/content/projects/` |
| Blog posts | `src/content/posts/` |
| Experience, education, leadership | `src/data/experience.ts` |
| Publications and posters | `src/data/publications.ts` |
| Skills ("Tools I've worked with") | `src/data/skills.ts` |
| Name, email, social links | `src/data/site.ts` |
| Images used by pages | `src/assets/` (optimized at build time) |
| Files served as-is (favicon, CNAME, `cv.pdf`) | `public/` |

## Drafts and hidden sections

- Set `draft: true` in a project's or post's frontmatter to hide it from the live site. It still shows in `npm run dev`, marked "Draft".
- The **Blog** nav link appears automatically once there is at least one post with `draft: false`.
- The **CV** nav link appears automatically once `public/cv.pdf` exists.

Note: `/CS160/` on this domain is served by the separate [CS160](https://github.com/noStackEngineer/CS160) repo's GitHub Pages, so don't create a `CS160` page here.
