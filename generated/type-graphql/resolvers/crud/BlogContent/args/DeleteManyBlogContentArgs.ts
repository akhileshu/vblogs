import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BlogContentWhereInput } from "../../../inputs/BlogContentWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyBlogContentArgs {
  @TypeGraphQL.Field(_type => BlogContentWhereInput, {
    nullable: true
  })
  where?: BlogContentWhereInput | undefined;
}
