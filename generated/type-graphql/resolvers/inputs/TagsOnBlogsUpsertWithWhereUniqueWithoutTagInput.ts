import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagsOnBlogsCreateWithoutTagInput } from "../inputs/TagsOnBlogsCreateWithoutTagInput";
import { TagsOnBlogsUpdateWithoutTagInput } from "../inputs/TagsOnBlogsUpdateWithoutTagInput";
import { TagsOnBlogsWhereUniqueInput } from "../inputs/TagsOnBlogsWhereUniqueInput";

@TypeGraphQL.InputType("TagsOnBlogsUpsertWithWhereUniqueWithoutTagInput", {})
export class TagsOnBlogsUpsertWithWhereUniqueWithoutTagInput {
  @TypeGraphQL.Field(_type => TagsOnBlogsWhereUniqueInput, {
    nullable: false
  })
  where!: TagsOnBlogsWhereUniqueInput;

  @TypeGraphQL.Field(_type => TagsOnBlogsUpdateWithoutTagInput, {
    nullable: false
  })
  update!: TagsOnBlogsUpdateWithoutTagInput;

  @TypeGraphQL.Field(_type => TagsOnBlogsCreateWithoutTagInput, {
    nullable: false
  })
  create!: TagsOnBlogsCreateWithoutTagInput;
}
