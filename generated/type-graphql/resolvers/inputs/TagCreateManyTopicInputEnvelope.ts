import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateManyTopicInput } from "../inputs/TagCreateManyTopicInput";

@TypeGraphQL.InputType("TagCreateManyTopicInputEnvelope", {})
export class TagCreateManyTopicInputEnvelope {
  @TypeGraphQL.Field(_type => [TagCreateManyTopicInput], {
    nullable: false
  })
  data!: TagCreateManyTopicInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
