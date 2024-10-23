import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TopicCreateWithoutUserInterestsInput } from "../inputs/TopicCreateWithoutUserInterestsInput";
import { TopicWhereUniqueInput } from "../inputs/TopicWhereUniqueInput";

@TypeGraphQL.InputType("TopicCreateOrConnectWithoutUserInterestsInput", {})
export class TopicCreateOrConnectWithoutUserInterestsInput {
  @TypeGraphQL.Field(_type => TopicWhereUniqueInput, {
    nullable: false
  })
  where!: TopicWhereUniqueInput;

  @TypeGraphQL.Field(_type => TopicCreateWithoutUserInterestsInput, {
    nullable: false
  })
  create!: TopicCreateWithoutUserInterestsInput;
}
