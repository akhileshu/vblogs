import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TopicCreateNestedManyWithoutTechnologyInput } from "../inputs/TopicCreateNestedManyWithoutTechnologyInput";
import { UserInterestCreateNestedManyWithoutTechnologyInput } from "../inputs/UserInterestCreateNestedManyWithoutTechnologyInput";

@TypeGraphQL.InputType("TechnologyCreateWithoutGoalInput", {})
export class TechnologyCreateWithoutGoalInput {
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
  title!: string;

  @TypeGraphQL.Field(_type => TopicCreateNestedManyWithoutTechnologyInput, {
    nullable: true
  })
  Topics?: TopicCreateNestedManyWithoutTechnologyInput | undefined;

  @TypeGraphQL.Field(_type => UserInterestCreateNestedManyWithoutTechnologyInput, {
    nullable: true
  })
  userInterests?: UserInterestCreateNestedManyWithoutTechnologyInput | undefined;
}
