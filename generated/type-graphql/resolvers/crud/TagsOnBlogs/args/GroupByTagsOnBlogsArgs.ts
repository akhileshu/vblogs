import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TagsOnBlogsOrderByWithAggregationInput } from "../../../inputs/TagsOnBlogsOrderByWithAggregationInput";
import { TagsOnBlogsScalarWhereWithAggregatesInput } from "../../../inputs/TagsOnBlogsScalarWhereWithAggregatesInput";
import { TagsOnBlogsWhereInput } from "../../../inputs/TagsOnBlogsWhereInput";
import { TagsOnBlogsScalarFieldEnum } from "../../../../enums/TagsOnBlogsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTagsOnBlogsArgs {
  @TypeGraphQL.Field(_type => TagsOnBlogsWhereInput, {
    nullable: true
  })
  where?: TagsOnBlogsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TagsOnBlogsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: TagsOnBlogsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagsOnBlogsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "tagId" | "blogId">;

  @TypeGraphQL.Field(_type => TagsOnBlogsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TagsOnBlogsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
