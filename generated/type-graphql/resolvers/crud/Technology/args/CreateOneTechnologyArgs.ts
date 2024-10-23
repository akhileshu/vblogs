import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TechnologyCreateInput } from "../../../inputs/TechnologyCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneTechnologyArgs {
  @TypeGraphQL.Field(_type => TechnologyCreateInput, {
    nullable: false
  })
  data!: TechnologyCreateInput;
}
