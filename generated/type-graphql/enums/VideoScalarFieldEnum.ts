import * as TypeGraphQL from "type-graphql";

export enum VideoScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  blogId = "blogId",
  videoLink = "videoLink",
  thumbnailLink = "thumbnailLink"
}
TypeGraphQL.registerEnumType(VideoScalarFieldEnum, {
  name: "VideoScalarFieldEnum",
  description: undefined,
});
