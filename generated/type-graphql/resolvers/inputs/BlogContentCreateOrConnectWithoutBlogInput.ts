import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogContentCreateWithoutBlogInput } from "../inputs/BlogContentCreateWithoutBlogInput";
import { BlogContentWhereUniqueInput } from "../inputs/BlogContentWhereUniqueInput";

@TypeGraphQL.InputType("BlogContentCreateOrConnectWithoutBlogInput", {})
export class BlogContentCreateOrConnectWithoutBlogInput {
  @TypeGraphQL.Field(_type => BlogContentWhereUniqueInput, {
    nullable: false
  })
  where!: BlogContentWhereUniqueInput;

  @TypeGraphQL.Field(_type => BlogContentCreateWithoutBlogInput, {
    nullable: false
  })
  create!: BlogContentCreateWithoutBlogInput;
}
