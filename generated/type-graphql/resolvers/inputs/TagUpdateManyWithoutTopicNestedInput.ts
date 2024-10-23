import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateManyTopicInputEnvelope } from "../inputs/TagCreateManyTopicInputEnvelope";
import { TagCreateOrConnectWithoutTopicInput } from "../inputs/TagCreateOrConnectWithoutTopicInput";
import { TagCreateWithoutTopicInput } from "../inputs/TagCreateWithoutTopicInput";
import { TagScalarWhereInput } from "../inputs/TagScalarWhereInput";
import { TagUpdateManyWithWhereWithoutTopicInput } from "../inputs/TagUpdateManyWithWhereWithoutTopicInput";
import { TagUpdateWithWhereUniqueWithoutTopicInput } from "../inputs/TagUpdateWithWhereUniqueWithoutTopicInput";
import { TagUpsertWithWhereUniqueWithoutTopicInput } from "../inputs/TagUpsertWithWhereUniqueWithoutTopicInput";
import { TagWhereUniqueInput } from "../inputs/TagWhereUniqueInput";

@TypeGraphQL.InputType("TagUpdateManyWithoutTopicNestedInput", {})
export class TagUpdateManyWithoutTopicNestedInput {
  @TypeGraphQL.Field(_type => [TagCreateWithoutTopicInput], {
    nullable: true
  })
  create?: TagCreateWithoutTopicInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagCreateOrConnectWithoutTopicInput], {
    nullable: true
  })
  connectOrCreate?: TagCreateOrConnectWithoutTopicInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagUpsertWithWhereUniqueWithoutTopicInput], {
    nullable: true
  })
  upsert?: TagUpsertWithWhereUniqueWithoutTopicInput[] | undefined;

  @TypeGraphQL.Field(_type => TagCreateManyTopicInputEnvelope, {
    nullable: true
  })
  createMany?: TagCreateManyTopicInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TagWhereUniqueInput], {
    nullable: true
  })
  set?: TagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagWhereUniqueInput], {
    nullable: true
  })
  delete?: TagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagWhereUniqueInput], {
    nullable: true
  })
  connect?: TagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagUpdateWithWhereUniqueWithoutTopicInput], {
    nullable: true
  })
  update?: TagUpdateWithWhereUniqueWithoutTopicInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagUpdateManyWithWhereWithoutTopicInput], {
    nullable: true
  })
  updateMany?: TagUpdateManyWithWhereWithoutTopicInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TagScalarWhereInput[] | undefined;
}
