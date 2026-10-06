// Skills are grouped by where they were used, not by self-rated proficiency,
// so every entry points at real evidence. Keep this list honest: add a tool
// once there is something on this site (or on the CV) that used it.

export interface SkillGroup {
  heading: string;
  context: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    heading: 'Using now',
    context: 'Software engineering internship (2026) and my current game project.',
    items: ['Python', 'TypeScript', 'React', 'Node.js', 'SQL (PostgreSQL)', 'Neo4j', 'LLM APIs (AWS Bedrock)', 'Git', 'C++', 'Unreal Engine 5'],
  },
  {
    heading: 'Research',
    context: 'Four research positions, 2022–2026.',
    items: ['PyTorch', 'Hugging Face', 'NumPy', 'Pandas', 'robosuite / LIBERO', 'GPU compute clusters'],
  },
  {
    heading: 'Coursework',
    context: 'University projects, linked from the Projects page.',
    items: ['C (threads, sockets)', 'JavaScript', 'WebGL / GLSL', 'three.js', 'Docker', 'Valgrind'],
  },
];
