import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TopicWhereInput } from "../inputs/TopicWhereInput";

@TypeGraphQL.InputType("TopicNullableRelationFilter", {})
export class TopicNullableRelationFilter {
  @TypeGraphQL.Field(_type => TopicWhereInput, {
    nullable: true
  })
  is?: TopicWhereInput | undefined;

  @TypeGraphQL.Field(_type => TopicWhereInput, {
    nullable: true
  })
  isNot?: TopicWhereInput | undefined;
}
