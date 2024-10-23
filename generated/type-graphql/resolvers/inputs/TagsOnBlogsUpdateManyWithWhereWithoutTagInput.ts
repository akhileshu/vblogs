import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagsOnBlogsScalarWhereInput } from "../inputs/TagsOnBlogsScalarWhereInput";
import { TagsOnBlogsUpdateManyMutationInput } from "../inputs/TagsOnBlogsUpdateManyMutationInput";

@TypeGraphQL.InputType("TagsOnBlogsUpdateManyWithWhereWithoutTagInput", {})
export class TagsOnBlogsUpdateManyWithWhereWithoutTagInput {
  @TypeGraphQL.Field(_type => TagsOnBlogsScalarWhereInput, {
    nullable: false
  })
  where!: TagsOnBlogsScalarWhereInput;

  @TypeGraphQL.Field(_type => TagsOnBlogsUpdateManyMutationInput, {
    nullable: false
  })
  data!: TagsOnBlogsUpdateManyMutationInput;
}
