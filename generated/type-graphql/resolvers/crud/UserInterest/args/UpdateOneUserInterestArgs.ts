import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserInterestUpdateInput } from "../../../inputs/UserInterestUpdateInput";
import { UserInterestWhereUniqueInput } from "../../../inputs/UserInterestWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneUserInterestArgs {
  @TypeGraphQL.Field(_type => UserInterestUpdateInput, {
    nullable: false
  })
  data!: UserInterestUpdateInput;

  @TypeGraphQL.Field(_type => UserInterestWhereUniqueInput, {
    nullable: false
  })
  where!: UserInterestWhereUniqueInput;
}
