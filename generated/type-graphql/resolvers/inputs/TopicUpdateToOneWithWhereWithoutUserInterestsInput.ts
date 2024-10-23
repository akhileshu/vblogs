import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TopicUpdateWithoutUserInterestsInput } from "../inputs/TopicUpdateWithoutUserInterestsInput";
import { TopicWhereInput } from "../inputs/TopicWhereInput";

@TypeGraphQL.InputType("TopicUpdateToOneWithWhereWithoutUserInterestsInput", {})
export class TopicUpdateToOneWithWhereWithoutUserInterestsInput {
  @TypeGraphQL.Field(_type => TopicWhereInput, {
    nullable: true
  })
  where?: TopicWhereInput | undefined;

  @TypeGraphQL.Field(_type => TopicUpdateWithoutUserInterestsInput, {
    nullable: false
  })
  data!: TopicUpdateWithoutUserInterestsInput;
}
