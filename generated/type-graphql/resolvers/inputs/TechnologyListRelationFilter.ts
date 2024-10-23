import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TechnologyWhereInput } from "../inputs/TechnologyWhereInput";

@TypeGraphQL.InputType("TechnologyListRelationFilter", {})
export class TechnologyListRelationFilter {
  @TypeGraphQL.Field(_type => TechnologyWhereInput, {
    nullable: true
  })
  every?: TechnologyWhereInput | undefined;

  @TypeGraphQL.Field(_type => TechnologyWhereInput, {
    nullable: true
  })
  some?: TechnologyWhereInput | undefined;

  @TypeGraphQL.Field(_type => TechnologyWhereInput, {
    nullable: true
  })
  none?: TechnologyWhereInput | undefined;
}
