import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogCreateOrConnectWithoutContentInput } from "../inputs/BlogCreateOrConnectWithoutContentInput";
import { BlogCreateWithoutContentInput } from "../inputs/BlogCreateWithoutContentInput";
import { BlogUpdateToOneWithWhereWithoutContentInput } from "../inputs/BlogUpdateToOneWithWhereWithoutContentInput";
import { BlogUpsertWithoutContentInput } from "../inputs/BlogUpsertWithoutContentInput";
import { BlogWhereUniqueInput } from "../inputs/BlogWhereUniqueInput";

@TypeGraphQL.InputType("BlogUpdateOneRequiredWithoutContentNestedInput", {})
export class BlogUpdateOneRequiredWithoutContentNestedInput {
  @TypeGraphQL.Field(_type => BlogCreateWithoutContentInput, {
    nullable: true
  })
  create?: BlogCreateWithoutContentInput | undefined;

  @TypeGraphQL.Field(_type => BlogCreateOrConnectWithoutContentInput, {
    nullable: true
  })
  connectOrCreate?: BlogCreateOrConnectWithoutContentInput | undefined;

  @TypeGraphQL.Field(_type => BlogUpsertWithoutContentInput, {
    nullable: true
  })
  upsert?: BlogUpsertWithoutContentInput | undefined;

  @TypeGraphQL.Field(_type => BlogWhereUniqueInput, {
    nullable: true
  })
  connect?: BlogWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => BlogUpdateToOneWithWhereWithoutContentInput, {
    nullable: true
  })
  update?: BlogUpdateToOneWithWhereWithoutContentInput | undefined;
}
