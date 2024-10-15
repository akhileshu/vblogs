import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateOrConnectWithoutProductsInput } from "../inputs/CategoryCreateOrConnectWithoutProductsInput";
import { CategoryCreateWithoutProductsInput } from "../inputs/CategoryCreateWithoutProductsInput";
import { CategoryScalarWhereInput } from "../inputs/CategoryScalarWhereInput";
import { CategoryUpdateManyWithWhereWithoutProductsInput } from "../inputs/CategoryUpdateManyWithWhereWithoutProductsInput";
import { CategoryUpdateWithWhereUniqueWithoutProductsInput } from "../inputs/CategoryUpdateWithWhereUniqueWithoutProductsInput";
import { CategoryUpsertWithWhereUniqueWithoutProductsInput } from "../inputs/CategoryUpsertWithWhereUniqueWithoutProductsInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryUpdateManyWithoutProductsNestedInput", {})
export class CategoryUpdateManyWithoutProductsNestedInput {
  @TypeGraphQL.Field(_type => [CategoryCreateWithoutProductsInput], {
    nullable: true
  })
  create?: CategoryCreateWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryCreateOrConnectWithoutProductsInput], {
    nullable: true
  })
  connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryUpsertWithWhereUniqueWithoutProductsInput], {
    nullable: true
  })
  upsert?: CategoryUpsertWithWhereUniqueWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryWhereUniqueInput], {
    nullable: true
  })
  set?: CategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryWhereUniqueInput], {
    nullable: true
  })
  delete?: CategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryWhereUniqueInput], {
    nullable: true
  })
  connect?: CategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryUpdateWithWhereUniqueWithoutProductsInput], {
    nullable: true
  })
  update?: CategoryUpdateWithWhereUniqueWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryUpdateManyWithWhereWithoutProductsInput], {
    nullable: true
  })
  updateMany?: CategoryUpdateManyWithWhereWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CategoryScalarWhereInput[] | undefined;
}
