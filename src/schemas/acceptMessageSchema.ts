import { z } from "zod";

export const acceptMessageSchemas = z.object({
  acceptMessages: z.boolean(),
});
