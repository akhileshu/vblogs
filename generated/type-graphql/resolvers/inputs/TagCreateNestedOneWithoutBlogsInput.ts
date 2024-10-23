import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateOrConnectWithoutBlogsInput } from "../inputs/TagCreateOrConnectWithoutBlogsInput";
import { TagCreateWithoutBlogsInput } from "../inputs/TagCreateWithoutBlogsInput";
import { TagWhereUniqueInput } from "../inputs/TagWhereUniqueInput";

@TypeGraphQL.InputType("TagCreateNestedOneWithoutBlogsInput", {})
export class TagCreateNestedOneWithoutBlogsInput {
  @TypeGraphQL.Field(_type => TagCreateWithoutBlogsInput, {
    nullable: true
  })
  create?: TagCreateWithoutBlogsInput | undefined;

  @TypeGraphQL.Field(_type => TagCreateOrConnectWithoutBlogsInput, {
    nullable: true
  })
  connectOrCreate?: TagCreateOrConnectWithoutBlogsInput | undefined;

  @TypeGraphQL.Field(_type => TagWhereUniqueInput, {
    nullable: true
  })
  connect?: TagWhereUniqueInput | undefined;
}
