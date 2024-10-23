import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogCreateOrConnectWithoutVideoInput } from "../inputs/BlogCreateOrConnectWithoutVideoInput";
import { BlogCreateWithoutVideoInput } from "../inputs/BlogCreateWithoutVideoInput";
import { BlogUpdateToOneWithWhereWithoutVideoInput } from "../inputs/BlogUpdateToOneWithWhereWithoutVideoInput";
import { BlogUpsertWithoutVideoInput } from "../inputs/BlogUpsertWithoutVideoInput";
import { BlogWhereUniqueInput } from "../inputs/BlogWhereUniqueInput";

@TypeGraphQL.InputType("BlogUpdateOneRequiredWithoutVideoNestedInput", {})
export class BlogUpdateOneRequiredWithoutVideoNestedInput {
  @TypeGraphQL.Field(_type => BlogCreateWithoutVideoInput, {
    nullable: true
  })
  create?: BlogCreateWithoutVideoInput | undefined;

  @TypeGraphQL.Field(_type => BlogCreateOrConnectWithoutVideoInput, {
    nullable: true
  })
  connectOrCreate?: BlogCreateOrConnectWithoutVideoInput | undefined;

  @TypeGraphQL.Field(_type => BlogUpsertWithoutVideoInput, {
    nullable: true
  })
  upsert?: BlogUpsertWithoutVideoInput | undefined;

  @TypeGraphQL.Field(_type => BlogWhereUniqueInput, {
    nullable: true
  })
  connect?: BlogWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => BlogUpdateToOneWithWhereWithoutVideoInput, {
    nullable: true
  })
  update?: BlogUpdateToOneWithWhereWithoutVideoInput | undefined;
}
