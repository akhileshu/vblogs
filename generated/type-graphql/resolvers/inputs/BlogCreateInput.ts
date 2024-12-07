import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogContentCreateNestedOneWithoutBlogInput } from "../inputs/BlogContentCreateNestedOneWithoutBlogInput";
import { TagsOnBlogsCreateNestedManyWithoutBlogInput } from "../inputs/TagsOnBlogsCreateNestedManyWithoutBlogInput";
import { TopicCreateNestedOneWithoutBlogsInput } from "../inputs/TopicCreateNestedOneWithoutBlogsInput";
import { UserCreateNestedOneWithoutBlogsInput } from "../inputs/UserCreateNestedOneWithoutBlogsInput";
import { VideoCreateNestedOneWithoutBlogInput } from "../inputs/VideoCreateNestedOneWithoutBlogInput";
import { SkillLevel } from "../../enums/SkillLevel";

@TypeGraphQL.InputType("BlogCreateInput", {})
export class BlogCreateInput {
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

  @TypeGraphQL.Field(_type => SkillLevel, {
    nullable: true
  })
  skillLevel?: "BASIC" | "INTERMEDIATE" | "ADVANCED" | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  slug?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  views?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  readTimeInMinutes?: number | undefined;

  @TypeGraphQL.Field(_type => TopicCreateNestedOneWithoutBlogsInput, {
    nullable: true
  })
  topic?: TopicCreateNestedOneWithoutBlogsInput | undefined;

  @TypeGraphQL.Field(_type => TagsOnBlogsCreateNestedManyWithoutBlogInput, {
    nullable: true
  })
  tags?: TagsOnBlogsCreateNestedManyWithoutBlogInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutBlogsInput, {
    nullable: true
  })
  author?: UserCreateNestedOneWithoutBlogsInput | undefined;

  @TypeGraphQL.Field(_type => BlogContentCreateNestedOneWithoutBlogInput, {
    nullable: true
  })
  content?: BlogContentCreateNestedOneWithoutBlogInput | undefined;

  @TypeGraphQL.Field(_type => VideoCreateNestedOneWithoutBlogInput, {
    nullable: true
  })
  Video?: VideoCreateNestedOneWithoutBlogInput | undefined;
}
