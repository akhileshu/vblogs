import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogCreateManyAuthorInputEnvelope } from "../inputs/BlogCreateManyAuthorInputEnvelope";
import { BlogCreateOrConnectWithoutAuthorInput } from "../inputs/BlogCreateOrConnectWithoutAuthorInput";
import { BlogCreateWithoutAuthorInput } from "../inputs/BlogCreateWithoutAuthorInput";
import { BlogScalarWhereInput } from "../inputs/BlogScalarWhereInput";
import { BlogUpdateManyWithWhereWithoutAuthorInput } from "../inputs/BlogUpdateManyWithWhereWithoutAuthorInput";
import { BlogUpdateWithWhereUniqueWithoutAuthorInput } from "../inputs/BlogUpdateWithWhereUniqueWithoutAuthorInput";
import { BlogUpsertWithWhereUniqueWithoutAuthorInput } from "../inputs/BlogUpsertWithWhereUniqueWithoutAuthorInput";
import { BlogWhereUniqueInput } from "../inputs/BlogWhereUniqueInput";

@TypeGraphQL.InputType("BlogUpdateManyWithoutAuthorNestedInput", {})
export class BlogUpdateManyWithoutAuthorNestedInput {
  @TypeGraphQL.Field(_type => [BlogCreateWithoutAuthorInput], {
    nullable: true
  })
  create?: BlogCreateWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlogCreateOrConnectWithoutAuthorInput], {
    nullable: true
  })
  connectOrCreate?: BlogCreateOrConnectWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlogUpsertWithWhereUniqueWithoutAuthorInput], {
    nullable: true
  })
  upsert?: BlogUpsertWithWhereUniqueWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => BlogCreateManyAuthorInputEnvelope, {
    nullable: true
  })
  createMany?: BlogCreateManyAuthorInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [BlogUpdateWithWhereUniqueWithoutAuthorInput], {
    nullable: true
  })
  update?: BlogUpdateWithWhereUniqueWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlogUpdateManyWithWhereWithoutAuthorInput], {
    nullable: true
  })
  updateMany?: BlogUpdateManyWithWhereWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlogScalarWhereInput], {
    nullable: true
  })
  deleteMany?: BlogScalarWhereInput[] | undefined;
}
