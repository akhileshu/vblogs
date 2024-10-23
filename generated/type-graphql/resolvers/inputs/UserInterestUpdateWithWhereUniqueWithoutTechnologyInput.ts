import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserInterestUpdateWithoutTechnologyInput } from "../inputs/UserInterestUpdateWithoutTechnologyInput";
import { UserInterestWhereUniqueInput } from "../inputs/UserInterestWhereUniqueInput";

@TypeGraphQL.InputType("UserInterestUpdateWithWhereUniqueWithoutTechnologyInput", {})
export class UserInterestUpdateWithWhereUniqueWithoutTechnologyInput {
  @TypeGraphQL.Field(_type => UserInterestWhereUniqueInput, {
    nullable: false
  })
  where!: UserInterestWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserInterestUpdateWithoutTechnologyInput, {
    nullable: false
  })
  data!: UserInterestUpdateWithoutTechnologyInput;
}
