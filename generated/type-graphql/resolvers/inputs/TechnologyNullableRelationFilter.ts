import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TechnologyWhereInput } from "../inputs/TechnologyWhereInput";

@TypeGraphQL.InputType("TechnologyNullableRelationFilter", {})
export class TechnologyNullableRelationFilter {
  @TypeGraphQL.Field(_type => TechnologyWhereInput, {
    nullable: true
  })
  is?: TechnologyWhereInput | undefined;

  @TypeGraphQL.Field(_type => TechnologyWhereInput, {
    nullable: true
  })
  isNot?: TechnologyWhereInput | undefined;
}
