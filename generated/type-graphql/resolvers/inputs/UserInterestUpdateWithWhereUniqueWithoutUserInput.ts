import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserInterestUpdateWithoutUserInput } from "../inputs/UserInterestUpdateWithoutUserInput";
import { UserInterestWhereUniqueInput } from "../inputs/UserInterestWhereUniqueInput";

@TypeGraphQL.InputType("UserInterestUpdateWithWhereUniqueWithoutUserInput", {})
export class UserInterestUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => UserInterestWhereUniqueInput, {
    nullable: false
  })
  where!: UserInterestWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserInterestUpdateWithoutUserInput, {
    nullable: false
  })
  data!: UserInterestUpdateWithoutUserInput;
}
