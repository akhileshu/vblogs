import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VideoSectionCreateManyVideoInputEnvelope } from "../inputs/VideoSectionCreateManyVideoInputEnvelope";
import { VideoSectionCreateOrConnectWithoutVideoInput } from "../inputs/VideoSectionCreateOrConnectWithoutVideoInput";
import { VideoSectionCreateWithoutVideoInput } from "../inputs/VideoSectionCreateWithoutVideoInput";
import { VideoSectionWhereUniqueInput } from "../inputs/VideoSectionWhereUniqueInput";

@TypeGraphQL.InputType("VideoSectionCreateNestedManyWithoutVideoInput", {})
export class VideoSectionCreateNestedManyWithoutVideoInput {
  @TypeGraphQL.Field(_type => [VideoSectionCreateWithoutVideoInput], {
    nullable: true
  })
  create?: VideoSectionCreateWithoutVideoInput[] | undefined;

  @TypeGraphQL.Field(_type => [VideoSectionCreateOrConnectWithoutVideoInput], {
    nullable: true
  })
  connectOrCreate?: VideoSectionCreateOrConnectWithoutVideoInput[] | undefined;

  @TypeGraphQL.Field(_type => VideoSectionCreateManyVideoInputEnvelope, {
    nullable: true
  })
  createMany?: VideoSectionCreateManyVideoInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [VideoSectionWhereUniqueInput], {
    nullable: true
  })
  connect?: VideoSectionWhereUniqueInput[] | undefined;
}
