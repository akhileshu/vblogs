import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogCreateWithoutTopicInput } from "../inputs/BlogCreateWithoutTopicInput";
import { BlogWhereUniqueInput } from "../inputs/BlogWhereUniqueInput";

@TypeGraphQL.InputType("BlogCreateOrConnectWithoutTopicInput", {})
export class BlogCreateOrConnectWithoutTopicInput {
  @TypeGraphQL.Field(_type => BlogWhereUniqueInput, {
    nullable: false
  })
  where!: BlogWhereUniqueInput;

  @TypeGraphQL.Field(_type => BlogCreateWithoutTopicInput, {
    nullable: false
  })
  create!: BlogCreateWithoutTopicInput;
}
