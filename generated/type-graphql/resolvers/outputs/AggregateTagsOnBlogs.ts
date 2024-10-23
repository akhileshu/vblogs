import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagsOnBlogsAvgAggregate } from "../outputs/TagsOnBlogsAvgAggregate";
import { TagsOnBlogsCountAggregate } from "../outputs/TagsOnBlogsCountAggregate";
import { TagsOnBlogsMaxAggregate } from "../outputs/TagsOnBlogsMaxAggregate";
import { TagsOnBlogsMinAggregate } from "../outputs/TagsOnBlogsMinAggregate";
import { TagsOnBlogsSumAggregate } from "../outputs/TagsOnBlogsSumAggregate";

@TypeGraphQL.ObjectType("AggregateTagsOnBlogs", {})
export class AggregateTagsOnBlogs {
  @TypeGraphQL.Field(_type => TagsOnBlogsCountAggregate, {
    nullable: true
  })
  _count!: TagsOnBlogsCountAggregate | null;

  @TypeGraphQL.Field(_type => TagsOnBlogsAvgAggregate, {
    nullable: true
  })
  _avg!: TagsOnBlogsAvgAggregate | null;

  @TypeGraphQL.Field(_type => TagsOnBlogsSumAggregate, {
    nullable: true
  })
  _sum!: TagsOnBlogsSumAggregate | null;

  @TypeGraphQL.Field(_type => TagsOnBlogsMinAggregate, {
    nullable: true
  })
  _min!: TagsOnBlogsMinAggregate | null;

  @TypeGraphQL.Field(_type => TagsOnBlogsMaxAggregate, {
    nullable: true
  })
  _max!: TagsOnBlogsMaxAggregate | null;
}
