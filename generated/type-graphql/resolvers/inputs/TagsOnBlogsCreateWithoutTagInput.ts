import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogCreateNestedOneWithoutTagsInput } from "../inputs/BlogCreateNestedOneWithoutTagsInput";

@TypeGraphQL.InputType("TagsOnBlogsCreateWithoutTagInput", {})
export class TagsOnBlogsCreateWithoutTagInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => BlogCreateNestedOneWithoutTagsInput, {
    nullable: false
  })
  Blog!: BlogCreateNestedOneWithoutTagsInput;
}
