import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TagsOnBlogsOrderByWithRelationInput } from "../../../inputs/TagsOnBlogsOrderByWithRelationInput";
import { TagsOnBlogsWhereInput } from "../../../inputs/TagsOnBlogsWhereInput";
import { TagsOnBlogsWhereUniqueInput } from "../../../inputs/TagsOnBlogsWhereUniqueInput";
import { TagsOnBlogsScalarFieldEnum } from "../../../../enums/TagsOnBlogsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstTagsOnBlogsArgs {
  @TypeGraphQL.Field(_type => TagsOnBlogsWhereInput, {
    nullable: true
  })
  where?: TagsOnBlogsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TagsOnBlogsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TagsOnBlogsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TagsOnBlogsWhereUniqueInput, {
    nullable: true
  })
  cursor?: TagsOnBlogsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [TagsOnBlogsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "tagId" | "blogId"> | undefined;
}
