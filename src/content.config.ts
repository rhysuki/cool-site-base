import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/blogposts" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.string(),
        bannerUrl: z.optional(z.string()),
        bannerAlt: z.optional(z.string()),
    })
});

export const collections = { blog };
