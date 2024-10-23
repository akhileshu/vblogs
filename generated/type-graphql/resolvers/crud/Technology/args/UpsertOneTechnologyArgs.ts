import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TechnologyCreateInput } from "../../../inputs/TechnologyCreateInput";
import { TechnologyUpdateInput } from "../../../inputs/TechnologyUpdateInput";
import { TechnologyWhereUniqueInput } from "../../../inputs/TechnologyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneTechnologyArgs {
  @TypeGraphQL.Field(_type => TechnologyWhereUniqueInput, {
    nullable: false
  })
  where!: TechnologyWhereUniqueInput;

  @TypeGraphQL.Field(_type => TechnologyCreateInput, {
    nullable: false
  })
  create!: TechnologyCreateInput;

  @TypeGraphQL.Field(_type => TechnologyUpdateInput, {
    nullable: false
  })
  update!: TechnologyUpdateInput;
}
