import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogUpdateWithoutVideoInput } from "../inputs/BlogUpdateWithoutVideoInput";
import { BlogWhereInput } from "../inputs/BlogWhereInput";

@TypeGraphQL.InputType("BlogUpdateToOneWithWhereWithoutVideoInput", {})
export class BlogUpdateToOneWithWhereWithoutVideoInput {
  @TypeGraphQL.Field(_type => BlogWhereInput, {
    nullable: true
  })
  where?: BlogWhereInput | undefined;

  @TypeGraphQL.Field(_type => BlogUpdateWithoutVideoInput, {
    nullable: false
  })
  data!: BlogUpdateWithoutVideoInput;
}
