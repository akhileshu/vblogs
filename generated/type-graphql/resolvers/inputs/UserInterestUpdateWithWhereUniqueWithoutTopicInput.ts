import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserInterestUpdateWithoutTopicInput } from "../inputs/UserInterestUpdateWithoutTopicInput";
import { UserInterestWhereUniqueInput } from "../inputs/UserInterestWhereUniqueInput";

@TypeGraphQL.InputType("UserInterestUpdateWithWhereUniqueWithoutTopicInput", {})
export class UserInterestUpdateWithWhereUniqueWithoutTopicInput {
  @TypeGraphQL.Field(_type => UserInterestWhereUniqueInput, {
    nullable: false
  })
  where!: UserInterestWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserInterestUpdateWithoutTopicInput, {
    nullable: false
  })
  data!: UserInterestUpdateWithoutTopicInput;
}
