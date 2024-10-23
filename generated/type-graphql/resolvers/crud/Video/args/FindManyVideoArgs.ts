import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VideoOrderByWithRelationInput } from "../../../inputs/VideoOrderByWithRelationInput";
import { VideoWhereInput } from "../../../inputs/VideoWhereInput";
import { VideoWhereUniqueInput } from "../../../inputs/VideoWhereUniqueInput";
import { VideoScalarFieldEnum } from "../../../../enums/VideoScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyVideoArgs {
  @TypeGraphQL.Field(_type => VideoWhereInput, {
    nullable: true
  })
  where?: VideoWhereInput | undefined;

  @TypeGraphQL.Field(_type => [VideoOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: VideoOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => VideoWhereUniqueInput, {
    nullable: true
  })
  cursor?: VideoWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [VideoScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "blogId" | "videoLink" | "thumbnailLink"> | undefined;
}
