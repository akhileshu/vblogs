import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogCreateWithoutAuthorInput } from "../inputs/BlogCreateWithoutAuthorInput";
import { BlogWhereUniqueInput } from "../inputs/BlogWhereUniqueInput";

@TypeGraphQL.InputType("BlogCreateOrConnectWithoutAuthorInput", {})
export class BlogCreateOrConnectWithoutAuthorInput {
  @TypeGraphQL.Field(_type => BlogWhereUniqueInput, {
    nullable: false
  })
  where!: BlogWhereUniqueInput;

  @TypeGraphQL.Field(_type => BlogCreateWithoutAuthorInput, {
    nullable: false
  })
  create!: BlogCreateWithoutAuthorInput;
}
