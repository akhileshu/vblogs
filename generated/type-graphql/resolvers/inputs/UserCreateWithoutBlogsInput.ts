import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserInterestCreateNestedManyWithoutUserInput } from "../inputs/UserInterestCreateNestedManyWithoutUserInput";
import { UserRole } from "../../enums/UserRole";

@TypeGraphQL.InputType("UserCreateWithoutBlogsInput", {})
export class UserCreateWithoutBlogsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserRole, {
    nullable: true
  })
  role?: "LEARNER" | "AUTHOR" | "ADMIN" | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  image!: string;

  @TypeGraphQL.Field(_type => UserInterestCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  interests?: UserInterestCreateNestedManyWithoutUserInput | undefined;
}
