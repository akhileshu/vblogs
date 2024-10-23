import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserInterestCreateWithoutTopicInput } from "../inputs/UserInterestCreateWithoutTopicInput";
import { UserInterestUpdateWithoutTopicInput } from "../inputs/UserInterestUpdateWithoutTopicInput";
import { UserInterestWhereUniqueInput } from "../inputs/UserInterestWhereUniqueInput";

@TypeGraphQL.InputType("UserInterestUpsertWithWhereUniqueWithoutTopicInput", {})
export class UserInterestUpsertWithWhereUniqueWithoutTopicInput {
  @TypeGraphQL.Field(_type => UserInterestWhereUniqueInput, {
    nullable: false
  })
  where!: UserInterestWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserInterestUpdateWithoutTopicInput, {
    nullable: false
  })
  update!: UserInterestUpdateWithoutTopicInput;

  @TypeGraphQL.Field(_type => UserInterestCreateWithoutTopicInput, {
    nullable: false
  })
  create!: UserInterestCreateWithoutTopicInput;
}
