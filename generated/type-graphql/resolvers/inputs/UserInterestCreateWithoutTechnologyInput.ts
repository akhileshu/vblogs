import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TopicCreateNestedOneWithoutUserInterestsInput } from "../inputs/TopicCreateNestedOneWithoutUserInterestsInput";
import { UserCreateNestedOneWithoutInterestsInput } from "../inputs/UserCreateNestedOneWithoutInterestsInput";
import { InterestType } from "../../enums/InterestType";

@TypeGraphQL.InputType("UserInterestCreateWithoutTechnologyInput", {})
export class UserInterestCreateWithoutTechnologyInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => InterestType, {
    nullable: false
  })
  interestType!: "TECHNOLOGY" | "TOPIC";

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutInterestsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutInterestsInput;

  @TypeGraphQL.Field(_type => TopicCreateNestedOneWithoutUserInterestsInput, {
    nullable: true
  })
  Topic?: TopicCreateNestedOneWithoutUserInterestsInput | undefined;
}
