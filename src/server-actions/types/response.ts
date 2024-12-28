// import { z, ZodType } from "zod";

export type Response<Data, Schema = undefined> = {
  data?: Data;
  success: boolean;
  errorMsg?: string;
  fieldErrors?: Schema extends undefined
    ? never // If Schema is not provided, no fieldErrors
    : {
        [K in keyof Schema]?: string[] | undefined;
      };
};
/* 

Promise <
  Response<
    Awaited<ReturnType<BlogService["createBlog"]>>,
    z.infer<typeof AddBlogMetadataSchema>
  >; 
*/

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// export type Response<ServiceMethod extends (...args: any) => any, ZodSchema extends ZodType<any, any, any>> = {
//   data?: Awaited<ReturnType<ServiceMethod>>;
//   success: boolean;
//   errorMsg?: string;
//   fieldErrors?: {
//     [K in keyof z.infer<ZodSchema>]?: string[] | undefined;
//   };
// };


