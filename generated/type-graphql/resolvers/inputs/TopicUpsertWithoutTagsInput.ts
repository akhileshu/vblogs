import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TopicCreateWithoutTagsInput } from "../inputs/TopicCreateWithoutTagsInput";
import { TopicUpdateWithoutTagsInput } from "../inputs/TopicUpdateWithoutTagsInput";
import { TopicWhereInput } from "../inputs/TopicWhereInput";

@TypeGraphQL.InputType("TopicUpsertWithoutTagsInput", {})
export class TopicUpsertWithoutTagsInput {
  @TypeGraphQL.Field(_type => TopicUpdateWithoutTagsInput, {
    nullable: false
  })
  update!: TopicUpdateWithoutTagsInput;

  @TypeGraphQL.Field(_type => TopicCreateWithoutTagsInput, {
    nullable: false
  })
  create!: TopicCreateWithoutTagsInput;

  @TypeGraphQL.Field(_type => TopicWhereInput, {
    nullable: true
  })
  where?: TopicWhereInput | undefined;
}
