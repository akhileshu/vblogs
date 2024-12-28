export const validateRequiredFields = (fields: Record<string, unknown>) => {
  const missingFields = Object.keys(fields).filter((key) => !fields[key]);
  if (missingFields.length > 0) {
    throw new Error(`Missing required fields: ${missingFields.join(", ")}`);
  }
};
