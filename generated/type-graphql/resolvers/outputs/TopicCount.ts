import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TopicCountBlogsArgs } from "./args/TopicCountBlogsArgs";
import { TopicCountTagsArgs } from "./args/TopicCountTagsArgs";
import { TopicCountUserInterestsArgs } from "./args/TopicCountUserInterestsArgs";

@TypeGraphQL.ObjectType("TopicCount", {})
export class TopicCount {
  Blogs!: number;
  tags!: number;
  userInterests!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "Blogs",
    nullable: false
  })
  getBlogs(@TypeGraphQL.Root() root: TopicCount, @TypeGraphQL.Args() args: TopicCountBlogsArgs): number {
    return root.Blogs;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "tags",
    nullable: false
  })
  getTags(@TypeGraphQL.Root() root: TopicCount, @TypeGraphQL.Args() args: TopicCountTagsArgs): number {
    return root.tags;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "userInterests",
    nullable: false
  })
  getUserInterests(@TypeGraphQL.Root() root: TopicCount, @TypeGraphQL.Args() args: TopicCountUserInterestsArgs): number {
    return root.userInterests;
  }
}
