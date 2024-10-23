import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogRelationFilter } from "../inputs/BlogRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { VideoSectionListRelationFilter } from "../inputs/VideoSectionListRelationFilter";
import { VideoWhereInput } from "../inputs/VideoWhereInput";

@TypeGraphQL.InputType("VideoWhereUniqueInput", {})
export class VideoWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  blogId?: number | undefined;

  @TypeGraphQL.Field(_type => [VideoWhereInput], {
    nullable: true
  })
  AND?: VideoWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VideoWhereInput], {
    nullable: true
  })
  OR?: VideoWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VideoWhereInput], {
    nullable: true
  })
  NOT?: VideoWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  videoLink?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  thumbnailLink?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BlogRelationFilter, {
    nullable: true
  })
  Blog?: BlogRelationFilter | undefined;

  @TypeGraphQL.Field(_type => VideoSectionListRelationFilter, {
    nullable: true
  })
  Sections?: VideoSectionListRelationFilter | undefined;
}
