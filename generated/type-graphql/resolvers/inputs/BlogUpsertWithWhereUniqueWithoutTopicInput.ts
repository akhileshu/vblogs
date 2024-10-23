import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogCreateWithoutTopicInput } from "../inputs/BlogCreateWithoutTopicInput";
import { BlogUpdateWithoutTopicInput } from "../inputs/BlogUpdateWithoutTopicInput";
import { BlogWhereUniqueInput } from "../inputs/BlogWhereUniqueInput";

@TypeGraphQL.InputType("BlogUpsertWithWhereUniqueWithoutTopicInput", {})
export class BlogUpsertWithWhereUniqueWithoutTopicInput {
  @TypeGraphQL.Field(_type => BlogWhereUniqueInput, {
    nullable: false
  })
  where!: BlogWhereUniqueInput;

  @TypeGraphQL.Field(_type => BlogUpdateWithoutTopicInput, {
    nullable: false
  })
  update!: BlogUpdateWithoutTopicInput;

  @TypeGraphQL.Field(_type => BlogCreateWithoutTopicInput, {
    nullable: false
  })
  create!: BlogCreateWithoutTopicInput;
}
