import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TechnologyCreateWithoutUserInterestsInput } from "../inputs/TechnologyCreateWithoutUserInterestsInput";
import { TechnologyUpdateWithoutUserInterestsInput } from "../inputs/TechnologyUpdateWithoutUserInterestsInput";
import { TechnologyWhereInput } from "../inputs/TechnologyWhereInput";

@TypeGraphQL.InputType("TechnologyUpsertWithoutUserInterestsInput", {})
export class TechnologyUpsertWithoutUserInterestsInput {
  @TypeGraphQL.Field(_type => TechnologyUpdateWithoutUserInterestsInput, {
    nullable: false
  })
  update!: TechnologyUpdateWithoutUserInterestsInput;

  @TypeGraphQL.Field(_type => TechnologyCreateWithoutUserInterestsInput, {
    nullable: false
  })
  create!: TechnologyCreateWithoutUserInterestsInput;

  @TypeGraphQL.Field(_type => TechnologyWhereInput, {
    nullable: true
  })
  where?: TechnologyWhereInput | undefined;
}
