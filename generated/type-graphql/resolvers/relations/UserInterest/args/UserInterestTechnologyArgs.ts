import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TechnologyWhereInput } from "../../../inputs/TechnologyWhereInput";

@TypeGraphQL.ArgsType()
export class UserInterestTechnologyArgs {
  @TypeGraphQL.Field(_type => TechnologyWhereInput, {
    nullable: true
  })
  where?: TechnologyWhereInput | undefined;
}
