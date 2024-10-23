import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TopicCreateWithoutTechnologyInput } from "../inputs/TopicCreateWithoutTechnologyInput";
import { TopicUpdateWithoutTechnologyInput } from "../inputs/TopicUpdateWithoutTechnologyInput";
import { TopicWhereUniqueInput } from "../inputs/TopicWhereUniqueInput";

@TypeGraphQL.InputType("TopicUpsertWithWhereUniqueWithoutTechnologyInput", {})
export class TopicUpsertWithWhereUniqueWithoutTechnologyInput {
  @TypeGraphQL.Field(_type => TopicWhereUniqueInput, {
    nullable: false
  })
  where!: TopicWhereUniqueInput;

  @TypeGraphQL.Field(_type => TopicUpdateWithoutTechnologyInput, {
    nullable: false
  })
  update!: TopicUpdateWithoutTechnologyInput;

  @TypeGraphQL.Field(_type => TopicCreateWithoutTechnologyInput, {
    nullable: false
  })
  create!: TopicCreateWithoutTechnologyInput;
}
