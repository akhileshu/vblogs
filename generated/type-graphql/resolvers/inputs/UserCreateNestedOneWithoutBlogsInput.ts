import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutBlogsInput } from "../inputs/UserCreateOrConnectWithoutBlogsInput";
import { UserCreateWithoutBlogsInput } from "../inputs/UserCreateWithoutBlogsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutBlogsInput", {})
export class UserCreateNestedOneWithoutBlogsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutBlogsInput, {
    nullable: true
  })
  create?: UserCreateWithoutBlogsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutBlogsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutBlogsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
