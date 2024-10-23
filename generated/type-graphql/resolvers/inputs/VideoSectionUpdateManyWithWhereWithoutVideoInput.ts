import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VideoSectionScalarWhereInput } from "../inputs/VideoSectionScalarWhereInput";
import { VideoSectionUpdateManyMutationInput } from "../inputs/VideoSectionUpdateManyMutationInput";

@TypeGraphQL.InputType("VideoSectionUpdateManyWithWhereWithoutVideoInput", {})
export class VideoSectionUpdateManyWithWhereWithoutVideoInput {
  @TypeGraphQL.Field(_type => VideoSectionScalarWhereInput, {
    nullable: false
  })
  where!: VideoSectionScalarWhereInput;

  @TypeGraphQL.Field(_type => VideoSectionUpdateManyMutationInput, {
    nullable: false
  })
  data!: VideoSectionUpdateManyMutationInput;
}
