import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TechnologyOrderByWithRelationInput } from "../../../inputs/TechnologyOrderByWithRelationInput";
import { TechnologyWhereInput } from "../../../inputs/TechnologyWhereInput";
import { TechnologyWhereUniqueInput } from "../../../inputs/TechnologyWhereUniqueInput";
import { TechnologyScalarFieldEnum } from "../../../../enums/TechnologyScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstTechnologyOrThrowArgs {
  @TypeGraphQL.Field(_type => TechnologyWhereInput, {
    nullable: true
  })
  where?: TechnologyWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TechnologyOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TechnologyOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TechnologyWhereUniqueInput, {
    nullable: true
  })
  cursor?: TechnologyWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [TechnologyScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "title" | "goalId"> | undefined;
}
