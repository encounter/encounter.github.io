import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    order: z.number(),
    name: z.string(),
    url: z.string().url(),
    repo: z.string(),
    desc: z.string(),
    langs: z.array(z.object({
      name: z.string(),
      color: z.string(),
    })),
    meta: z.string().optional(),
    images: z.array(z.object({
      src: image(),
      alt: z.string(),
      href: z.string(),
      rel: z.string().optional(),
    })).optional(),
  }),
});

export const collections = {
  projects,
};
