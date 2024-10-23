import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TechnologyCreateOrConnectWithoutUserInterestsInput } from "../inputs/TechnologyCreateOrConnectWithoutUserInterestsInput";
import { TechnologyCreateWithoutUserInterestsInput } from "../inputs/TechnologyCreateWithoutUserInterestsInput";
import { TechnologyUpdateToOneWithWhereWithoutUserInterestsInput } from "../inputs/TechnologyUpdateToOneWithWhereWithoutUserInterestsInput";
import { TechnologyUpsertWithoutUserInterestsInput } from "../inputs/TechnologyUpsertWithoutUserInterestsInput";
import { TechnologyWhereInput } from "../inputs/TechnologyWhereInput";
import { TechnologyWhereUniqueInput } from "../inputs/TechnologyWhereUniqueInput";

@TypeGraphQL.InputType("TechnologyUpdateOneWithoutUserInterestsNestedInput", {})
export class TechnologyUpdateOneWithoutUserInterestsNestedInput {
  @TypeGraphQL.Field(_type => TechnologyCreateWithoutUserInterestsInput, {
    nullable: true
  })
  create?: TechnologyCreateWithoutUserInterestsInput | undefined;

  @TypeGraphQL.Field(_type => TechnologyCreateOrConnectWithoutUserInterestsInput, {
    nullable: true
  })
  connectOrCreate?: TechnologyCreateOrConnectWithoutUserInterestsInput | undefined;

  @TypeGraphQL.Field(_type => TechnologyUpsertWithoutUserInterestsInput, {
    nullable: true
  })
  upsert?: TechnologyUpsertWithoutUserInterestsInput | undefined;

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

  @TypeGraphQL.Field(_type => TechnologyUpdateToOneWithWhereWithoutUserInterestsInput, {
    nullable: true
  })
  update?: TechnologyUpdateToOneWithWhereWithoutUserInterestsInput | undefined;
}
