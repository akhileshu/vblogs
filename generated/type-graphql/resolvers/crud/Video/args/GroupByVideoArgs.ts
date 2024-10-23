import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VideoOrderByWithAggregationInput } from "../../../inputs/VideoOrderByWithAggregationInput";
import { VideoScalarWhereWithAggregatesInput } from "../../../inputs/VideoScalarWhereWithAggregatesInput";
import { VideoWhereInput } from "../../../inputs/VideoWhereInput";
import { VideoScalarFieldEnum } from "../../../../enums/VideoScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByVideoArgs {
  @TypeGraphQL.Field(_type => VideoWhereInput, {
    nullable: true
  })
  where?: VideoWhereInput | undefined;

  @TypeGraphQL.Field(_type => [VideoOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: VideoOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [VideoScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "blogId" | "videoLink" | "thumbnailLink">;

  @TypeGraphQL.Field(_type => VideoScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: VideoScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
