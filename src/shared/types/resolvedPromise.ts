import { catchErrorTyped } from "@/shared/lib/errors/catchErrorTyped";

export type CatchErrorTypedResult<T> = Awaited<
  ReturnType<typeof catchErrorTyped<T, ErrorConstructor>>
>;
