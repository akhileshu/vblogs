import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogPart } from "../../enums/BlogPart";

@TypeGraphQL.InputType("EnumBlogPartFieldUpdateOperationsInput", {})
export class EnumBlogPartFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => BlogPart, {
    nullable: true
  })
  set?: "INTRO" | "IMPLEMENTATION" | "ADVANCED" | undefined;
}
