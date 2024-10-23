import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogContentCreateOrConnectWithoutBlogInput } from "../inputs/BlogContentCreateOrConnectWithoutBlogInput";
import { BlogContentCreateWithoutBlogInput } from "../inputs/BlogContentCreateWithoutBlogInput";
import { BlogContentWhereUniqueInput } from "../inputs/BlogContentWhereUniqueInput";

@TypeGraphQL.InputType("BlogContentCreateNestedOneWithoutBlogInput", {})
export class BlogContentCreateNestedOneWithoutBlogInput {
  @TypeGraphQL.Field(_type => BlogContentCreateWithoutBlogInput, {
    nullable: true
  })
  create?: BlogContentCreateWithoutBlogInput | undefined;

  @TypeGraphQL.Field(_type => BlogContentCreateOrConnectWithoutBlogInput, {
    nullable: true
  })
  connectOrCreate?: BlogContentCreateOrConnectWithoutBlogInput | undefined;

  @TypeGraphQL.Field(_type => BlogContentWhereUniqueInput, {
    nullable: true
  })
  connect?: BlogContentWhereUniqueInput | undefined;
}
