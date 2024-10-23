import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VideoCreateOrConnectWithoutBlogInput } from "../inputs/VideoCreateOrConnectWithoutBlogInput";
import { VideoCreateWithoutBlogInput } from "../inputs/VideoCreateWithoutBlogInput";
import { VideoUpdateToOneWithWhereWithoutBlogInput } from "../inputs/VideoUpdateToOneWithWhereWithoutBlogInput";
import { VideoUpsertWithoutBlogInput } from "../inputs/VideoUpsertWithoutBlogInput";
import { VideoWhereInput } from "../inputs/VideoWhereInput";
import { VideoWhereUniqueInput } from "../inputs/VideoWhereUniqueInput";

@TypeGraphQL.InputType("VideoUpdateOneWithoutBlogNestedInput", {})
export class VideoUpdateOneWithoutBlogNestedInput {
  @TypeGraphQL.Field(_type => VideoCreateWithoutBlogInput, {
    nullable: true
  })
  create?: VideoCreateWithoutBlogInput | undefined;

  @TypeGraphQL.Field(_type => VideoCreateOrConnectWithoutBlogInput, {
    nullable: true
  })
  connectOrCreate?: VideoCreateOrConnectWithoutBlogInput | undefined;

  @TypeGraphQL.Field(_type => VideoUpsertWithoutBlogInput, {
    nullable: true
  })
  upsert?: VideoUpsertWithoutBlogInput | undefined;

  @TypeGraphQL.Field(_type => VideoWhereInput, {
    nullable: true
  })
  disconnect?: VideoWhereInput | undefined;

  @TypeGraphQL.Field(_type => VideoWhereInput, {
    nullable: true
  })
  delete?: VideoWhereInput | undefined;

  @TypeGraphQL.Field(_type => VideoWhereUniqueInput, {
    nullable: true
  })
  connect?: VideoWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => VideoUpdateToOneWithWhereWithoutBlogInput, {
    nullable: true
  })
  update?: VideoUpdateToOneWithWhereWithoutBlogInput | undefined;
}
