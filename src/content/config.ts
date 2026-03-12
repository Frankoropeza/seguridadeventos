import { defineCollection, z } from 'astro:content';

const servicios = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    minPersonnel: z.number(),
    eventTypes: z.array(z.string()),
    certifications: z.array(z.string()).default([]),
    features: z.array(z.string()),
  }),
});

const casos = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    eventType: z.string(),
    attendees: z.number(),
    location: z.string(),
    description: z.string(),
    result: z.string(),
    date: z.coerce.date(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('Seguridad Eventos'),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { servicios, casos, blog };
