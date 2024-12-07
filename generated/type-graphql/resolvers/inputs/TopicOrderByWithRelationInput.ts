import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogOrderByRelationAggregateInput } from "../inputs/BlogOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { TagOrderByRelationAggregateInput } from "../inputs/TagOrderByRelationAggregateInput";
import { TechnologyOrderByWithRelationInput } from "../inputs/TechnologyOrderByWithRelationInput";
import { UserInterestOrderByRelationAggregateInput } from "../inputs/UserInterestOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TopicOrderByWithRelationInput", {})
export class TopicOrderByWithRelationInput {
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
  technologyId?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => TechnologyOrderByWithRelationInput, {
    nullable: true
  })
  technology?: TechnologyOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => BlogOrderByRelationAggregateInput, {
    nullable: true
  })
  blogs?: BlogOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TagOrderByRelationAggregateInput, {
    nullable: true
  })
  tags?: TagOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserInterestOrderByRelationAggregateInput, {
    nullable: true
  })
  userInterests?: UserInterestOrderByRelationAggregateInput | undefined;
}
