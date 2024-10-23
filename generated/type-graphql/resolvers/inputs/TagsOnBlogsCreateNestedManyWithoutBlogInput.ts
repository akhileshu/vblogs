import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagsOnBlogsCreateManyBlogInputEnvelope } from "../inputs/TagsOnBlogsCreateManyBlogInputEnvelope";
import { TagsOnBlogsCreateOrConnectWithoutBlogInput } from "../inputs/TagsOnBlogsCreateOrConnectWithoutBlogInput";
import { TagsOnBlogsCreateWithoutBlogInput } from "../inputs/TagsOnBlogsCreateWithoutBlogInput";
import { TagsOnBlogsWhereUniqueInput } from "../inputs/TagsOnBlogsWhereUniqueInput";

@TypeGraphQL.InputType("TagsOnBlogsCreateNestedManyWithoutBlogInput", {})
export class TagsOnBlogsCreateNestedManyWithoutBlogInput {
  @TypeGraphQL.Field(_type => [TagsOnBlogsCreateWithoutBlogInput], {
    nullable: true
  })
  create?: TagsOnBlogsCreateWithoutBlogInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagsOnBlogsCreateOrConnectWithoutBlogInput], {
    nullable: true
  })
  connectOrCreate?: TagsOnBlogsCreateOrConnectWithoutBlogInput[] | undefined;

  @TypeGraphQL.Field(_type => TagsOnBlogsCreateManyBlogInputEnvelope, {
    nullable: true
  })
  createMany?: TagsOnBlogsCreateManyBlogInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TagsOnBlogsWhereUniqueInput], {
    nullable: true
  })
  connect?: TagsOnBlogsWhereUniqueInput[] | undefined;
}
