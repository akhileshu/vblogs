import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VideoSectionCreateWithoutVideoInput } from "../inputs/VideoSectionCreateWithoutVideoInput";
import { VideoSectionWhereUniqueInput } from "../inputs/VideoSectionWhereUniqueInput";

@TypeGraphQL.InputType("VideoSectionCreateOrConnectWithoutVideoInput", {})
export class VideoSectionCreateOrConnectWithoutVideoInput {
  @TypeGraphQL.Field(_type => VideoSectionWhereUniqueInput, {
    nullable: false
  })
  where!: VideoSectionWhereUniqueInput;

  @TypeGraphQL.Field(_type => VideoSectionCreateWithoutVideoInput, {
    nullable: false
  })
  create!: VideoSectionCreateWithoutVideoInput;
}
