import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogCreateWithoutVideoInput } from "../inputs/BlogCreateWithoutVideoInput";
import { BlogUpdateWithoutVideoInput } from "../inputs/BlogUpdateWithoutVideoInput";
import { BlogWhereInput } from "../inputs/BlogWhereInput";

@TypeGraphQL.InputType("BlogUpsertWithoutVideoInput", {})
export class BlogUpsertWithoutVideoInput {
  @TypeGraphQL.Field(_type => BlogUpdateWithoutVideoInput, {
    nullable: false
  })
  update!: BlogUpdateWithoutVideoInput;

  @TypeGraphQL.Field(_type => BlogCreateWithoutVideoInput, {
    nullable: false
  })
  create!: BlogCreateWithoutVideoInput;

  @TypeGraphQL.Field(_type => BlogWhereInput, {
    nullable: true
  })
  where?: BlogWhereInput | undefined;
}
