import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { TechnologyCountOrderByAggregateInput } from "../inputs/TechnologyCountOrderByAggregateInput";
import { TechnologyMaxOrderByAggregateInput } from "../inputs/TechnologyMaxOrderByAggregateInput";
import { TechnologyMinOrderByAggregateInput } from "../inputs/TechnologyMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TechnologyOrderByWithAggregationInput", {})
export class TechnologyOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => TechnologyCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TechnologyCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TechnologyMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TechnologyMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TechnologyMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TechnologyMinOrderByAggregateInput | undefined;
}
