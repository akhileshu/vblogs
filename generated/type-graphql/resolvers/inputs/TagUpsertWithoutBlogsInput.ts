import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateWithoutBlogsInput } from "../inputs/TagCreateWithoutBlogsInput";
import { TagUpdateWithoutBlogsInput } from "../inputs/TagUpdateWithoutBlogsInput";
import { TagWhereInput } from "../inputs/TagWhereInput";

@TypeGraphQL.InputType("TagUpsertWithoutBlogsInput", {})
export class TagUpsertWithoutBlogsInput {
  @TypeGraphQL.Field(_type => TagUpdateWithoutBlogsInput, {
    nullable: false
  })
  update!: TagUpdateWithoutBlogsInput;

  @TypeGraphQL.Field(_type => TagCreateWithoutBlogsInput, {
    nullable: false
  })
  create!: TagCreateWithoutBlogsInput;

  @TypeGraphQL.Field(_type => TagWhereInput, {
    nullable: true
  })
  where?: TagWhereInput | undefined;
}
