import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagsOnBlogsCreateNestedManyWithoutTagInput } from "../inputs/TagsOnBlogsCreateNestedManyWithoutTagInput";
import { TopicCreateNestedOneWithoutTagsInput } from "../inputs/TopicCreateNestedOneWithoutTagsInput";

@TypeGraphQL.InputType("TagCreateInput", {})
export class TagCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

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

  @TypeGraphQL.Field(_type => TopicCreateNestedOneWithoutTagsInput, {
    nullable: true
  })
  topic?: TopicCreateNestedOneWithoutTagsInput | undefined;

  @TypeGraphQL.Field(_type => TagsOnBlogsCreateNestedManyWithoutTagInput, {
    nullable: true
  })
  blogs?: TagsOnBlogsCreateNestedManyWithoutTagInput | undefined;
}
