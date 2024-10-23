import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VideoAvgAggregate } from "../outputs/VideoAvgAggregate";
import { VideoCountAggregate } from "../outputs/VideoCountAggregate";
import { VideoMaxAggregate } from "../outputs/VideoMaxAggregate";
import { VideoMinAggregate } from "../outputs/VideoMinAggregate";
import { VideoSumAggregate } from "../outputs/VideoSumAggregate";

@TypeGraphQL.ObjectType("VideoGroupBy", {})
export class VideoGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  blogId!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  videoLink!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  thumbnailLink!: string;

  @TypeGraphQL.Field(_type => VideoCountAggregate, {
    nullable: true
  })
  _count!: VideoCountAggregate | null;

  @TypeGraphQL.Field(_type => VideoAvgAggregate, {
    nullable: true
  })
  _avg!: VideoAvgAggregate | null;

  @TypeGraphQL.Field(_type => VideoSumAggregate, {
    nullable: true
  })
  _sum!: VideoSumAggregate | null;

  @TypeGraphQL.Field(_type => VideoMinAggregate, {
    nullable: true
  })
  _min!: VideoMinAggregate | null;

  @TypeGraphQL.Field(_type => VideoMaxAggregate, {
    nullable: true
  })
  _max!: VideoMaxAggregate | null;
}
