import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TopicCreateManyTechnologyInputEnvelope } from "../inputs/TopicCreateManyTechnologyInputEnvelope";
import { TopicCreateOrConnectWithoutTechnologyInput } from "../inputs/TopicCreateOrConnectWithoutTechnologyInput";
import { TopicCreateWithoutTechnologyInput } from "../inputs/TopicCreateWithoutTechnologyInput";
import { TopicWhereUniqueInput } from "../inputs/TopicWhereUniqueInput";

@TypeGraphQL.InputType("TopicCreateNestedManyWithoutTechnologyInput", {})
export class TopicCreateNestedManyWithoutTechnologyInput {
  @TypeGraphQL.Field(_type => [TopicCreateWithoutTechnologyInput], {
    nullable: true
  })
  create?: TopicCreateWithoutTechnologyInput[] | undefined;

  @TypeGraphQL.Field(_type => [TopicCreateOrConnectWithoutTechnologyInput], {
    nullable: true
  })
  connectOrCreate?: TopicCreateOrConnectWithoutTechnologyInput[] | undefined;

  @TypeGraphQL.Field(_type => TopicCreateManyTechnologyInputEnvelope, {
    nullable: true
  })
  createMany?: TopicCreateManyTechnologyInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TopicWhereUniqueInput], {
    nullable: true
  })
  connect?: TopicWhereUniqueInput[] | undefined;
}
