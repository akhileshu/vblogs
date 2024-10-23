import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TechnologyCreateWithoutUserInterestsInput } from "../inputs/TechnologyCreateWithoutUserInterestsInput";
import { TechnologyWhereUniqueInput } from "../inputs/TechnologyWhereUniqueInput";

@TypeGraphQL.InputType("TechnologyCreateOrConnectWithoutUserInterestsInput", {})
export class TechnologyCreateOrConnectWithoutUserInterestsInput {
  @TypeGraphQL.Field(_type => TechnologyWhereUniqueInput, {
    nullable: false
  })
  where!: TechnologyWhereUniqueInput;

  @TypeGraphQL.Field(_type => TechnologyCreateWithoutUserInterestsInput, {
    nullable: false
  })
  create!: TechnologyCreateWithoutUserInterestsInput;
}
