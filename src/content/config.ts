import { defineCollection } from "astro:content";
import { researchSchema } from "./_schemas";

const research = defineCollection({
  schema: researchSchema,
});

export const collections = { research };
