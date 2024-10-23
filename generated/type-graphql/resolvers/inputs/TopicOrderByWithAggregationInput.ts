import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { TopicAvgOrderByAggregateInput } from "../inputs/TopicAvgOrderByAggregateInput";
import { TopicCountOrderByAggregateInput } from "../inputs/TopicCountOrderByAggregateInput";
import { TopicMaxOrderByAggregateInput } from "../inputs/TopicMaxOrderByAggregateInput";
import { TopicMinOrderByAggregateInput } from "../inputs/TopicMinOrderByAggregateInput";
import { TopicSumOrderByAggregateInput } from "../inputs/TopicSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TopicOrderByWithAggregationInput", {})
export class TopicOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => TopicCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TopicCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TopicAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: TopicAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TopicMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TopicMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TopicMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TopicMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TopicSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: TopicSumOrderByAggregateInput | undefined;
}
