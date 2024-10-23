import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagsOnBlogsCreateManyBlogInputEnvelope } from "../inputs/TagsOnBlogsCreateManyBlogInputEnvelope";
import { TagsOnBlogsCreateOrConnectWithoutBlogInput } from "../inputs/TagsOnBlogsCreateOrConnectWithoutBlogInput";
import { TagsOnBlogsCreateWithoutBlogInput } from "../inputs/TagsOnBlogsCreateWithoutBlogInput";
import { TagsOnBlogsScalarWhereInput } from "../inputs/TagsOnBlogsScalarWhereInput";
import { TagsOnBlogsUpdateManyWithWhereWithoutBlogInput } from "../inputs/TagsOnBlogsUpdateManyWithWhereWithoutBlogInput";
import { TagsOnBlogsUpdateWithWhereUniqueWithoutBlogInput } from "../inputs/TagsOnBlogsUpdateWithWhereUniqueWithoutBlogInput";
import { TagsOnBlogsUpsertWithWhereUniqueWithoutBlogInput } from "../inputs/TagsOnBlogsUpsertWithWhereUniqueWithoutBlogInput";
import { TagsOnBlogsWhereUniqueInput } from "../inputs/TagsOnBlogsWhereUniqueInput";

@TypeGraphQL.InputType("TagsOnBlogsUpdateManyWithoutBlogNestedInput", {})
export class TagsOnBlogsUpdateManyWithoutBlogNestedInput {
  @TypeGraphQL.Field(_type => [TagsOnBlogsCreateWithoutBlogInput], {
    nullable: true
  })
  create?: TagsOnBlogsCreateWithoutBlogInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagsOnBlogsCreateOrConnectWithoutBlogInput], {
    nullable: true
  })
  connectOrCreate?: TagsOnBlogsCreateOrConnectWithoutBlogInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagsOnBlogsUpsertWithWhereUniqueWithoutBlogInput], {
    nullable: true
  })
  upsert?: TagsOnBlogsUpsertWithWhereUniqueWithoutBlogInput[] | undefined;

  @TypeGraphQL.Field(_type => TagsOnBlogsCreateManyBlogInputEnvelope, {
    nullable: true
  })
  createMany?: TagsOnBlogsCreateManyBlogInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [TagsOnBlogsUpdateWithWhereUniqueWithoutBlogInput], {
    nullable: true
  })
  update?: TagsOnBlogsUpdateWithWhereUniqueWithoutBlogInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagsOnBlogsUpdateManyWithWhereWithoutBlogInput], {
    nullable: true
  })
  updateMany?: TagsOnBlogsUpdateManyWithWhereWithoutBlogInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagsOnBlogsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TagsOnBlogsScalarWhereInput[] | undefined;
}
