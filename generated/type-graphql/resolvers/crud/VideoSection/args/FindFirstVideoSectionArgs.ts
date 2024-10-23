import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VideoSectionOrderByWithRelationInput } from "../../../inputs/VideoSectionOrderByWithRelationInput";
import { VideoSectionWhereInput } from "../../../inputs/VideoSectionWhereInput";
import { VideoSectionWhereUniqueInput } from "../../../inputs/VideoSectionWhereUniqueInput";
import { VideoSectionScalarFieldEnum } from "../../../../enums/VideoSectionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstVideoSectionArgs {
  @TypeGraphQL.Field(_type => VideoSectionWhereInput, {
    nullable: true
  })
  where?: VideoSectionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [VideoSectionOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: VideoSectionOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => VideoSectionWhereUniqueInput, {
    nullable: true
  })
  cursor?: VideoSectionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [VideoSectionScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "videoId" | "blogSectionTitle" | "timestampInSeconds" | "blogPart"> | undefined;
}
