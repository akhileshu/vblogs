import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutBlogsInput } from "../inputs/UserCreateOrConnectWithoutBlogsInput";
import { UserCreateWithoutBlogsInput } from "../inputs/UserCreateWithoutBlogsInput";
import { UserUpdateToOneWithWhereWithoutBlogsInput } from "../inputs/UserUpdateToOneWithWhereWithoutBlogsInput";
import { UserUpsertWithoutBlogsInput } from "../inputs/UserUpsertWithoutBlogsInput";
import { UserWhereInput } from "../inputs/UserWhereInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneWithoutBlogsNestedInput", {})
export class UserUpdateOneWithoutBlogsNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutBlogsInput, {
    nullable: true
  })
  create?: UserCreateWithoutBlogsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutBlogsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutBlogsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutBlogsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutBlogsInput | undefined;

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

  @TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutBlogsInput, {
    nullable: true
  })
  update?: UserUpdateToOneWithWhereWithoutBlogsInput | undefined;
}
