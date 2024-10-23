import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VideoCreateWithoutBlogInput } from "../inputs/VideoCreateWithoutBlogInput";
import { VideoWhereUniqueInput } from "../inputs/VideoWhereUniqueInput";

@TypeGraphQL.InputType("VideoCreateOrConnectWithoutBlogInput", {})
export class VideoCreateOrConnectWithoutBlogInput {
  @TypeGraphQL.Field(_type => VideoWhereUniqueInput, {
    nullable: false
  })
  where!: VideoWhereUniqueInput;

  @TypeGraphQL.Field(_type => VideoCreateWithoutBlogInput, {
    nullable: false
  })
  create!: VideoCreateWithoutBlogInput;
}
