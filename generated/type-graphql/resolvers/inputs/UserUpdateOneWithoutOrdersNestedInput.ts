import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutOrdersInput } from "../inputs/UserCreateOrConnectWithoutOrdersInput";
import { UserCreateWithoutOrdersInput } from "../inputs/UserCreateWithoutOrdersInput";
import { UserUpdateToOneWithWhereWithoutOrdersInput } from "../inputs/UserUpdateToOneWithWhereWithoutOrdersInput";
import { UserUpsertWithoutOrdersInput } from "../inputs/UserUpsertWithoutOrdersInput";
import { UserWhereInput } from "../inputs/UserWhereInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneWithoutOrdersNestedInput", {})
export class UserUpdateOneWithoutOrdersNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutOrdersInput, {
    nullable: true
  })
  create?: UserCreateWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutOrdersInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutOrdersInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  disconnect?: UserWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  delete?: UserWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutOrdersInput, {
    nullable: true
  })
  update?: UserUpdateToOneWithWhereWithoutOrdersInput | undefined;
}
