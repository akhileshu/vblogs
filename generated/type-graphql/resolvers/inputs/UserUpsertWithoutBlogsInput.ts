import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutBlogsInput } from "../inputs/UserCreateWithoutBlogsInput";
import { UserUpdateWithoutBlogsInput } from "../inputs/UserUpdateWithoutBlogsInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpsertWithoutBlogsInput", {})
export class UserUpsertWithoutBlogsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutBlogsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutBlogsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutBlogsInput, {
    nullable: false
  })
  create!: UserCreateWithoutBlogsInput;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;
}
