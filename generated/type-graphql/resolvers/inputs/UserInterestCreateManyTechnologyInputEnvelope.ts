import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserInterestCreateManyTechnologyInput } from "../inputs/UserInterestCreateManyTechnologyInput";

@TypeGraphQL.InputType("UserInterestCreateManyTechnologyInputEnvelope", {})
export class UserInterestCreateManyTechnologyInputEnvelope {
  @TypeGraphQL.Field(_type => [UserInterestCreateManyTechnologyInput], {
    nullable: false
  })
  data!: UserInterestCreateManyTechnologyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
