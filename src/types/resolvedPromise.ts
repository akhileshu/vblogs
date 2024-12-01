import { catchErrorTyped } from "@/lib/errors/catchErrorTyped";

export type CatchErrorTypedResult<T> = Awaited<
  ReturnType<typeof catchErrorTyped<T, ErrorConstructor>>
>;
