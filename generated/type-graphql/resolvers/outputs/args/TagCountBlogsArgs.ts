import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TagsOnBlogsWhereInput } from "../../inputs/TagsOnBlogsWhereInput";

@TypeGraphQL.ArgsType()
export class TagCountBlogsArgs {
  @TypeGraphQL.Field(_type => TagsOnBlogsWhereInput, {
    nullable: true
  })
  where?: TagsOnBlogsWhereInput | undefined;
}
