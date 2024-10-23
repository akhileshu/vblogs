import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogContentCreateOrConnectWithoutBlogInput } from "../inputs/BlogContentCreateOrConnectWithoutBlogInput";
import { BlogContentCreateWithoutBlogInput } from "../inputs/BlogContentCreateWithoutBlogInput";
import { BlogContentUpdateToOneWithWhereWithoutBlogInput } from "../inputs/BlogContentUpdateToOneWithWhereWithoutBlogInput";
import { BlogContentUpsertWithoutBlogInput } from "../inputs/BlogContentUpsertWithoutBlogInput";
import { BlogContentWhereInput } from "../inputs/BlogContentWhereInput";
import { BlogContentWhereUniqueInput } from "../inputs/BlogContentWhereUniqueInput";

@TypeGraphQL.InputType("BlogContentUpdateOneWithoutBlogNestedInput", {})
export class BlogContentUpdateOneWithoutBlogNestedInput {
  @TypeGraphQL.Field(_type => BlogContentCreateWithoutBlogInput, {
    nullable: true
  })
  create?: BlogContentCreateWithoutBlogInput | undefined;

  @TypeGraphQL.Field(_type => BlogContentCreateOrConnectWithoutBlogInput, {
    nullable: true
  })
  connectOrCreate?: BlogContentCreateOrConnectWithoutBlogInput | undefined;

  @TypeGraphQL.Field(_type => BlogContentUpsertWithoutBlogInput, {
    nullable: true
  })
  upsert?: BlogContentUpsertWithoutBlogInput | undefined;

  @TypeGraphQL.Field(_type => BlogContentWhereInput, {
    nullable: true
  })
  disconnect?: BlogContentWhereInput | undefined;

  @TypeGraphQL.Field(_type => BlogContentWhereInput, {
    nullable: true
  })
  delete?: BlogContentWhereInput | undefined;

  @TypeGraphQL.Field(_type => BlogContentWhereUniqueInput, {
    nullable: true
  })
  connect?: BlogContentWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => BlogContentUpdateToOneWithWhereWithoutBlogInput, {
    nullable: true
  })
  update?: BlogContentUpdateToOneWithWhereWithoutBlogInput | undefined;
}
