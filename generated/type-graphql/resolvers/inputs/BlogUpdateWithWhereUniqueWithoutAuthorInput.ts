import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogUpdateWithoutAuthorInput } from "../inputs/BlogUpdateWithoutAuthorInput";
import { BlogWhereUniqueInput } from "../inputs/BlogWhereUniqueInput";

@TypeGraphQL.InputType("BlogUpdateWithWhereUniqueWithoutAuthorInput", {})
export class BlogUpdateWithWhereUniqueWithoutAuthorInput {
  @TypeGraphQL.Field(_type => BlogWhereUniqueInput, {
    nullable: false
  })
  where!: BlogWhereUniqueInput;

  @TypeGraphQL.Field(_type => BlogUpdateWithoutAuthorInput, {
    nullable: false
  })
  data!: BlogUpdateWithoutAuthorInput;
}
