import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserInterestCreateInput } from "../../../inputs/UserInterestCreateInput";
import { UserInterestUpdateInput } from "../../../inputs/UserInterestUpdateInput";
import { UserInterestWhereUniqueInput } from "../../../inputs/UserInterestWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneUserInterestArgs {
  @TypeGraphQL.Field(_type => UserInterestWhereUniqueInput, {
    nullable: false
  })
  where!: UserInterestWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserInterestCreateInput, {
    nullable: false
  })
  create!: UserInterestCreateInput;

  @TypeGraphQL.Field(_type => UserInterestUpdateInput, {
    nullable: false
  })
  update!: UserInterestUpdateInput;
}
