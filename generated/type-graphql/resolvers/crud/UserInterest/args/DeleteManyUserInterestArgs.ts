import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserInterestWhereInput } from "../../../inputs/UserInterestWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyUserInterestArgs {
  @TypeGraphQL.Field(_type => UserInterestWhereInput, {
    nullable: true
  })
  where?: UserInterestWhereInput | undefined;
}
