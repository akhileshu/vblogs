import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogContentCountAggregate } from "../outputs/BlogContentCountAggregate";
import { BlogContentMaxAggregate } from "../outputs/BlogContentMaxAggregate";
import { BlogContentMinAggregate } from "../outputs/BlogContentMinAggregate";

@TypeGraphQL.ObjectType("BlogContentGroupBy", {})
export class BlogContentGroupBy {
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

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  blogId!: string;

  @TypeGraphQL.Field(_type => BlogContentCountAggregate, {
    nullable: true
  })
  _count!: BlogContentCountAggregate | null;

  @TypeGraphQL.Field(_type => BlogContentMinAggregate, {
    nullable: true
  })
  _min!: BlogContentMinAggregate | null;

  @TypeGraphQL.Field(_type => BlogContentMaxAggregate, {
    nullable: true
  })
  _max!: BlogContentMaxAggregate | null;
}
