import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TechnologyCreateWithoutTopicsInput } from "../inputs/TechnologyCreateWithoutTopicsInput";
import { TechnologyUpdateWithoutTopicsInput } from "../inputs/TechnologyUpdateWithoutTopicsInput";
import { TechnologyWhereInput } from "../inputs/TechnologyWhereInput";

@TypeGraphQL.InputType("TechnologyUpsertWithoutTopicsInput", {})
export class TechnologyUpsertWithoutTopicsInput {
  @TypeGraphQL.Field(_type => TechnologyUpdateWithoutTopicsInput, {
    nullable: false
  })
  update!: TechnologyUpdateWithoutTopicsInput;

  @TypeGraphQL.Field(_type => TechnologyCreateWithoutTopicsInput, {
    nullable: false
  })
  create!: TechnologyCreateWithoutTopicsInput;

  @TypeGraphQL.Field(_type => TechnologyWhereInput, {
    nullable: true
  })
  where?: TechnologyWhereInput | undefined;
}
