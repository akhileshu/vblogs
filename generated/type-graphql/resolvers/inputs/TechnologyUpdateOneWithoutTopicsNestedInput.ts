import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TechnologyCreateOrConnectWithoutTopicsInput } from "../inputs/TechnologyCreateOrConnectWithoutTopicsInput";
import { TechnologyCreateWithoutTopicsInput } from "../inputs/TechnologyCreateWithoutTopicsInput";
import { TechnologyUpdateToOneWithWhereWithoutTopicsInput } from "../inputs/TechnologyUpdateToOneWithWhereWithoutTopicsInput";
import { TechnologyUpsertWithoutTopicsInput } from "../inputs/TechnologyUpsertWithoutTopicsInput";
import { TechnologyWhereInput } from "../inputs/TechnologyWhereInput";
import { TechnologyWhereUniqueInput } from "../inputs/TechnologyWhereUniqueInput";

@TypeGraphQL.InputType("TechnologyUpdateOneWithoutTopicsNestedInput", {})
export class TechnologyUpdateOneWithoutTopicsNestedInput {
  @TypeGraphQL.Field(_type => TechnologyCreateWithoutTopicsInput, {
    nullable: true
  })
  create?: TechnologyCreateWithoutTopicsInput | undefined;

  @TypeGraphQL.Field(_type => TechnologyCreateOrConnectWithoutTopicsInput, {
    nullable: true
  })
  connectOrCreate?: TechnologyCreateOrConnectWithoutTopicsInput | undefined;

  @TypeGraphQL.Field(_type => TechnologyUpsertWithoutTopicsInput, {
    nullable: true
  })
  upsert?: TechnologyUpsertWithoutTopicsInput | undefined;

  @TypeGraphQL.Field(_type => TechnologyWhereInput, {
    nullable: true
  })
  disconnect?: TechnologyWhereInput | undefined;

  @TypeGraphQL.Field(_type => TechnologyWhereInput, {
    nullable: true
  })
  delete?: TechnologyWhereInput | undefined;

  @TypeGraphQL.Field(_type => TechnologyWhereUniqueInput, {
    nullable: true
  })
  connect?: TechnologyWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TechnologyUpdateToOneWithWhereWithoutTopicsInput, {
    nullable: true
  })
  update?: TechnologyUpdateToOneWithWhereWithoutTopicsInput | undefined;
}
