import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserInterestCreateManyUserInput } from "../inputs/UserInterestCreateManyUserInput";

@TypeGraphQL.InputType("UserInterestCreateManyUserInputEnvelope", {})
export class UserInterestCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [UserInterestCreateManyUserInput], {
    nullable: false
  })
  data!: UserInterestCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
