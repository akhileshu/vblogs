import { z } from "zod";

export type SchemaError<S extends z.ZodType<unknown>> =
  z.inferFormattedError<S>;
