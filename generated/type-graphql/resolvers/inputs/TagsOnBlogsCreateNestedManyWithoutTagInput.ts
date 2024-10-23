import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagsOnBlogsCreateManyTagInputEnvelope } from "../inputs/TagsOnBlogsCreateManyTagInputEnvelope";
import { TagsOnBlogsCreateOrConnectWithoutTagInput } from "../inputs/TagsOnBlogsCreateOrConnectWithoutTagInput";
import { TagsOnBlogsCreateWithoutTagInput } from "../inputs/TagsOnBlogsCreateWithoutTagInput";
import { TagsOnBlogsWhereUniqueInput } from "../inputs/TagsOnBlogsWhereUniqueInput";

@TypeGraphQL.InputType("TagsOnBlogsCreateNestedManyWithoutTagInput", {})
export class TagsOnBlogsCreateNestedManyWithoutTagInput {
  @TypeGraphQL.Field(_type => [TagsOnBlogsCreateWithoutTagInput], {
    nullable: true
  })
  create?: TagsOnBlogsCreateWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagsOnBlogsCreateOrConnectWithoutTagInput], {
    nullable: true
  })
  connectOrCreate?: TagsOnBlogsCreateOrConnectWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => TagsOnBlogsCreateManyTagInputEnvelope, {
    nullable: true
  })
  createMany?: TagsOnBlogsCreateManyTagInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TagsOnBlogsWhereUniqueInput], {
    nullable: true
  })
  connect?: TagsOnBlogsWhereUniqueInput[] | undefined;
}
