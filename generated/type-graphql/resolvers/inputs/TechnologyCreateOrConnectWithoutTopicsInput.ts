import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TechnologyCreateWithoutTopicsInput } from "../inputs/TechnologyCreateWithoutTopicsInput";
import { TechnologyWhereUniqueInput } from "../inputs/TechnologyWhereUniqueInput";

@TypeGraphQL.InputType("TechnologyCreateOrConnectWithoutTopicsInput", {})
export class TechnologyCreateOrConnectWithoutTopicsInput {
  @TypeGraphQL.Field(_type => TechnologyWhereUniqueInput, {
    nullable: false
  })
  where!: TechnologyWhereUniqueInput;

  @TypeGraphQL.Field(_type => TechnologyCreateWithoutTopicsInput, {
    nullable: false
  })
  create!: TechnologyCreateWithoutTopicsInput;
}
