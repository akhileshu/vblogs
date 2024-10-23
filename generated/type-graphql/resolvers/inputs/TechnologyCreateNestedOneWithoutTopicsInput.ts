import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TechnologyCreateOrConnectWithoutTopicsInput } from "../inputs/TechnologyCreateOrConnectWithoutTopicsInput";
import { TechnologyCreateWithoutTopicsInput } from "../inputs/TechnologyCreateWithoutTopicsInput";
import { TechnologyWhereUniqueInput } from "../inputs/TechnologyWhereUniqueInput";

@TypeGraphQL.InputType("TechnologyCreateNestedOneWithoutTopicsInput", {})
export class TechnologyCreateNestedOneWithoutTopicsInput {
  @TypeGraphQL.Field(_type => TechnologyCreateWithoutTopicsInput, {
    nullable: true
  })
  create?: TechnologyCreateWithoutTopicsInput | undefined;

  @TypeGraphQL.Field(_type => TechnologyCreateOrConnectWithoutTopicsInput, {
    nullable: true
  })
  connectOrCreate?: TechnologyCreateOrConnectWithoutTopicsInput | undefined;

  @TypeGraphQL.Field(_type => TechnologyWhereUniqueInput, {
    nullable: true
  })
  connect?: TechnologyWhereUniqueInput | undefined;
}
