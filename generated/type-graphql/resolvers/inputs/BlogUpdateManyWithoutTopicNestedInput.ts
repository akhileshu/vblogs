import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogCreateManyTopicInputEnvelope } from "../inputs/BlogCreateManyTopicInputEnvelope";
import { BlogCreateOrConnectWithoutTopicInput } from "../inputs/BlogCreateOrConnectWithoutTopicInput";
import { BlogCreateWithoutTopicInput } from "../inputs/BlogCreateWithoutTopicInput";
import { BlogScalarWhereInput } from "../inputs/BlogScalarWhereInput";
import { BlogUpdateManyWithWhereWithoutTopicInput } from "../inputs/BlogUpdateManyWithWhereWithoutTopicInput";
import { BlogUpdateWithWhereUniqueWithoutTopicInput } from "../inputs/BlogUpdateWithWhereUniqueWithoutTopicInput";
import { BlogUpsertWithWhereUniqueWithoutTopicInput } from "../inputs/BlogUpsertWithWhereUniqueWithoutTopicInput";
import { BlogWhereUniqueInput } from "../inputs/BlogWhereUniqueInput";

@TypeGraphQL.InputType("BlogUpdateManyWithoutTopicNestedInput", {})
export class BlogUpdateManyWithoutTopicNestedInput {
  @TypeGraphQL.Field(_type => [BlogCreateWithoutTopicInput], {
    nullable: true
  })
  create?: BlogCreateWithoutTopicInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlogCreateOrConnectWithoutTopicInput], {
    nullable: true
  })
  connectOrCreate?: BlogCreateOrConnectWithoutTopicInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlogUpsertWithWhereUniqueWithoutTopicInput], {
    nullable: true
  })
  upsert?: BlogUpsertWithWhereUniqueWithoutTopicInput[] | undefined;

  @TypeGraphQL.Field(_type => BlogCreateManyTopicInputEnvelope, {
    nullable: true
  })
  createMany?: BlogCreateManyTopicInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BlogWhereUniqueInput], {
    nullable: true
  })
  set?: BlogWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlogWhereUniqueInput], {
    nullable: true
  })
  disconnect?: BlogWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlogWhereUniqueInput], {
    nullable: true
  })
  delete?: BlogWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlogWhereUniqueInput], {
    nullable: true
  })
  connect?: BlogWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlogUpdateWithWhereUniqueWithoutTopicInput], {
    nullable: true
  })
  update?: BlogUpdateWithWhereUniqueWithoutTopicInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlogUpdateManyWithWhereWithoutTopicInput], {
    nullable: true
  })
  updateMany?: BlogUpdateManyWithWhereWithoutTopicInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlogScalarWhereInput], {
    nullable: true
  })
  deleteMany?: BlogScalarWhereInput[] | undefined;
}
