import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagCountAggregate } from "../outputs/TagCountAggregate";
import { TagMaxAggregate } from "../outputs/TagMaxAggregate";
import { TagMinAggregate } from "../outputs/TagMinAggregate";

@TypeGraphQL.ObjectType("TagGroupBy", {})
export class TagGroupBy {
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
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  topicId!: string | null;

  @TypeGraphQL.Field(_type => TagCountAggregate, {
    nullable: true
  })
  _count!: TagCountAggregate | null;

  @TypeGraphQL.Field(_type => TagMinAggregate, {
    nullable: true
  })
  _min!: TagMinAggregate | null;

  @TypeGraphQL.Field(_type => TagMaxAggregate, {
    nullable: true
  })
  _max!: TagMaxAggregate | null;
}
