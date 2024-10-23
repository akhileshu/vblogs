import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VideoWhereInput } from "../inputs/VideoWhereInput";

@TypeGraphQL.InputType("VideoNullableRelationFilter", {})
export class VideoNullableRelationFilter {
  @TypeGraphQL.Field(_type => VideoWhereInput, {
    nullable: true
  })
  is?: VideoWhereInput | undefined;

  @TypeGraphQL.Field(_type => VideoWhereInput, {
    nullable: true
  })
  isNot?: VideoWhereInput | undefined;
}
