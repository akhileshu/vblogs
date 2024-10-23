import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogCreateNestedManyWithoutTopicInput } from "../inputs/BlogCreateNestedManyWithoutTopicInput";
import { TagCreateNestedManyWithoutTopicInput } from "../inputs/TagCreateNestedManyWithoutTopicInput";
import { TechnologyCreateNestedOneWithoutTopicsInput } from "../inputs/TechnologyCreateNestedOneWithoutTopicsInput";

@TypeGraphQL.InputType("TopicCreateWithoutUserInterestsInput", {})
export class TopicCreateWithoutUserInterestsInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => TechnologyCreateNestedOneWithoutTopicsInput, {
    nullable: true
  })
  Technology?: TechnologyCreateNestedOneWithoutTopicsInput | undefined;

  @TypeGraphQL.Field(_type => BlogCreateNestedManyWithoutTopicInput, {
    nullable: true
  })
  Blogs?: BlogCreateNestedManyWithoutTopicInput | undefined;

  @TypeGraphQL.Field(_type => TagCreateNestedManyWithoutTopicInput, {
    nullable: true
  })
  tags?: TagCreateNestedManyWithoutTopicInput | undefined;
}
