import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TechnologyScalarWhereInput } from "../inputs/TechnologyScalarWhereInput";
import { TechnologyUpdateManyMutationInput } from "../inputs/TechnologyUpdateManyMutationInput";

@TypeGraphQL.InputType("TechnologyUpdateManyWithWhereWithoutGoalInput", {})
export class TechnologyUpdateManyWithWhereWithoutGoalInput {
  @TypeGraphQL.Field(_type => TechnologyScalarWhereInput, {
    nullable: false
  })
  where!: TechnologyScalarWhereInput;

  @TypeGraphQL.Field(_type => TechnologyUpdateManyMutationInput, {
    nullable: false
  })
  data!: TechnologyUpdateManyMutationInput;
}
