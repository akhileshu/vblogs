import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BlogContentUpdateInput } from "../../../inputs/BlogContentUpdateInput";
import { BlogContentWhereUniqueInput } from "../../../inputs/BlogContentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneBlogContentArgs {
  @TypeGraphQL.Field(_type => BlogContentUpdateInput, {
    nullable: false
  })
  data!: BlogContentUpdateInput;

  @TypeGraphQL.Field(_type => BlogContentWhereUniqueInput, {
    nullable: false
  })
  where!: BlogContentWhereUniqueInput;
}
