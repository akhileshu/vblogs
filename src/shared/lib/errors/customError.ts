export class customError extends Error {
    name= "customError"
}

// errors.ts
export class NotFoundError extends Error {
  constructor(message?: string) {
    super(message || "Resource not found");
    this.name = "NotFoundError";
  }
}

export class ValidationError extends Error {
  constructor(message?: string) {
    super(message || "Invalid data");
    this.name = "ValidationError";
  }
}

export class FieldsError extends Error {
  fieldErrors: Record<string, string[]>;
  constructor(fieldErrors: Record<string, string[]>,message?: string ) {
    super(message || "Bussiness Logic Validation failed for the fields");
    this.name = "FieldsError";
    this.fieldErrors = fieldErrors;
  }
}
