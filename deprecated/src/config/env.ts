import { z } from "zod";

const envSchema = z.object({
	VITE_API_URL: z.string().url(),
	VITE_BASE_PATH: z.string().default("/"),
});

export const env = envSchema.parse(import.meta.env);

export type Env = z.infer<typeof envSchema>;
