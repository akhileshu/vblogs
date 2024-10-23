import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VideoSectionCreateManyVideoInputEnvelope } from "../inputs/VideoSectionCreateManyVideoInputEnvelope";
import { VideoSectionCreateOrConnectWithoutVideoInput } from "../inputs/VideoSectionCreateOrConnectWithoutVideoInput";
import { VideoSectionCreateWithoutVideoInput } from "../inputs/VideoSectionCreateWithoutVideoInput";
import { VideoSectionScalarWhereInput } from "../inputs/VideoSectionScalarWhereInput";
import { VideoSectionUpdateManyWithWhereWithoutVideoInput } from "../inputs/VideoSectionUpdateManyWithWhereWithoutVideoInput";
import { VideoSectionUpdateWithWhereUniqueWithoutVideoInput } from "../inputs/VideoSectionUpdateWithWhereUniqueWithoutVideoInput";
import { VideoSectionUpsertWithWhereUniqueWithoutVideoInput } from "../inputs/VideoSectionUpsertWithWhereUniqueWithoutVideoInput";
import { VideoSectionWhereUniqueInput } from "../inputs/VideoSectionWhereUniqueInput";

@TypeGraphQL.InputType("VideoSectionUpdateManyWithoutVideoNestedInput", {})
export class VideoSectionUpdateManyWithoutVideoNestedInput {
  @TypeGraphQL.Field(_type => [VideoSectionCreateWithoutVideoInput], {
    nullable: true
  })
  create?: VideoSectionCreateWithoutVideoInput[] | undefined;

  @TypeGraphQL.Field(_type => [VideoSectionCreateOrConnectWithoutVideoInput], {
    nullable: true
  })
  connectOrCreate?: VideoSectionCreateOrConnectWithoutVideoInput[] | undefined;

  @TypeGraphQL.Field(_type => [VideoSectionUpsertWithWhereUniqueWithoutVideoInput], {
    nullable: true
  })
  upsert?: VideoSectionUpsertWithWhereUniqueWithoutVideoInput[] | undefined;

  @TypeGraphQL.Field(_type => VideoSectionCreateManyVideoInputEnvelope, {
    nullable: true
  })
  createMany?: VideoSectionCreateManyVideoInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [VideoSectionWhereUniqueInput], {
    nullable: true
  })
  set?: VideoSectionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VideoSectionWhereUniqueInput], {
    nullable: true
  })
  disconnect?: VideoSectionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VideoSectionWhereUniqueInput], {
    nullable: true
  })
  delete?: VideoSectionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VideoSectionWhereUniqueInput], {
    nullable: true
  })
  connect?: VideoSectionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VideoSectionUpdateWithWhereUniqueWithoutVideoInput], {
    nullable: true
  })
  update?: VideoSectionUpdateWithWhereUniqueWithoutVideoInput[] | undefined;

  @TypeGraphQL.Field(_type => [VideoSectionUpdateManyWithWhereWithoutVideoInput], {
    nullable: true
  })
  updateMany?: VideoSectionUpdateManyWithWhereWithoutVideoInput[] | undefined;

  @TypeGraphQL.Field(_type => [VideoSectionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: VideoSectionScalarWhereInput[] | undefined;
}
