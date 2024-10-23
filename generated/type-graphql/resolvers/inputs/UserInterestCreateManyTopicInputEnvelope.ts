import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserInterestCreateManyTopicInput } from "../inputs/UserInterestCreateManyTopicInput";

@TypeGraphQL.InputType("UserInterestCreateManyTopicInputEnvelope", {})
export class UserInterestCreateManyTopicInputEnvelope {
  @TypeGraphQL.Field(_type => [UserInterestCreateManyTopicInput], {
    nullable: false
  })
  data!: UserInterestCreateManyTopicInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
