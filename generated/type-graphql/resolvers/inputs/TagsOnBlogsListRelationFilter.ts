import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagsOnBlogsWhereInput } from "../inputs/TagsOnBlogsWhereInput";

@TypeGraphQL.InputType("TagsOnBlogsListRelationFilter", {})
export class TagsOnBlogsListRelationFilter {
  @TypeGraphQL.Field(_type => TagsOnBlogsWhereInput, {
    nullable: true
  })
  every?: TagsOnBlogsWhereInput | undefined;

  @TypeGraphQL.Field(_type => TagsOnBlogsWhereInput, {
    nullable: true
  })
  some?: TagsOnBlogsWhereInput | undefined;

  @TypeGraphQL.Field(_type => TagsOnBlogsWhereInput, {
    nullable: true
  })
  none?: TagsOnBlogsWhereInput | undefined;
}
