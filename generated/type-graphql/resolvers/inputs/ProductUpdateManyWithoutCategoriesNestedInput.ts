import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateOrConnectWithoutCategoriesInput } from "../inputs/ProductCreateOrConnectWithoutCategoriesInput";
import { ProductCreateWithoutCategoriesInput } from "../inputs/ProductCreateWithoutCategoriesInput";
import { ProductScalarWhereInput } from "../inputs/ProductScalarWhereInput";
import { ProductUpdateManyWithWhereWithoutCategoriesInput } from "../inputs/ProductUpdateManyWithWhereWithoutCategoriesInput";
import { ProductUpdateWithWhereUniqueWithoutCategoriesInput } from "../inputs/ProductUpdateWithWhereUniqueWithoutCategoriesInput";
import { ProductUpsertWithWhereUniqueWithoutCategoriesInput } from "../inputs/ProductUpsertWithWhereUniqueWithoutCategoriesInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductUpdateManyWithoutCategoriesNestedInput", {})
export class ProductUpdateManyWithoutCategoriesNestedInput {
  @TypeGraphQL.Field(_type => [ProductCreateWithoutCategoriesInput], {
    nullable: true
  })
  create?: ProductCreateWithoutCategoriesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutCategoriesInput], {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutCategoriesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductUpsertWithWhereUniqueWithoutCategoriesInput], {
    nullable: true
  })
  upsert?: ProductUpsertWithWhereUniqueWithoutCategoriesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true
  })
  set?: ProductWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ProductWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true
  })
  delete?: ProductWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true
  })
  connect?: ProductWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductUpdateWithWhereUniqueWithoutCategoriesInput], {
    nullable: true
  })
  update?: ProductUpdateWithWhereUniqueWithoutCategoriesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductUpdateManyWithWhereWithoutCategoriesInput], {
    nullable: true
  })
  updateMany?: ProductUpdateManyWithWhereWithoutCategoriesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProductScalarWhereInput[] | undefined;
}
