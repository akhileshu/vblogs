import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserInterestOrderByWithAggregationInput } from "../../../inputs/UserInterestOrderByWithAggregationInput";
import { UserInterestScalarWhereWithAggregatesInput } from "../../../inputs/UserInterestScalarWhereWithAggregatesInput";
import { UserInterestWhereInput } from "../../../inputs/UserInterestWhereInput";
import { UserInterestScalarFieldEnum } from "../../../../enums/UserInterestScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByUserInterestArgs {
  @TypeGraphQL.Field(_type => UserInterestWhereInput, {
    nullable: true
  })
  where?: UserInterestWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UserInterestOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: UserInterestOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserInterestScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "userId" | "technologyId" | "topicId" | "interestType">;

  @TypeGraphQL.Field(_type => UserInterestScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: UserInterestScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
