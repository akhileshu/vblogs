import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TopicOrderByWithAggregationInput } from "../../../inputs/TopicOrderByWithAggregationInput";
import { TopicScalarWhereWithAggregatesInput } from "../../../inputs/TopicScalarWhereWithAggregatesInput";
import { TopicWhereInput } from "../../../inputs/TopicWhereInput";
import { TopicScalarFieldEnum } from "../../../../enums/TopicScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTopicArgs {
  @TypeGraphQL.Field(_type => TopicWhereInput, {
    nullable: true
  })
  where?: TopicWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TopicOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: TopicOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TopicScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "title" | "technologyId">;

  @TypeGraphQL.Field(_type => TopicScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TopicScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
