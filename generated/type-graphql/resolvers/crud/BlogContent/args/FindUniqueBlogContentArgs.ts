import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BlogContentWhereUniqueInput } from "../../../inputs/BlogContentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueBlogContentArgs {
  @TypeGraphQL.Field(_type => BlogContentWhereUniqueInput, {
    nullable: false
  })
  where!: BlogContentWhereUniqueInput;
}