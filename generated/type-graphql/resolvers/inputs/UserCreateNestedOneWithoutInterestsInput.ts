import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutInterestsInput } from "../inputs/UserCreateOrConnectWithoutInterestsInput";
import { UserCreateWithoutInterestsInput } from "../inputs/UserCreateWithoutInterestsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutInterestsInput", {})
export class UserCreateNestedOneWithoutInterestsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutInterestsInput, {
    nullable: true
  })
  create?: UserCreateWithoutInterestsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutInterestsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutInterestsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
