import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TechnologyUpdateWithoutUserInterestsInput } from "../inputs/TechnologyUpdateWithoutUserInterestsInput";
import { TechnologyWhereInput } from "../inputs/TechnologyWhereInput";

@TypeGraphQL.InputType("TechnologyUpdateToOneWithWhereWithoutUserInterestsInput", {})
export class TechnologyUpdateToOneWithWhereWithoutUserInterestsInput {
  @TypeGraphQL.Field(_type => TechnologyWhereInput, {
    nullable: true
  })
  where?: TechnologyWhereInput | undefined;

  @TypeGraphQL.Field(_type => TechnologyUpdateWithoutUserInterestsInput, {
    nullable: false
  })
  data!: TechnologyUpdateWithoutUserInterestsInput;
}
