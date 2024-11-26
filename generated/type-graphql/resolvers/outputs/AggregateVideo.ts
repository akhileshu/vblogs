import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VideoCountAggregate } from "../outputs/VideoCountAggregate";
import { VideoMaxAggregate } from "../outputs/VideoMaxAggregate";
import { VideoMinAggregate } from "../outputs/VideoMinAggregate";

@TypeGraphQL.ObjectType("AggregateVideo", {})
export class AggregateVideo {
  @TypeGraphQL.Field(_type => VideoCountAggregate, {
    nullable: true
  })
  _count!: VideoCountAggregate | null;

  @TypeGraphQL.Field(_type => VideoMinAggregate, {
    nullable: true
  })
  _min!: VideoMinAggregate | null;

  @TypeGraphQL.Field(_type => VideoMaxAggregate, {
    nullable: true
  })
  _max!: VideoMaxAggregate | null;
}
