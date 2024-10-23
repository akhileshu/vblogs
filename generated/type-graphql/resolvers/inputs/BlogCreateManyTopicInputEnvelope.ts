import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogCreateManyTopicInput } from "../inputs/BlogCreateManyTopicInput";

@TypeGraphQL.InputType("BlogCreateManyTopicInputEnvelope", {})
export class BlogCreateManyTopicInputEnvelope {
  @TypeGraphQL.Field(_type => [BlogCreateManyTopicInput], {
    nullable: false
  })
  data!: BlogCreateManyTopicInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
