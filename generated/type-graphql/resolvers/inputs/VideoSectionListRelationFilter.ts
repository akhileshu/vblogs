import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VideoSectionWhereInput } from "../inputs/VideoSectionWhereInput";

@TypeGraphQL.InputType("VideoSectionListRelationFilter", {})
export class VideoSectionListRelationFilter {
  @TypeGraphQL.Field(_type => VideoSectionWhereInput, {
    nullable: true
  })
  every?: VideoSectionWhereInput | undefined;

  @TypeGraphQL.Field(_type => VideoSectionWhereInput, {
    nullable: true
  })
  some?: VideoSectionWhereInput | undefined;

  @TypeGraphQL.Field(_type => VideoSectionWhereInput, {
    nullable: true
  })
  none?: VideoSectionWhereInput | undefined;
}
