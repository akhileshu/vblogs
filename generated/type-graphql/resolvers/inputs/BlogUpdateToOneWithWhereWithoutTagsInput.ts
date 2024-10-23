import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogUpdateWithoutTagsInput } from "../inputs/BlogUpdateWithoutTagsInput";
import { BlogWhereInput } from "../inputs/BlogWhereInput";

@TypeGraphQL.InputType("BlogUpdateToOneWithWhereWithoutTagsInput", {})
export class BlogUpdateToOneWithWhereWithoutTagsInput {
  @TypeGraphQL.Field(_type => BlogWhereInput, {
    nullable: true
  })
  where?: BlogWhereInput | undefined;

  @TypeGraphQL.Field(_type => BlogUpdateWithoutTagsInput, {
    nullable: false
  })
  data!: BlogUpdateWithoutTagsInput;
}
