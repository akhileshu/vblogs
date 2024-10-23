import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VideoSectionUpdateWithoutVideoInput } from "../inputs/VideoSectionUpdateWithoutVideoInput";
import { VideoSectionWhereUniqueInput } from "../inputs/VideoSectionWhereUniqueInput";

@TypeGraphQL.InputType("VideoSectionUpdateWithWhereUniqueWithoutVideoInput", {})
export class VideoSectionUpdateWithWhereUniqueWithoutVideoInput {
  @TypeGraphQL.Field(_type => VideoSectionWhereUniqueInput, {
    nullable: false
  })
  where!: VideoSectionWhereUniqueInput;

  @TypeGraphQL.Field(_type => VideoSectionUpdateWithoutVideoInput, {
    nullable: false
  })
  data!: VideoSectionUpdateWithoutVideoInput;
}
