import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TechnologyCreateNestedOneWithoutUserInterestsInput } from "../inputs/TechnologyCreateNestedOneWithoutUserInterestsInput";
import { TopicCreateNestedOneWithoutUserInterestsInput } from "../inputs/TopicCreateNestedOneWithoutUserInterestsInput";
import { InterestType } from "../../enums/InterestType";

@TypeGraphQL.InputType("UserInterestCreateWithoutUserInput", {})
export class UserInterestCreateWithoutUserInput {
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

  @TypeGraphQL.Field(_type => InterestType, {
    nullable: false
  })
  interestType!: "TECHNOLOGY" | "TOPIC";

  @TypeGraphQL.Field(_type => TechnologyCreateNestedOneWithoutUserInterestsInput, {
    nullable: true
  })
  Technology?: TechnologyCreateNestedOneWithoutUserInterestsInput | undefined;

  @TypeGraphQL.Field(_type => TopicCreateNestedOneWithoutUserInterestsInput, {
    nullable: true
  })
  Topic?: TopicCreateNestedOneWithoutUserInterestsInput | undefined;
}
