import { Field, ObjectType } from "type-graphql";
import type { BaseResponse } from "./types";

type GraphQLSchemaClass<T> = new () => T;

interface ItemResponse<T> extends BaseResponse {
  data: T | null;
}
interface ListResponse<T> extends BaseResponse {
  data: T[] | null;
}

@ObjectType()
abstract class BaseResponseClass {
  @Field(() => Boolean)
  success: boolean;

  @Field(() => String, { nullable: true })
  message: string;

  @Field(() => String, { nullable: true })
  status: string;

  constructor({ success, message, status }: BaseResponse) {
    this.success = success;

    this.message =
      message ||
      (success ? "Operation completed successfully" : "Operation failed");

    this.status = status || (success ? "SUCCESS" : "ERROR");
  }
}

// Item response creator with generics
export function createItemResponse<T>(classRef: GraphQLSchemaClass<T>) {
  @ObjectType()
  class ItemResponseClass extends BaseResponseClass {
    @Field(() => classRef, { nullable: true })
    data: T | null;

    constructor(options: ItemResponse<T>) {
      super(options);
      this.data = options.data ?? null;
    }
  }
  return ItemResponseClass;
}

// List response creator with generics
export function createListResponse<T>(classRef: GraphQLSchemaClass<T>) {
  @ObjectType()
  class ListResponseClass extends BaseResponseClass {
    @Field(() => [classRef], { nullable: true })
    data: T[] | null;

    constructor(options: ListResponse<T>) {
      super(options);
      this.data = options.data ?? null;
    }
  }
  return ListResponseClass;
}
