import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VideoUpdateWithoutBlogInput } from "../inputs/VideoUpdateWithoutBlogInput";
import { VideoWhereInput } from "../inputs/VideoWhereInput";

@TypeGraphQL.InputType("VideoUpdateToOneWithWhereWithoutBlogInput", {})
export class VideoUpdateToOneWithWhereWithoutBlogInput {
  @TypeGraphQL.Field(_type => VideoWhereInput, {
    nullable: true
  })
  where?: VideoWhereInput | undefined;

  @TypeGraphQL.Field(_type => VideoUpdateWithoutBlogInput, {
    nullable: false
  })
  data!: VideoUpdateWithoutBlogInput;
}
