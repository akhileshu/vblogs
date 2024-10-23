import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagsOnBlogsCreateManyTagInput } from "../inputs/TagsOnBlogsCreateManyTagInput";

@TypeGraphQL.InputType("TagsOnBlogsCreateManyTagInputEnvelope", {})
export class TagsOnBlogsCreateManyTagInputEnvelope {
  @TypeGraphQL.Field(_type => [TagsOnBlogsCreateManyTagInput], {
    nullable: false
  })
  data!: TagsOnBlogsCreateManyTagInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
