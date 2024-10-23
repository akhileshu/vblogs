import { Field, ObjectType } from "type-graphql";
import type { BaseResponseOptions } from "./types";

@ObjectType()
export abstract class BaseResponse<T> {
  @Field(() => Boolean)
  success: boolean;

  @Field(() => String, { nullable: true })
  message: string;

  @Field(() => String, { nullable: true })
  status: string;

  constructor({ success, message, status }: BaseResponseOptions<T>) {
    this.success = success;

    this.message =
      message ||
      (success ? "Operation completed successfully" : "Operation failed");

    this.status = status || (success ? "SUCCESS" : "ERROR");
  }
}
