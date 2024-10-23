import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TopicCreateWithoutBlogsInput } from "../inputs/TopicCreateWithoutBlogsInput";
import { TopicUpdateWithoutBlogsInput } from "../inputs/TopicUpdateWithoutBlogsInput";
import { TopicWhereInput } from "../inputs/TopicWhereInput";

@TypeGraphQL.InputType("TopicUpsertWithoutBlogsInput", {})
export class TopicUpsertWithoutBlogsInput {
  @TypeGraphQL.Field(_type => TopicUpdateWithoutBlogsInput, {
    nullable: false
  })
  update!: TopicUpdateWithoutBlogsInput;

  @TypeGraphQL.Field(_type => TopicCreateWithoutBlogsInput, {
    nullable: false
  })
  create!: TopicCreateWithoutBlogsInput;

  @TypeGraphQL.Field(_type => TopicWhereInput, {
    nullable: true
  })
  where?: TopicWhereInput | undefined;
}
