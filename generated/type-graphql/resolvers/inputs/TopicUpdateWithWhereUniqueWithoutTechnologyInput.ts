import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TopicUpdateWithoutTechnologyInput } from "../inputs/TopicUpdateWithoutTechnologyInput";
import { TopicWhereUniqueInput } from "../inputs/TopicWhereUniqueInput";

@TypeGraphQL.InputType("TopicUpdateWithWhereUniqueWithoutTechnologyInput", {})
export class TopicUpdateWithWhereUniqueWithoutTechnologyInput {
  @TypeGraphQL.Field(_type => TopicWhereUniqueInput, {
    nullable: false
  })
  where!: TopicWhereUniqueInput;

  @TypeGraphQL.Field(_type => TopicUpdateWithoutTechnologyInput, {
    nullable: false
  })
  data!: TopicUpdateWithoutTechnologyInput;
}
