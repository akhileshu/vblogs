import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagsOnBlogsCreateManyBlogInput } from "../inputs/TagsOnBlogsCreateManyBlogInput";

@TypeGraphQL.InputType("TagsOnBlogsCreateManyBlogInputEnvelope", {})
export class TagsOnBlogsCreateManyBlogInputEnvelope {
  @TypeGraphQL.Field(_type => [TagsOnBlogsCreateManyBlogInput], {
    nullable: false
  })
  data!: TagsOnBlogsCreateManyBlogInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
