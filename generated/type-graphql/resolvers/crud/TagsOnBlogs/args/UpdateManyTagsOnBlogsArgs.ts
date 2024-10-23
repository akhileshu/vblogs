import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TagsOnBlogsUpdateManyMutationInput } from "../../../inputs/TagsOnBlogsUpdateManyMutationInput";
import { TagsOnBlogsWhereInput } from "../../../inputs/TagsOnBlogsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTagsOnBlogsArgs {
  @TypeGraphQL.Field(_type => TagsOnBlogsUpdateManyMutationInput, {
    nullable: false
  })
  data!: TagsOnBlogsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TagsOnBlogsWhereInput, {
    nullable: true
  })
  where?: TagsOnBlogsWhereInput | undefined;
}
