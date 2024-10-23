import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagUpdateWithoutTopicInput } from "../inputs/TagUpdateWithoutTopicInput";
import { TagWhereUniqueInput } from "../inputs/TagWhereUniqueInput";

@TypeGraphQL.InputType("TagUpdateWithWhereUniqueWithoutTopicInput", {})
export class TagUpdateWithWhereUniqueWithoutTopicInput {
  @TypeGraphQL.Field(_type => TagWhereUniqueInput, {
    nullable: false
  })
  where!: TagWhereUniqueInput;

  @TypeGraphQL.Field(_type => TagUpdateWithoutTopicInput, {
    nullable: false
  })
  data!: TagUpdateWithoutTopicInput;
}
