export function areAllTruthy(values:unknown[]) {
  return values.every((value) => !!value);
}
