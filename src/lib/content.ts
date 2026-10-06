import { getCollection } from 'astro:content';

const showDrafts = import.meta.env.DEV;

export async function getProjects() {
  const all = await getCollection('projects', ({ data }) => showDrafts || !data.draft);
  return all.sort((a, b) => a.data.order - b.data.order || b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getPosts() {
  const all = await getCollection('posts', ({ data }) => showDrafts || !data.draft);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
