import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BlogContentOrderByWithRelationInput } from "../../../inputs/BlogContentOrderByWithRelationInput";
import { BlogContentWhereInput } from "../../../inputs/BlogContentWhereInput";
import { BlogContentWhereUniqueInput } from "../../../inputs/BlogContentWhereUniqueInput";
import { BlogContentScalarFieldEnum } from "../../../../enums/BlogContentScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstBlogContentArgs {
  @TypeGraphQL.Field(_type => BlogContentWhereInput, {
    nullable: true
  })
  where?: BlogContentWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BlogContentOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: BlogContentOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => BlogContentWhereUniqueInput, {
    nullable: true
  })
  cursor?: BlogContentWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [BlogContentScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "intro" | "implementation" | "advanced" | "blogId"> | undefined;
}
