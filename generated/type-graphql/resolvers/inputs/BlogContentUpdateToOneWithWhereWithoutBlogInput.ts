import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogContentUpdateWithoutBlogInput } from "../inputs/BlogContentUpdateWithoutBlogInput";
import { BlogContentWhereInput } from "../inputs/BlogContentWhereInput";

@TypeGraphQL.InputType("BlogContentUpdateToOneWithWhereWithoutBlogInput", {})
export class BlogContentUpdateToOneWithWhereWithoutBlogInput {
  @TypeGraphQL.Field(_type => BlogContentWhereInput, {
    nullable: true
  })
  where?: BlogContentWhereInput | undefined;

  @TypeGraphQL.Field(_type => BlogContentUpdateWithoutBlogInput, {
    nullable: false
  })
  data!: BlogContentUpdateWithoutBlogInput;
}
