import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateOrConnectWithoutCategoriesInput } from "../inputs/ProductCreateOrConnectWithoutCategoriesInput";
import { ProductCreateWithoutCategoriesInput } from "../inputs/ProductCreateWithoutCategoriesInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductCreateNestedManyWithoutCategoriesInput", {})
export class ProductCreateNestedManyWithoutCategoriesInput {
  @TypeGraphQL.Field(_type => [ProductCreateWithoutCategoriesInput], {
    nullable: true
  })
  create?: ProductCreateWithoutCategoriesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutCategoriesInput], {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutCategoriesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true
  })
  connect?: ProductWhereUniqueInput[] | undefined;
}
