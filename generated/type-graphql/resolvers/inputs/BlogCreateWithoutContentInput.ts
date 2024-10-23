import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagsOnBlogsCreateNestedManyWithoutBlogInput } from "../inputs/TagsOnBlogsCreateNestedManyWithoutBlogInput";
import { TopicCreateNestedOneWithoutBlogsInput } from "../inputs/TopicCreateNestedOneWithoutBlogsInput";
import { UserCreateNestedOneWithoutBlogsInput } from "../inputs/UserCreateNestedOneWithoutBlogsInput";
import { VideoCreateNestedOneWithoutBlogInput } from "../inputs/VideoCreateNestedOneWithoutBlogInput";
import { SkillLevel } from "../../enums/SkillLevel";

@TypeGraphQL.InputType("BlogCreateWithoutContentInput", {})
export class BlogCreateWithoutContentInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => SkillLevel, {
    nullable: true
  })
  skillLevel?: "BASIC" | "INTERMEDIATE" | "ADVANCED" | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  slug!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  views?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  readTimeInMinutes!: number;

  @TypeGraphQL.Field(_type => TopicCreateNestedOneWithoutBlogsInput, {
    nullable: true
  })
  Topic?: TopicCreateNestedOneWithoutBlogsInput | undefined;

  @TypeGraphQL.Field(_type => TagsOnBlogsCreateNestedManyWithoutBlogInput, {
    nullable: true
  })
  Tags?: TagsOnBlogsCreateNestedManyWithoutBlogInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutBlogsInput, {
    nullable: true
  })
  Author?: UserCreateNestedOneWithoutBlogsInput | undefined;

  @TypeGraphQL.Field(_type => VideoCreateNestedOneWithoutBlogInput, {
    nullable: true
  })
  Video?: VideoCreateNestedOneWithoutBlogInput | undefined;
}
