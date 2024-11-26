import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagsOnBlogsCountAggregate } from "../outputs/TagsOnBlogsCountAggregate";
import { TagsOnBlogsMaxAggregate } from "../outputs/TagsOnBlogsMaxAggregate";
import { TagsOnBlogsMinAggregate } from "../outputs/TagsOnBlogsMinAggregate";

@TypeGraphQL.ObjectType("TagsOnBlogsGroupBy", {})
export class TagsOnBlogsGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  tagId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  blogId!: string;

  @TypeGraphQL.Field(_type => TagsOnBlogsCountAggregate, {
    nullable: true
  })
  _count!: TagsOnBlogsCountAggregate | null;

  @TypeGraphQL.Field(_type => TagsOnBlogsMinAggregate, {
    nullable: true
  })
  _min!: TagsOnBlogsMinAggregate | null;

  @TypeGraphQL.Field(_type => TagsOnBlogsMaxAggregate, {
    nullable: true
  })
  _max!: TagsOnBlogsMaxAggregate | null;
}
