import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { GoalWhereInput } from "../inputs/GoalWhereInput";
import { StringFilter } from "../inputs/StringFilter";
import { TechnologyListRelationFilter } from "../inputs/TechnologyListRelationFilter";

@TypeGraphQL.InputType("GoalWhereUniqueInput", {})
export class GoalWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => [GoalWhereInput], {
    nullable: true
  })
  AND?: GoalWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GoalWhereInput], {
    nullable: true
  })
  OR?: GoalWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GoalWhereInput], {
    nullable: true
  })
  NOT?: GoalWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => TechnologyListRelationFilter, {
    nullable: true
  })
  technologies?: TechnologyListRelationFilter | undefined;
}
