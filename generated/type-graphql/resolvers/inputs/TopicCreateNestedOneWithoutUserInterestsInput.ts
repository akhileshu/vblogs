import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TopicCreateOrConnectWithoutUserInterestsInput } from "../inputs/TopicCreateOrConnectWithoutUserInterestsInput";
import { TopicCreateWithoutUserInterestsInput } from "../inputs/TopicCreateWithoutUserInterestsInput";
import { TopicWhereUniqueInput } from "../inputs/TopicWhereUniqueInput";

@TypeGraphQL.InputType("TopicCreateNestedOneWithoutUserInterestsInput", {})
export class TopicCreateNestedOneWithoutUserInterestsInput {
  @TypeGraphQL.Field(_type => TopicCreateWithoutUserInterestsInput, {
    nullable: true
  })
  create?: TopicCreateWithoutUserInterestsInput | undefined;

  @TypeGraphQL.Field(_type => TopicCreateOrConnectWithoutUserInterestsInput, {
    nullable: true
  })
  connectOrCreate?: TopicCreateOrConnectWithoutUserInterestsInput | undefined;

  @TypeGraphQL.Field(_type => TopicWhereUniqueInput, {
    nullable: true
  })
  connect?: TopicWhereUniqueInput | undefined;
}
