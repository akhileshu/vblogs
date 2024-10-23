import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserInterestUpdateManyMutationInput } from "../../../inputs/UserInterestUpdateManyMutationInput";
import { UserInterestWhereInput } from "../../../inputs/UserInterestWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyUserInterestArgs {
  @TypeGraphQL.Field(_type => UserInterestUpdateManyMutationInput, {
    nullable: false
  })
  data!: UserInterestUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => UserInterestWhereInput, {
    nullable: true
  })
  where?: UserInterestWhereInput | undefined;
}
