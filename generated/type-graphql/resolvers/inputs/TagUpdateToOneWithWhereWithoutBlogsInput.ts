import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagUpdateWithoutBlogsInput } from "../inputs/TagUpdateWithoutBlogsInput";
import { TagWhereInput } from "../inputs/TagWhereInput";

@TypeGraphQL.InputType("TagUpdateToOneWithWhereWithoutBlogsInput", {})
export class TagUpdateToOneWithWhereWithoutBlogsInput {
  @TypeGraphQL.Field(_type => TagWhereInput, {
    nullable: true
  })
  where?: TagWhereInput | undefined;

  @TypeGraphQL.Field(_type => TagUpdateWithoutBlogsInput, {
    nullable: false
  })
  data!: TagUpdateWithoutBlogsInput;
}
