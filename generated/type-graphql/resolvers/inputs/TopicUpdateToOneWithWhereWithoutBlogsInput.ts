import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TopicUpdateWithoutBlogsInput } from "../inputs/TopicUpdateWithoutBlogsInput";
import { TopicWhereInput } from "../inputs/TopicWhereInput";

@TypeGraphQL.InputType("TopicUpdateToOneWithWhereWithoutBlogsInput", {})
export class TopicUpdateToOneWithWhereWithoutBlogsInput {
  @TypeGraphQL.Field(_type => TopicWhereInput, {
    nullable: true
  })
  where?: TopicWhereInput | undefined;

  @TypeGraphQL.Field(_type => TopicUpdateWithoutBlogsInput, {
    nullable: false
  })
  data!: TopicUpdateWithoutBlogsInput;
}
