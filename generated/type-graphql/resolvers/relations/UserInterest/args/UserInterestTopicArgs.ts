import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TopicWhereInput } from "../../../inputs/TopicWhereInput";

@TypeGraphQL.ArgsType()
export class UserInterestTopicArgs {
  @TypeGraphQL.Field(_type => TopicWhereInput, {
    nullable: true
  })
  where?: TopicWhereInput | undefined;
}
