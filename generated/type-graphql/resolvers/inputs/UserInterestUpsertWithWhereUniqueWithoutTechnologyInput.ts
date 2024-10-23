import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserInterestCreateWithoutTechnologyInput } from "../inputs/UserInterestCreateWithoutTechnologyInput";
import { UserInterestUpdateWithoutTechnologyInput } from "../inputs/UserInterestUpdateWithoutTechnologyInput";
import { UserInterestWhereUniqueInput } from "../inputs/UserInterestWhereUniqueInput";

@TypeGraphQL.InputType("UserInterestUpsertWithWhereUniqueWithoutTechnologyInput", {})
export class UserInterestUpsertWithWhereUniqueWithoutTechnologyInput {
  @TypeGraphQL.Field(_type => UserInterestWhereUniqueInput, {
    nullable: false
  })
  where!: UserInterestWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserInterestUpdateWithoutTechnologyInput, {
    nullable: false
  })
  update!: UserInterestUpdateWithoutTechnologyInput;

  @TypeGraphQL.Field(_type => UserInterestCreateWithoutTechnologyInput, {
    nullable: false
  })
  create!: UserInterestCreateWithoutTechnologyInput;
}
