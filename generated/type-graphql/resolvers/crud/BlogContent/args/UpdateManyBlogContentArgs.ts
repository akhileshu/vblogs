import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BlogContentUpdateManyMutationInput } from "../../../inputs/BlogContentUpdateManyMutationInput";
import { BlogContentWhereInput } from "../../../inputs/BlogContentWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyBlogContentArgs {
  @TypeGraphQL.Field(_type => BlogContentUpdateManyMutationInput, {
    nullable: false
  })
  data!: BlogContentUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => BlogContentWhereInput, {
    nullable: true
  })
  where?: BlogContentWhereInput | undefined;
}
