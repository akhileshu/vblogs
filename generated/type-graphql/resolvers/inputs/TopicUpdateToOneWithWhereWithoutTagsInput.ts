import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TopicUpdateWithoutTagsInput } from "../inputs/TopicUpdateWithoutTagsInput";
import { TopicWhereInput } from "../inputs/TopicWhereInput";

@TypeGraphQL.InputType("TopicUpdateToOneWithWhereWithoutTagsInput", {})
export class TopicUpdateToOneWithWhereWithoutTagsInput {
  @TypeGraphQL.Field(_type => TopicWhereInput, {
    nullable: true
  })
  where?: TopicWhereInput | undefined;

  @TypeGraphQL.Field(_type => TopicUpdateWithoutTagsInput, {
    nullable: false
  })
  data!: TopicUpdateWithoutTagsInput;
}
