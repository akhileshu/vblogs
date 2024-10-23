import * as TypeGraphQL from "type-graphql";

export enum VideoSectionScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  videoId = "videoId",
  blogSectionTitle = "blogSectionTitle",
  timestampInSeconds = "timestampInSeconds",
  blogPart = "blogPart"
}
TypeGraphQL.registerEnumType(VideoSectionScalarFieldEnum, {
  name: "VideoSectionScalarFieldEnum",
  description: undefined,
});
