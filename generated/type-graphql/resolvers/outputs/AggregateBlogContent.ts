import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogContentCountAggregate } from "../outputs/BlogContentCountAggregate";
import { BlogContentMaxAggregate } from "../outputs/BlogContentMaxAggregate";
import { BlogContentMinAggregate } from "../outputs/BlogContentMinAggregate";

@TypeGraphQL.ObjectType("AggregateBlogContent", {})
export class AggregateBlogContent {
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
