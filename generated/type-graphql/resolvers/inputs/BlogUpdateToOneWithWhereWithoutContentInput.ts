import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogUpdateWithoutContentInput } from "../inputs/BlogUpdateWithoutContentInput";
import { BlogWhereInput } from "../inputs/BlogWhereInput";

@TypeGraphQL.InputType("BlogUpdateToOneWithWhereWithoutContentInput", {})
export class BlogUpdateToOneWithWhereWithoutContentInput {
  @TypeGraphQL.Field(_type => BlogWhereInput, {
    nullable: true
  })
  where?: BlogWhereInput | undefined;

  @TypeGraphQL.Field(_type => BlogUpdateWithoutContentInput, {
    nullable: false
  })
  data!: BlogUpdateWithoutContentInput;
}
