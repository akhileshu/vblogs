import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserInterestCreateManyInput } from "../../../inputs/UserInterestCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyUserInterestArgs {
  @TypeGraphQL.Field(_type => [UserInterestCreateManyInput], {
    nullable: false
  })
  data!: UserInterestCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
