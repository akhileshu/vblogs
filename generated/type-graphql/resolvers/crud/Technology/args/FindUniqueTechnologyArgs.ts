import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TechnologyWhereUniqueInput } from "../../../inputs/TechnologyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueTechnologyArgs {
  @TypeGraphQL.Field(_type => TechnologyWhereUniqueInput, {
    nullable: false
  })
  where!: TechnologyWhereUniqueInput;
}
