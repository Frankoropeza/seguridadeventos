import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title:           z.string(),
    description:     z.string(),
    metaTitle:       z.string().optional(),
    metaDescription: z.string().optional(),
    categoria:   z.string().default('Blog'),
    imagen:      z.string().optional(),
    readTime:    z.number().default(5),
    keywords:    z.array(z.string()).optional(),
    draft:       z.boolean().default(false),
  }),
});

const servicios = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/servicios' }),
  schema: z.object({
    title:           z.string(),
    description:     z.string(),
    metaTitle:       z.string().optional(),
    metaDescription: z.string().optional(),
    emoji:       z.string().default('🛡️'),
    orden:       z.number().default(99),
    keywords:    z.array(z.string()).optional(),
  }),
});

export const collections = { blog, servicios };
