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
