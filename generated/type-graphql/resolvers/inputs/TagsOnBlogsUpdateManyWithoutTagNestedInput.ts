import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagsOnBlogsCreateManyTagInputEnvelope } from "../inputs/TagsOnBlogsCreateManyTagInputEnvelope";
import { TagsOnBlogsCreateOrConnectWithoutTagInput } from "../inputs/TagsOnBlogsCreateOrConnectWithoutTagInput";
import { TagsOnBlogsCreateWithoutTagInput } from "../inputs/TagsOnBlogsCreateWithoutTagInput";
import { TagsOnBlogsScalarWhereInput } from "../inputs/TagsOnBlogsScalarWhereInput";
import { TagsOnBlogsUpdateManyWithWhereWithoutTagInput } from "../inputs/TagsOnBlogsUpdateManyWithWhereWithoutTagInput";
import { TagsOnBlogsUpdateWithWhereUniqueWithoutTagInput } from "../inputs/TagsOnBlogsUpdateWithWhereUniqueWithoutTagInput";
import { TagsOnBlogsUpsertWithWhereUniqueWithoutTagInput } from "../inputs/TagsOnBlogsUpsertWithWhereUniqueWithoutTagInput";
import { TagsOnBlogsWhereUniqueInput } from "../inputs/TagsOnBlogsWhereUniqueInput";

@TypeGraphQL.InputType("TagsOnBlogsUpdateManyWithoutTagNestedInput", {})
export class TagsOnBlogsUpdateManyWithoutTagNestedInput {
  @TypeGraphQL.Field(_type => [TagsOnBlogsCreateWithoutTagInput], {
    nullable: true
  })
  create?: TagsOnBlogsCreateWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagsOnBlogsCreateOrConnectWithoutTagInput], {
    nullable: true
  })
  connectOrCreate?: TagsOnBlogsCreateOrConnectWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagsOnBlogsUpsertWithWhereUniqueWithoutTagInput], {
    nullable: true
  })
  upsert?: TagsOnBlogsUpsertWithWhereUniqueWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => TagsOnBlogsCreateManyTagInputEnvelope, {
    nullable: true
  })
  createMany?: TagsOnBlogsCreateManyTagInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TagsOnBlogsWhereUniqueInput], {
    nullable: true
  })
  set?: TagsOnBlogsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagsOnBlogsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TagsOnBlogsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagsOnBlogsWhereUniqueInput], {
    nullable: true
  })
  delete?: TagsOnBlogsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagsOnBlogsWhereUniqueInput], {
    nullable: true
  })
  connect?: TagsOnBlogsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagsOnBlogsUpdateWithWhereUniqueWithoutTagInput], {
    nullable: true
  })
  update?: TagsOnBlogsUpdateWithWhereUniqueWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagsOnBlogsUpdateManyWithWhereWithoutTagInput], {
    nullable: true
  })
  updateMany?: TagsOnBlogsUpdateManyWithWhereWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagsOnBlogsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TagsOnBlogsScalarWhereInput[] | undefined;
}
