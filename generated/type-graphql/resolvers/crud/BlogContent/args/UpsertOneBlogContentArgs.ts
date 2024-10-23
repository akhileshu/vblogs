import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BlogContentCreateInput } from "../../../inputs/BlogContentCreateInput";
import { BlogContentUpdateInput } from "../../../inputs/BlogContentUpdateInput";
import { BlogContentWhereUniqueInput } from "../../../inputs/BlogContentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneBlogContentArgs {
  @TypeGraphQL.Field(_type => BlogContentWhereUniqueInput, {
    nullable: false
  })
  where!: BlogContentWhereUniqueInput;

  @TypeGraphQL.Field(_type => BlogContentCreateInput, {
    nullable: false
  })
  create!: BlogContentCreateInput;

  @TypeGraphQL.Field(_type => BlogContentUpdateInput, {
    nullable: false
  })
  update!: BlogContentUpdateInput;
}
