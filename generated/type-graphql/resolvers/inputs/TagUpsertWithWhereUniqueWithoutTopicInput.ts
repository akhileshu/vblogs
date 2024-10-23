import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateWithoutTopicInput } from "../inputs/TagCreateWithoutTopicInput";
import { TagUpdateWithoutTopicInput } from "../inputs/TagUpdateWithoutTopicInput";
import { TagWhereUniqueInput } from "../inputs/TagWhereUniqueInput";

@TypeGraphQL.InputType("TagUpsertWithWhereUniqueWithoutTopicInput", {})
export class TagUpsertWithWhereUniqueWithoutTopicInput {
  @TypeGraphQL.Field(_type => TagWhereUniqueInput, {
    nullable: false
  })
  where!: TagWhereUniqueInput;

  @TypeGraphQL.Field(_type => TagUpdateWithoutTopicInput, {
    nullable: false
  })
  update!: TagUpdateWithoutTopicInput;

  @TypeGraphQL.Field(_type => TagCreateWithoutTopicInput, {
    nullable: false
  })
  create!: TagCreateWithoutTopicInput;
}
