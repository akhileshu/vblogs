import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateManyTopicInputEnvelope } from "../inputs/TagCreateManyTopicInputEnvelope";
import { TagCreateOrConnectWithoutTopicInput } from "../inputs/TagCreateOrConnectWithoutTopicInput";
import { TagCreateWithoutTopicInput } from "../inputs/TagCreateWithoutTopicInput";
import { TagWhereUniqueInput } from "../inputs/TagWhereUniqueInput";

@TypeGraphQL.InputType("TagCreateNestedManyWithoutTopicInput", {})
export class TagCreateNestedManyWithoutTopicInput {
  @TypeGraphQL.Field(_type => [TagCreateWithoutTopicInput], {
    nullable: true
  })
  create?: TagCreateWithoutTopicInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagCreateOrConnectWithoutTopicInput], {
    nullable: true
  })
  connectOrCreate?: TagCreateOrConnectWithoutTopicInput[] | undefined;

  @TypeGraphQL.Field(_type => TagCreateManyTopicInputEnvelope, {
    nullable: true
  })
  createMany?: TagCreateManyTopicInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TagWhereUniqueInput], {
    nullable: true
  })
  connect?: TagWhereUniqueInput[] | undefined;
}
