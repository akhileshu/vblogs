import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogCreateWithoutContentInput } from "../inputs/BlogCreateWithoutContentInput";
import { BlogWhereUniqueInput } from "../inputs/BlogWhereUniqueInput";

@TypeGraphQL.InputType("BlogCreateOrConnectWithoutContentInput", {})
export class BlogCreateOrConnectWithoutContentInput {
  @TypeGraphQL.Field(_type => BlogWhereUniqueInput, {
    nullable: false
  })
  where!: BlogWhereUniqueInput;

  @TypeGraphQL.Field(_type => BlogCreateWithoutContentInput, {
    nullable: false
  })
  create!: BlogCreateWithoutContentInput;
}
