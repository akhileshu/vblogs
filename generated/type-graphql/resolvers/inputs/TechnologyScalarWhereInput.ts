import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("TechnologyScalarWhereInput", {})
export class TechnologyScalarWhereInput {
  @TypeGraphQL.Field(_type => [TechnologyScalarWhereInput], {
    nullable: true
  })
  AND?: TechnologyScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TechnologyScalarWhereInput], {
    nullable: true
  })
  OR?: TechnologyScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TechnologyScalarWhereInput], {
    nullable: true
  })
  NOT?: TechnologyScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

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

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  goalId?: StringNullableFilter | undefined;
}
