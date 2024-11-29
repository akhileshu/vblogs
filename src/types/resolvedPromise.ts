// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type CatchErrorTypedReturn<F extends (...args: any[]) => any> = [
  Error | undefined,
  Awaited<ReturnType<F>> | undefined
];
