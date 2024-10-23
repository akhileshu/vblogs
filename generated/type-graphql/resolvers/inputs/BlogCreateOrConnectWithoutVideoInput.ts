import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogCreateWithoutVideoInput } from "../inputs/BlogCreateWithoutVideoInput";
import { BlogWhereUniqueInput } from "../inputs/BlogWhereUniqueInput";

@TypeGraphQL.InputType("BlogCreateOrConnectWithoutVideoInput", {})
export class BlogCreateOrConnectWithoutVideoInput {
  @TypeGraphQL.Field(_type => BlogWhereUniqueInput, {
    nullable: false
  })
  where!: BlogWhereUniqueInput;

  @TypeGraphQL.Field(_type => BlogCreateWithoutVideoInput, {
    nullable: false
  })
  create!: BlogCreateWithoutVideoInput;
}
