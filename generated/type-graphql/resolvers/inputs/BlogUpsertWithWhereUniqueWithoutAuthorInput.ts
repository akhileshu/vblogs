import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogCreateWithoutAuthorInput } from "../inputs/BlogCreateWithoutAuthorInput";
import { BlogUpdateWithoutAuthorInput } from "../inputs/BlogUpdateWithoutAuthorInput";
import { BlogWhereUniqueInput } from "../inputs/BlogWhereUniqueInput";

@TypeGraphQL.InputType("BlogUpsertWithWhereUniqueWithoutAuthorInput", {})
export class BlogUpsertWithWhereUniqueWithoutAuthorInput {
  @TypeGraphQL.Field(_type => BlogWhereUniqueInput, {
    nullable: false
  })
  where!: BlogWhereUniqueInput;

  @TypeGraphQL.Field(_type => BlogUpdateWithoutAuthorInput, {
    nullable: false
  })
  update!: BlogUpdateWithoutAuthorInput;

  @TypeGraphQL.Field(_type => BlogCreateWithoutAuthorInput, {
    nullable: false
  })
  create!: BlogCreateWithoutAuthorInput;
}
