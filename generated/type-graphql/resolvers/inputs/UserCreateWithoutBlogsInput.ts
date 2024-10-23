import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserInterestCreateNestedManyWithoutUserInput } from "../inputs/UserInterestCreateNestedManyWithoutUserInput";

@TypeGraphQL.InputType("UserCreateWithoutBlogsInput", {})
export class UserCreateWithoutBlogsInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  username!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  emailId!: string;

  @TypeGraphQL.Field(_type => UserInterestCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  interests?: UserInterestCreateNestedManyWithoutUserInput | undefined;
}
