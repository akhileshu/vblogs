import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogCreateOrConnectWithoutTagsInput } from "../inputs/BlogCreateOrConnectWithoutTagsInput";
import { BlogCreateWithoutTagsInput } from "../inputs/BlogCreateWithoutTagsInput";
import { BlogUpdateToOneWithWhereWithoutTagsInput } from "../inputs/BlogUpdateToOneWithWhereWithoutTagsInput";
import { BlogUpsertWithoutTagsInput } from "../inputs/BlogUpsertWithoutTagsInput";
import { BlogWhereUniqueInput } from "../inputs/BlogWhereUniqueInput";

@TypeGraphQL.InputType("BlogUpdateOneRequiredWithoutTagsNestedInput", {})
export class BlogUpdateOneRequiredWithoutTagsNestedInput {
  @TypeGraphQL.Field(_type => BlogCreateWithoutTagsInput, {
    nullable: true
  })
  create?: BlogCreateWithoutTagsInput | undefined;

  @TypeGraphQL.Field(_type => BlogCreateOrConnectWithoutTagsInput, {
    nullable: true
  })
  connectOrCreate?: BlogCreateOrConnectWithoutTagsInput | undefined;

  @TypeGraphQL.Field(_type => BlogUpsertWithoutTagsInput, {
    nullable: true
  })
  upsert?: BlogUpsertWithoutTagsInput | undefined;

  @TypeGraphQL.Field(_type => BlogWhereUniqueInput, {
    nullable: true
  })
  connect?: BlogWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => BlogUpdateToOneWithWhereWithoutTagsInput, {
    nullable: true
  })
  update?: BlogUpdateToOneWithWhereWithoutTagsInput | undefined;
}
