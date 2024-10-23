import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GoalOrderByWithRelationInput } from "../inputs/GoalOrderByWithRelationInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { TopicOrderByRelationAggregateInput } from "../inputs/TopicOrderByRelationAggregateInput";
import { UserInterestOrderByRelationAggregateInput } from "../inputs/UserInterestOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TechnologyOrderByWithRelationInput", {})
export class TechnologyOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  goalId?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => TopicOrderByRelationAggregateInput, {
    nullable: true
  })
  Topics?: TopicOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GoalOrderByWithRelationInput, {
    nullable: true
  })
  Goal?: GoalOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => UserInterestOrderByRelationAggregateInput, {
    nullable: true
  })
  userInterests?: UserInterestOrderByRelationAggregateInput | undefined;
}
