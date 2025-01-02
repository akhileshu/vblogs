
import { z } from "zod";

export type Response<Data, Schema = undefined> =
  | Failure<Schema>
  | Success<Data>;

  export type FieldErrors<Schema> = Schema extends undefined
    ? never // If Schema is not provided, no fieldErrors
    : z.ZodError<Schema>["formErrors"]["fieldErrors"];

export type Failure<Schema> = {
  success: false;
  errorMsg: string;
  fieldErrors?: FieldErrors<Schema>;
};

export type Success<Data> = {
  data: Data;
  success: true;
};


