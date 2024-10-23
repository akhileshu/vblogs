import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumBlogPartFilter } from "../inputs/EnumBlogPartFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("VideoSectionScalarWhereInput", {})
export class VideoSectionScalarWhereInput {
  @TypeGraphQL.Field(_type => [VideoSectionScalarWhereInput], {
    nullable: true
  })
  AND?: VideoSectionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VideoSectionScalarWhereInput], {
    nullable: true
  })
  OR?: VideoSectionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VideoSectionScalarWhereInput], {
    nullable: true
  })
  NOT?: VideoSectionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  videoId?: IntFilter | undefined;

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
}
