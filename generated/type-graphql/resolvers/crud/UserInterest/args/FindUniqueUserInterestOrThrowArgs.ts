import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserInterestWhereUniqueInput } from "../../../inputs/UserInterestWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueUserInterestOrThrowArgs {
  @TypeGraphQL.Field(_type => UserInterestWhereUniqueInput, {
    nullable: false
  })
  where!: UserInterestWhereUniqueInput;
}
