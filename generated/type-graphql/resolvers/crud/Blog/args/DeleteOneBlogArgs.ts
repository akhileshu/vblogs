import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BlogWhereUniqueInput } from "../../../inputs/BlogWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneBlogArgs {
  @TypeGraphQL.Field(_type => BlogWhereUniqueInput, {
    nullable: false
  })
  where!: BlogWhereUniqueInput;
}
