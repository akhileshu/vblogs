import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VideoSectionCreateWithoutVideoInput } from "../inputs/VideoSectionCreateWithoutVideoInput";
import { VideoSectionUpdateWithoutVideoInput } from "../inputs/VideoSectionUpdateWithoutVideoInput";
import { VideoSectionWhereUniqueInput } from "../inputs/VideoSectionWhereUniqueInput";

@TypeGraphQL.InputType("VideoSectionUpsertWithWhereUniqueWithoutVideoInput", {})
export class VideoSectionUpsertWithWhereUniqueWithoutVideoInput {
  @TypeGraphQL.Field(_type => VideoSectionWhereUniqueInput, {
    nullable: false
  })
  where!: VideoSectionWhereUniqueInput;

  @TypeGraphQL.Field(_type => VideoSectionUpdateWithoutVideoInput, {
    nullable: false
  })
  update!: VideoSectionUpdateWithoutVideoInput;

  @TypeGraphQL.Field(_type => VideoSectionCreateWithoutVideoInput, {
    nullable: false
  })
  create!: VideoSectionCreateWithoutVideoInput;
}
