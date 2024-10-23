import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserInterestWhereUniqueInput } from "../../../inputs/UserInterestWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueUserInterestArgs {
  @TypeGraphQL.Field(_type => UserInterestWhereUniqueInput, {
    nullable: false
  })
  where!: UserInterestWhereUniqueInput;
}
