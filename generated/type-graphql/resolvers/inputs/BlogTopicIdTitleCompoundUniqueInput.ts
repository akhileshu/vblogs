import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("BlogTopicIdTitleCompoundUniqueInput", {})
export class BlogTopicIdTitleCompoundUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  topicId!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;
}