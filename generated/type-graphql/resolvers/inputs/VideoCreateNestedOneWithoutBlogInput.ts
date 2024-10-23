import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VideoCreateOrConnectWithoutBlogInput } from "../inputs/VideoCreateOrConnectWithoutBlogInput";
import { VideoCreateWithoutBlogInput } from "../inputs/VideoCreateWithoutBlogInput";
import { VideoWhereUniqueInput } from "../inputs/VideoWhereUniqueInput";

@TypeGraphQL.InputType("VideoCreateNestedOneWithoutBlogInput", {})
export class VideoCreateNestedOneWithoutBlogInput {
  @TypeGraphQL.Field(_type => VideoCreateWithoutBlogInput, {
    nullable: true
  })
  create?: VideoCreateWithoutBlogInput | undefined;

  @TypeGraphQL.Field(_type => VideoCreateOrConnectWithoutBlogInput, {
    nullable: true
  })
  connectOrCreate?: VideoCreateOrConnectWithoutBlogInput | undefined;

  @TypeGraphQL.Field(_type => VideoWhereUniqueInput, {
    nullable: true
  })
  connect?: VideoWhereUniqueInput | undefined;
}
