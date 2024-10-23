import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserInterestWhereUniqueInput } from "../../../inputs/UserInterestWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneUserInterestArgs {
  @TypeGraphQL.Field(_type => UserInterestWhereUniqueInput, {
    nullable: false
  })
  where!: UserInterestWhereUniqueInput;
}
