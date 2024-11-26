import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogCreateNestedOneWithoutContentInput } from "../inputs/BlogCreateNestedOneWithoutContentInput";

@TypeGraphQL.InputType("BlogContentCreateInput", {})
export class BlogContentCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: false
  })
  intro!: Prisma.InputJsonValue;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: false
  })
  implementation!: Prisma.InputJsonValue;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: false
  })
  advanced!: Prisma.InputJsonValue;

  @TypeGraphQL.Field(_type => BlogCreateNestedOneWithoutContentInput, {
    nullable: false
  })
  Blog!: BlogCreateNestedOneWithoutContentInput;
}
