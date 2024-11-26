import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VideoSectionAvgAggregate } from "../outputs/VideoSectionAvgAggregate";
import { VideoSectionCountAggregate } from "../outputs/VideoSectionCountAggregate";
import { VideoSectionMaxAggregate } from "../outputs/VideoSectionMaxAggregate";
import { VideoSectionMinAggregate } from "../outputs/VideoSectionMinAggregate";
import { VideoSectionSumAggregate } from "../outputs/VideoSectionSumAggregate";
import { BlogPart } from "../../enums/BlogPart";

@TypeGraphQL.ObjectType("VideoSectionGroupBy", {})
export class VideoSectionGroupBy {
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
  videoId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  blogSectionTitle!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  timestampInSeconds!: number;

  @TypeGraphQL.Field(_type => BlogPart, {
    nullable: false
  })
  blogPart!: "INTRO" | "IMPLEMENTATION" | "ADVANCED";

  @TypeGraphQL.Field(_type => VideoSectionCountAggregate, {
    nullable: true
  })
  _count!: VideoSectionCountAggregate | null;

  @TypeGraphQL.Field(_type => VideoSectionAvgAggregate, {
    nullable: true
  })
  _avg!: VideoSectionAvgAggregate | null;

  @TypeGraphQL.Field(_type => VideoSectionSumAggregate, {
    nullable: true
  })
  _sum!: VideoSectionSumAggregate | null;

  @TypeGraphQL.Field(_type => VideoSectionMinAggregate, {
    nullable: true
  })
  _min!: VideoSectionMinAggregate | null;

  @TypeGraphQL.Field(_type => VideoSectionMaxAggregate, {
    nullable: true
  })
  _max!: VideoSectionMaxAggregate | null;
}
