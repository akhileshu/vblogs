import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TechnologyWhereUniqueInput } from "../../../inputs/TechnologyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneTechnologyArgs {
  @TypeGraphQL.Field(_type => TechnologyWhereUniqueInput, {
    nullable: false
  })
  where!: TechnologyWhereUniqueInput;
}
