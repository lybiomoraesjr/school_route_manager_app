import { z } from "zod";

const envSchema = z.object({
  VITE_API_URL: z.string().url(),
  VITE_GOOGLE_MAPS_KEY: z.string(),
  VITE_FEATURE_TOGGLE_X: z.string().optional(),
});

export const env = envSchema.parse(import.meta.env);

export type Env = z.infer<typeof envSchema>;
