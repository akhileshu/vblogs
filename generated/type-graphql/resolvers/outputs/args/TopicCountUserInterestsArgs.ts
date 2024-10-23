import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserInterestWhereInput } from "../../inputs/UserInterestWhereInput";

@TypeGraphQL.ArgsType()
export class TopicCountUserInterestsArgs {
  @TypeGraphQL.Field(_type => UserInterestWhereInput, {
    nullable: true
  })
  where?: UserInterestWhereInput | undefined;
}
