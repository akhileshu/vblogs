import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutInterestsInput } from "../inputs/UserCreateWithoutInterestsInput";
import { UserUpdateWithoutInterestsInput } from "../inputs/UserUpdateWithoutInterestsInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpsertWithoutInterestsInput", {})
export class UserUpsertWithoutInterestsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutInterestsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutInterestsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutInterestsInput, {
    nullable: false
  })
  create!: UserCreateWithoutInterestsInput;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;
}
