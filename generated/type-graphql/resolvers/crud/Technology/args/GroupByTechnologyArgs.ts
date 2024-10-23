import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TechnologyOrderByWithAggregationInput } from "../../../inputs/TechnologyOrderByWithAggregationInput";
import { TechnologyScalarWhereWithAggregatesInput } from "../../../inputs/TechnologyScalarWhereWithAggregatesInput";
import { TechnologyWhereInput } from "../../../inputs/TechnologyWhereInput";
import { TechnologyScalarFieldEnum } from "../../../../enums/TechnologyScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTechnologyArgs {
  @TypeGraphQL.Field(_type => TechnologyWhereInput, {
    nullable: true
  })
  where?: TechnologyWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TechnologyOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: TechnologyOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TechnologyScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "title" | "goalId">;

  @TypeGraphQL.Field(_type => TechnologyScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TechnologyScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
