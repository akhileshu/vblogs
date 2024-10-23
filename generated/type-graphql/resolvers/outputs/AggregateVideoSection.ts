import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VideoSectionAvgAggregate } from "../outputs/VideoSectionAvgAggregate";
import { VideoSectionCountAggregate } from "../outputs/VideoSectionCountAggregate";
import { VideoSectionMaxAggregate } from "../outputs/VideoSectionMaxAggregate";
import { VideoSectionMinAggregate } from "../outputs/VideoSectionMinAggregate";
import { VideoSectionSumAggregate } from "../outputs/VideoSectionSumAggregate";

@TypeGraphQL.ObjectType("AggregateVideoSection", {})
export class AggregateVideoSection {
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
