import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagsOnBlogsUpdateWithoutTagInput } from "../inputs/TagsOnBlogsUpdateWithoutTagInput";
import { TagsOnBlogsWhereUniqueInput } from "../inputs/TagsOnBlogsWhereUniqueInput";

@TypeGraphQL.InputType("TagsOnBlogsUpdateWithWhereUniqueWithoutTagInput", {})
export class TagsOnBlogsUpdateWithWhereUniqueWithoutTagInput {
  @TypeGraphQL.Field(_type => TagsOnBlogsWhereUniqueInput, {
    nullable: false
  })
  where!: TagsOnBlogsWhereUniqueInput;

  @TypeGraphQL.Field(_type => TagsOnBlogsUpdateWithoutTagInput, {
    nullable: false
  })
  data!: TagsOnBlogsUpdateWithoutTagInput;
}
