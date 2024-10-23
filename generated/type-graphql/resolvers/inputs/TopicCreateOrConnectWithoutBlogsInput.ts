import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TopicCreateWithoutBlogsInput } from "../inputs/TopicCreateWithoutBlogsInput";
import { TopicWhereUniqueInput } from "../inputs/TopicWhereUniqueInput";

@TypeGraphQL.InputType("TopicCreateOrConnectWithoutBlogsInput", {})
export class TopicCreateOrConnectWithoutBlogsInput {
  @TypeGraphQL.Field(_type => TopicWhereUniqueInput, {
    nullable: false
  })
  where!: TopicWhereUniqueInput;

  @TypeGraphQL.Field(_type => TopicCreateWithoutBlogsInput, {
    nullable: false
  })
  create!: TopicCreateWithoutBlogsInput;
}
