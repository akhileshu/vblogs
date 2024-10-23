import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogCreateWithoutTagsInput } from "../inputs/BlogCreateWithoutTagsInput";
import { BlogUpdateWithoutTagsInput } from "../inputs/BlogUpdateWithoutTagsInput";
import { BlogWhereInput } from "../inputs/BlogWhereInput";

@TypeGraphQL.InputType("BlogUpsertWithoutTagsInput", {})
export class BlogUpsertWithoutTagsInput {
  @TypeGraphQL.Field(_type => BlogUpdateWithoutTagsInput, {
    nullable: false
  })
  update!: BlogUpdateWithoutTagsInput;

  @TypeGraphQL.Field(_type => BlogCreateWithoutTagsInput, {
    nullable: false
  })
  create!: BlogCreateWithoutTagsInput;

  @TypeGraphQL.Field(_type => BlogWhereInput, {
    nullable: true
  })
  where?: BlogWhereInput | undefined;
}
