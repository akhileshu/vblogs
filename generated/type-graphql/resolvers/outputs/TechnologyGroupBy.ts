import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TechnologyCountAggregate } from "../outputs/TechnologyCountAggregate";
import { TechnologyMaxAggregate } from "../outputs/TechnologyMaxAggregate";
import { TechnologyMinAggregate } from "../outputs/TechnologyMinAggregate";

@TypeGraphQL.ObjectType("TechnologyGroupBy", {})
export class TechnologyGroupBy {
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
  goalId!: string | null;

  @TypeGraphQL.Field(_type => TechnologyCountAggregate, {
    nullable: true
  })
  _count!: TechnologyCountAggregate | null;

  @TypeGraphQL.Field(_type => TechnologyMinAggregate, {
    nullable: true
  })
  _min!: TechnologyMinAggregate | null;

  @TypeGraphQL.Field(_type => TechnologyMaxAggregate, {
    nullable: true
  })
  _max!: TechnologyMaxAggregate | null;
}
