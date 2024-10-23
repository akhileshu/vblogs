import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TechnologyUpdateWithoutTopicsInput } from "../inputs/TechnologyUpdateWithoutTopicsInput";
import { TechnologyWhereInput } from "../inputs/TechnologyWhereInput";

@TypeGraphQL.InputType("TechnologyUpdateToOneWithWhereWithoutTopicsInput", {})
export class TechnologyUpdateToOneWithWhereWithoutTopicsInput {
  @TypeGraphQL.Field(_type => TechnologyWhereInput, {
    nullable: true
  })
  where?: TechnologyWhereInput | undefined;

  @TypeGraphQL.Field(_type => TechnologyUpdateWithoutTopicsInput, {
    nullable: false
  })
  data!: TechnologyUpdateWithoutTopicsInput;
}
