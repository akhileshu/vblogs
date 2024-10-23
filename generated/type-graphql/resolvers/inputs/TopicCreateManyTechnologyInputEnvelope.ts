import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TopicCreateManyTechnologyInput } from "../inputs/TopicCreateManyTechnologyInput";

@TypeGraphQL.InputType("TopicCreateManyTechnologyInputEnvelope", {})
export class TopicCreateManyTechnologyInputEnvelope {
  @TypeGraphQL.Field(_type => [TopicCreateManyTechnologyInput], {
    nullable: false
  })
  data!: TopicCreateManyTechnologyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
