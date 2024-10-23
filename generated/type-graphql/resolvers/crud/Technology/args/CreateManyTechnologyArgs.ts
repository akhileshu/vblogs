import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TechnologyCreateManyInput } from "../../../inputs/TechnologyCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTechnologyArgs {
  @TypeGraphQL.Field(_type => [TechnologyCreateManyInput], {
    nullable: false
  })
  data!: TechnologyCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
