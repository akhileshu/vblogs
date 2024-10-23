import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VideoCreateWithoutBlogInput } from "../inputs/VideoCreateWithoutBlogInput";
import { VideoUpdateWithoutBlogInput } from "../inputs/VideoUpdateWithoutBlogInput";
import { VideoWhereInput } from "../inputs/VideoWhereInput";

@TypeGraphQL.InputType("VideoUpsertWithoutBlogInput", {})
export class VideoUpsertWithoutBlogInput {
  @TypeGraphQL.Field(_type => VideoUpdateWithoutBlogInput, {
    nullable: false
  })
  update!: VideoUpdateWithoutBlogInput;

  @TypeGraphQL.Field(_type => VideoCreateWithoutBlogInput, {
    nullable: false
  })
  create!: VideoCreateWithoutBlogInput;

  @TypeGraphQL.Field(_type => VideoWhereInput, {
    nullable: true
  })
  where?: VideoWhereInput | undefined;
}
