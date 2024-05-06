import { defineCollection, reference, z } from "astro:content";
import postSchema from "src/schemas/postSchema";
import roleSchema from "src/schemas/roleSchema";
import teamSchema from "src/schemas/teamSchema";

const team = defineCollection({
  type: "data",
  schema: teamSchema,
});

const role = defineCollection({
  type: "data",
  schema: roleSchema,
});

const posts = defineCollection({
  type: "content",
  schema: postSchema,
});

export const collections = {
  team,
  posts,
  role,
};
