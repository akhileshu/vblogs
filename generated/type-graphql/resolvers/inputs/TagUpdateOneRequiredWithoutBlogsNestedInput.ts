import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateOrConnectWithoutBlogsInput } from "../inputs/TagCreateOrConnectWithoutBlogsInput";
import { TagCreateWithoutBlogsInput } from "../inputs/TagCreateWithoutBlogsInput";
import { TagUpdateToOneWithWhereWithoutBlogsInput } from "../inputs/TagUpdateToOneWithWhereWithoutBlogsInput";
import { TagUpsertWithoutBlogsInput } from "../inputs/TagUpsertWithoutBlogsInput";
import { TagWhereUniqueInput } from "../inputs/TagWhereUniqueInput";

@TypeGraphQL.InputType("TagUpdateOneRequiredWithoutBlogsNestedInput", {})
export class TagUpdateOneRequiredWithoutBlogsNestedInput {
  @TypeGraphQL.Field(_type => TagCreateWithoutBlogsInput, {
    nullable: true
  })
  create?: TagCreateWithoutBlogsInput | undefined;

  @TypeGraphQL.Field(_type => TagCreateOrConnectWithoutBlogsInput, {
    nullable: true
  })
  connectOrCreate?: TagCreateOrConnectWithoutBlogsInput | undefined;

  @TypeGraphQL.Field(_type => TagUpsertWithoutBlogsInput, {
    nullable: true
  })
  upsert?: TagUpsertWithoutBlogsInput | undefined;

  @TypeGraphQL.Field(_type => TagWhereUniqueInput, {
    nullable: true
  })
  connect?: TagWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TagUpdateToOneWithWhereWithoutBlogsInput, {
    nullable: true
  })
  update?: TagUpdateToOneWithWhereWithoutBlogsInput | undefined;
}
