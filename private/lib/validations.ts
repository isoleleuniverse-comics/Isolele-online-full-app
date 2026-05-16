import { z } from "zod";

const textField = (max: number) => z.string().trim().max(max);
const requiredTextField = (max: number) => z.string().trim().min(1).max(max);
const urlField = z
  .string()
  .trim()
  .max(2000)
  .refine((value) => value === "" || value.startsWith("/") || value.startsWith("http://") || value.startsWith("https://"), {
    message: "URL must start with / or http(s)://",
  });

const articleBlockBaseSchema = z.object({
  id: requiredTextField(80),
});

export const articleBlockSchema = z.discriminatedUnion("type", [
  articleBlockBaseSchema.extend({
    type: z.literal("heading"),
    text: textField(180),
  }),
  articleBlockBaseSchema.extend({
    type: z.literal("text"),
    text: textField(5000),
  }),
  articleBlockBaseSchema.extend({
    type: z.literal("image"),
    url: urlField,
    alt: textField(180).optional(),
    caption: textField(300).optional(),
  }),
  articleBlockBaseSchema.extend({
    type: z.literal("quote"),
    text: textField(900),
    source: textField(180).optional(),
  }),
  articleBlockBaseSchema.extend({
    type: z.literal("video"),
    url: urlField,
    title: textField(180).optional(),
  }),
  articleBlockBaseSchema.extend({
    type: z.literal("divider"),
  }),
  articleBlockBaseSchema.extend({
    type: z.literal("cta"),
    title: textField(160),
    description: textField(320).optional(),
    buttonLabel: textField(60),
    href: urlField,
  }),
]);

export const articlePatchSchema = z.object({
  title: z.string().min(1).max(180).optional(),
  slug: z.string().min(1).max(120).optional(),
  excerpt: z.string().max(300).nullable().optional(),
  coverImage: z.string().max(2000).nullable().optional(),
  blocksJson: z.array(articleBlockSchema).optional(),
  published: z.boolean().optional(),
});

export const uploadSchema = z.object({
  articleId: z.string().min(1),
});
