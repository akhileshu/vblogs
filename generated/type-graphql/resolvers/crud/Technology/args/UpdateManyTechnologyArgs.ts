import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TechnologyUpdateManyMutationInput } from "../../../inputs/TechnologyUpdateManyMutationInput";
import { TechnologyWhereInput } from "../../../inputs/TechnologyWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTechnologyArgs {
  @TypeGraphQL.Field(_type => TechnologyUpdateManyMutationInput, {
    nullable: false
  })
  data!: TechnologyUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TechnologyWhereInput, {
    nullable: true
  })
  where?: TechnologyWhereInput | undefined;
}
