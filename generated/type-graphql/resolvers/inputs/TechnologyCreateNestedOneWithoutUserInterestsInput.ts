import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TechnologyCreateOrConnectWithoutUserInterestsInput } from "../inputs/TechnologyCreateOrConnectWithoutUserInterestsInput";
import { TechnologyCreateWithoutUserInterestsInput } from "../inputs/TechnologyCreateWithoutUserInterestsInput";
import { TechnologyWhereUniqueInput } from "../inputs/TechnologyWhereUniqueInput";

@TypeGraphQL.InputType("TechnologyCreateNestedOneWithoutUserInterestsInput", {})
export class TechnologyCreateNestedOneWithoutUserInterestsInput {
  @TypeGraphQL.Field(_type => TechnologyCreateWithoutUserInterestsInput, {
    nullable: true
  })
  create?: TechnologyCreateWithoutUserInterestsInput | undefined;

  @TypeGraphQL.Field(_type => TechnologyCreateOrConnectWithoutUserInterestsInput, {
    nullable: true
  })
  connectOrCreate?: TechnologyCreateOrConnectWithoutUserInterestsInput | undefined;

  @TypeGraphQL.Field(_type => TechnologyWhereUniqueInput, {
    nullable: true
  })
  connect?: TechnologyWhereUniqueInput | undefined;
}
