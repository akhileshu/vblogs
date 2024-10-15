import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutOrdersInput } from "../inputs/UserUpdateWithoutOrdersInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutOrdersInput", {})
export class UserUpdateToOneWithWhereWithoutOrdersInput {
  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutOrdersInput, {
    nullable: false
  })
  data!: UserUpdateWithoutOrdersInput;
}
