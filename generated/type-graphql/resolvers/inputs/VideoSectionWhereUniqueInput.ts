import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumBlogPartFilter } from "../inputs/EnumBlogPartFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { VideoRelationFilter } from "../inputs/VideoRelationFilter";
import { VideoSectionBlogSectionTitleBlogPartCompoundUniqueInput } from "../inputs/VideoSectionBlogSectionTitleBlogPartCompoundUniqueInput";
import { VideoSectionWhereInput } from "../inputs/VideoSectionWhereInput";

@TypeGraphQL.InputType("VideoSectionWhereUniqueInput", {})
export class VideoSectionWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => VideoSectionBlogSectionTitleBlogPartCompoundUniqueInput, {
    nullable: true
  })
  blogSectionTitle_blogPart?: VideoSectionBlogSectionTitleBlogPartCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [VideoSectionWhereInput], {
    nullable: true
  })
  AND?: VideoSectionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VideoSectionWhereInput], {
    nullable: true
  })
  OR?: VideoSectionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VideoSectionWhereInput], {
    nullable: true
  })
  NOT?: VideoSectionWhereInput[] | undefined;

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
  videoId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  blogSectionTitle?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  timestampInSeconds?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => EnumBlogPartFilter, {
    nullable: true
  })
  blogPart?: EnumBlogPartFilter | undefined;

  @TypeGraphQL.Field(_type => VideoRelationFilter, {
    nullable: true
  })
  Video?: VideoRelationFilter | undefined;
}
