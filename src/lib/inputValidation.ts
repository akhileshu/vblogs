// utils/validator.ts

import { ZodSchema } from "zod";



export const validateInput = <T>(
  schema: ZodSchema<T>,
  params: unknown
)=> {
  const {success,data,error} = schema.safeParse(params);

  if (!success) {
    return {success,error}
  }
return { success, data };
};
