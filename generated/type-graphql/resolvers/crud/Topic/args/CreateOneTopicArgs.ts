import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TopicCreateInput } from "../../../inputs/TopicCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneTopicArgs {
  @TypeGraphQL.Field(_type => TopicCreateInput, {
    nullable: false
  })
  data!: TopicCreateInput;
}
