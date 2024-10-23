import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TopicCreateWithoutUserInterestsInput } from "../inputs/TopicCreateWithoutUserInterestsInput";
import { TopicUpdateWithoutUserInterestsInput } from "../inputs/TopicUpdateWithoutUserInterestsInput";
import { TopicWhereInput } from "../inputs/TopicWhereInput";

@TypeGraphQL.InputType("TopicUpsertWithoutUserInterestsInput", {})
export class TopicUpsertWithoutUserInterestsInput {
  @TypeGraphQL.Field(_type => TopicUpdateWithoutUserInterestsInput, {
    nullable: false
  })
  update!: TopicUpdateWithoutUserInterestsInput;

  @TypeGraphQL.Field(_type => TopicCreateWithoutUserInterestsInput, {
    nullable: false
  })
  create!: TopicCreateWithoutUserInterestsInput;

  @TypeGraphQL.Field(_type => TopicWhereInput, {
    nullable: true
  })
  where?: TopicWhereInput | undefined;
}
