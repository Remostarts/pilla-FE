import { z } from 'zod';

// Blog Post form schema
export const blogPostSchema = z.object({
  tag: z.string().min(1, 'Tag is required'),
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  image: z.any().optional(),
});
export type TBlogPost = z.infer<typeof blogPostSchema>;

// Career Post form schema
export const careerPostSchema = z.object({
  tag: z.string().min(1, 'Tag is required'),
  title: z.string().min(1, 'Title is required'),
  content: z.string().min(1, 'Content is required'),
  image: z.any().optional(),
  remote: z.string().min(1, 'Remote is required'),
  employmentType: z.string().min(1, 'Employment Type is required'),
});
export type TCareerPost = z.infer<typeof careerPostSchema>;
