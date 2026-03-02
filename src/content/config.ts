import { defineCollection, z } from 'astro:content';

// Product collection schema
const productsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    // Required fields
    productId: z.string().regex(/^MML-\d{3}$/, {
      message: 'Product ID must be in format MML-XXX (e.g., MML-001)'
    }),
    title: z.string().min(1, 'Title is required'),
    price: z.number().positive('Price must be a positive number'),
    description: z.string().min(10, 'Description must be at least 10 characters'),
    image: image(),

    // Optional fields
    gallery: z.array(image()).optional().default([]),
    fabric: z.enum([
      'Silk',
      'Cotton',
      'Georgette',
      'Chiffon',
      'Banarasi',
      'Kanjeevaram',
      'Chanderi',
      'Tussar',
      'Other'
    ]).default('Silk'),
    color: z.string().default(''),

    // Display controls
    featured: z.boolean().default(false),
    available: z.boolean().default(true),
    order: z.number().default(0),

    // SEO
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
  })
});

export const collections = {
  'products': productsCollection,
};
