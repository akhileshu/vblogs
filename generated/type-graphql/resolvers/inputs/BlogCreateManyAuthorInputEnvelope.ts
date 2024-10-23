import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogCreateManyAuthorInput } from "../inputs/BlogCreateManyAuthorInput";

@TypeGraphQL.InputType("BlogCreateManyAuthorInputEnvelope", {})
export class BlogCreateManyAuthorInputEnvelope {
  @TypeGraphQL.Field(_type => [BlogCreateManyAuthorInput], {
    nullable: false
  })
  data!: BlogCreateManyAuthorInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
