import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BlogContentCreateManyInput } from "../../../inputs/BlogContentCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnBlogContentArgs {
  @TypeGraphQL.Field(_type => [BlogContentCreateManyInput], {
    nullable: false
  })
  data!: BlogContentCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
