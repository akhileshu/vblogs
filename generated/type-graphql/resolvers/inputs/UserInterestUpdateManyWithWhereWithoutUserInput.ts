import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserInterestScalarWhereInput } from "../inputs/UserInterestScalarWhereInput";
import { UserInterestUpdateManyMutationInput } from "../inputs/UserInterestUpdateManyMutationInput";

@TypeGraphQL.InputType("UserInterestUpdateManyWithWhereWithoutUserInput", {})
export class UserInterestUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => UserInterestScalarWhereInput, {
    nullable: false
  })
  where!: UserInterestScalarWhereInput;

  @TypeGraphQL.Field(_type => UserInterestUpdateManyMutationInput, {
    nullable: false
  })
  data!: UserInterestUpdateManyMutationInput;
}
