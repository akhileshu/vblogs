import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutInterestsInput } from "../inputs/UserCreateOrConnectWithoutInterestsInput";
import { UserCreateWithoutInterestsInput } from "../inputs/UserCreateWithoutInterestsInput";
import { UserUpdateToOneWithWhereWithoutInterestsInput } from "../inputs/UserUpdateToOneWithWhereWithoutInterestsInput";
import { UserUpsertWithoutInterestsInput } from "../inputs/UserUpsertWithoutInterestsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutInterestsNestedInput", {})
export class UserUpdateOneRequiredWithoutInterestsNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutInterestsInput, {
    nullable: true
  })
  create?: UserCreateWithoutInterestsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutInterestsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutInterestsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutInterestsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutInterestsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutInterestsInput, {
    nullable: true
  })
  update?: UserUpdateToOneWithWhereWithoutInterestsInput | undefined;
}
