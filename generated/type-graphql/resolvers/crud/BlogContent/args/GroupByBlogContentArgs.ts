import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BlogContentOrderByWithAggregationInput } from "../../../inputs/BlogContentOrderByWithAggregationInput";
import { BlogContentScalarWhereWithAggregatesInput } from "../../../inputs/BlogContentScalarWhereWithAggregatesInput";
import { BlogContentWhereInput } from "../../../inputs/BlogContentWhereInput";
import { BlogContentScalarFieldEnum } from "../../../../enums/BlogContentScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByBlogContentArgs {
  @TypeGraphQL.Field(_type => BlogContentWhereInput, {
    nullable: true
  })
  where?: BlogContentWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BlogContentOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: BlogContentOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlogContentScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "intro" | "implementation" | "advanced" | "blogId">;

  @TypeGraphQL.Field(_type => BlogContentScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: BlogContentScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
