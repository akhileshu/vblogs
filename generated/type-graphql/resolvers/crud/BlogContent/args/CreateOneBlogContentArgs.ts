import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BlogContentCreateInput } from "../../../inputs/BlogContentCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneBlogContentArgs {
  @TypeGraphQL.Field(_type => BlogContentCreateInput, {
    nullable: false
  })
  data!: BlogContentCreateInput;
}
