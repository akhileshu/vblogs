import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TechnologyUpdateInput } from "../../../inputs/TechnologyUpdateInput";
import { TechnologyWhereUniqueInput } from "../../../inputs/TechnologyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneTechnologyArgs {
  @TypeGraphQL.Field(_type => TechnologyUpdateInput, {
    nullable: false
  })
  data!: TechnologyUpdateInput;

  @TypeGraphQL.Field(_type => TechnologyWhereUniqueInput, {
    nullable: false
  })
  where!: TechnologyWhereUniqueInput;
}
