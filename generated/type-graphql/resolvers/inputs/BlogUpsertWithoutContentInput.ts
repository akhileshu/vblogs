import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogCreateWithoutContentInput } from "../inputs/BlogCreateWithoutContentInput";
import { BlogUpdateWithoutContentInput } from "../inputs/BlogUpdateWithoutContentInput";
import { BlogWhereInput } from "../inputs/BlogWhereInput";

@TypeGraphQL.InputType("BlogUpsertWithoutContentInput", {})
export class BlogUpsertWithoutContentInput {
  @TypeGraphQL.Field(_type => BlogUpdateWithoutContentInput, {
    nullable: false
  })
  update!: BlogUpdateWithoutContentInput;

  @TypeGraphQL.Field(_type => BlogCreateWithoutContentInput, {
    nullable: false
  })
  create!: BlogCreateWithoutContentInput;

  @TypeGraphQL.Field(_type => BlogWhereInput, {
    nullable: true
  })
  where?: BlogWhereInput | undefined;
}
