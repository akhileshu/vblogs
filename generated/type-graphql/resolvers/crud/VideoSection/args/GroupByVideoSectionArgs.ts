import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VideoSectionOrderByWithAggregationInput } from "../../../inputs/VideoSectionOrderByWithAggregationInput";
import { VideoSectionScalarWhereWithAggregatesInput } from "../../../inputs/VideoSectionScalarWhereWithAggregatesInput";
import { VideoSectionWhereInput } from "../../../inputs/VideoSectionWhereInput";
import { VideoSectionScalarFieldEnum } from "../../../../enums/VideoSectionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByVideoSectionArgs {
  @TypeGraphQL.Field(_type => VideoSectionWhereInput, {
    nullable: true
  })
  where?: VideoSectionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [VideoSectionOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: VideoSectionOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [VideoSectionScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "videoId" | "blogSectionTitle" | "timestampInSeconds" | "blogPart">;

  @TypeGraphQL.Field(_type => VideoSectionScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: VideoSectionScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
