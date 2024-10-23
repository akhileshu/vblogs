import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserInterestCreateInput } from "../../../inputs/UserInterestCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneUserInterestArgs {
  @TypeGraphQL.Field(_type => UserInterestCreateInput, {
    nullable: false
  })
  data!: UserInterestCreateInput;
}
