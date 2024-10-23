import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogContentAvgAggregate } from "../outputs/BlogContentAvgAggregate";
import { BlogContentCountAggregate } from "../outputs/BlogContentCountAggregate";
import { BlogContentMaxAggregate } from "../outputs/BlogContentMaxAggregate";
import { BlogContentMinAggregate } from "../outputs/BlogContentMinAggregate";
import { BlogContentSumAggregate } from "../outputs/BlogContentSumAggregate";

@TypeGraphQL.ObjectType("BlogContentGroupBy", {})
export class BlogContentGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: false
  })
  intro!: Prisma.JsonValue;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: false
  })
  implementation!: Prisma.JsonValue;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: false
  })
  advanced!: Prisma.JsonValue;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  blogId!: number;

  @TypeGraphQL.Field(_type => BlogContentCountAggregate, {
    nullable: true
  })
  _count!: BlogContentCountAggregate | null;

  @TypeGraphQL.Field(_type => BlogContentAvgAggregate, {
    nullable: true
  })
  _avg!: BlogContentAvgAggregate | null;

  @TypeGraphQL.Field(_type => BlogContentSumAggregate, {
    nullable: true
  })
  _sum!: BlogContentSumAggregate | null;

  @TypeGraphQL.Field(_type => BlogContentMinAggregate, {
    nullable: true
  })
  _min!: BlogContentMinAggregate | null;

  @TypeGraphQL.Field(_type => BlogContentMaxAggregate, {
    nullable: true
  })
  _max!: BlogContentMaxAggregate | null;
}
