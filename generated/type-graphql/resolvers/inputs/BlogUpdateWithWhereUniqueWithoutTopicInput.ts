import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogUpdateWithoutTopicInput } from "../inputs/BlogUpdateWithoutTopicInput";
import { BlogWhereUniqueInput } from "../inputs/BlogWhereUniqueInput";

@TypeGraphQL.InputType("BlogUpdateWithWhereUniqueWithoutTopicInput", {})
export class BlogUpdateWithWhereUniqueWithoutTopicInput {
  @TypeGraphQL.Field(_type => BlogWhereUniqueInput, {
    nullable: false
  })
  where!: BlogWhereUniqueInput;

  @TypeGraphQL.Field(_type => BlogUpdateWithoutTopicInput, {
    nullable: false
  })
  data!: BlogUpdateWithoutTopicInput;
}
