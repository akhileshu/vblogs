import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateOrConnectWithoutOrdersInput } from "../inputs/ProductCreateOrConnectWithoutOrdersInput";
import { ProductCreateWithoutOrdersInput } from "../inputs/ProductCreateWithoutOrdersInput";
import { ProductScalarWhereInput } from "../inputs/ProductScalarWhereInput";
import { ProductUpdateManyWithWhereWithoutOrdersInput } from "../inputs/ProductUpdateManyWithWhereWithoutOrdersInput";
import { ProductUpdateWithWhereUniqueWithoutOrdersInput } from "../inputs/ProductUpdateWithWhereUniqueWithoutOrdersInput";
import { ProductUpsertWithWhereUniqueWithoutOrdersInput } from "../inputs/ProductUpsertWithWhereUniqueWithoutOrdersInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductUpdateManyWithoutOrdersNestedInput", {})
export class ProductUpdateManyWithoutOrdersNestedInput {
  @TypeGraphQL.Field(_type => [ProductCreateWithoutOrdersInput], {
    nullable: true
  })
  create?: ProductCreateWithoutOrdersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutOrdersInput], {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutOrdersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductUpsertWithWhereUniqueWithoutOrdersInput], {
    nullable: true
  })
  upsert?: ProductUpsertWithWhereUniqueWithoutOrdersInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [ProductUpdateWithWhereUniqueWithoutOrdersInput], {
    nullable: true
  })
  update?: ProductUpdateWithWhereUniqueWithoutOrdersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductUpdateManyWithWhereWithoutOrdersInput], {
    nullable: true
  })
  updateMany?: ProductUpdateManyWithWhereWithoutOrdersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProductScalarWhereInput[] | undefined;
}
