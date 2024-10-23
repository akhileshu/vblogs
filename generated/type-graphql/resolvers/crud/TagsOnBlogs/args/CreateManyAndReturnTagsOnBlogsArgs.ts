import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TagsOnBlogsCreateManyInput } from "../../../inputs/TagsOnBlogsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnTagsOnBlogsArgs {
  @TypeGraphQL.Field(_type => [TagsOnBlogsCreateManyInput], {
    nullable: false
  })
  data!: TagsOnBlogsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
