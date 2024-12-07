import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VideoSectionCreateNestedManyWithoutVideoInput } from "../inputs/VideoSectionCreateNestedManyWithoutVideoInput";

@TypeGraphQL.InputType("VideoCreateWithoutBlogInput", {})
export class VideoCreateWithoutBlogInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  videoLink!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  thumbnailLink!: string;

  @TypeGraphQL.Field(_type => VideoSectionCreateNestedManyWithoutVideoInput, {
    nullable: true
  })
  sections?: VideoSectionCreateNestedManyWithoutVideoInput | undefined;
}
