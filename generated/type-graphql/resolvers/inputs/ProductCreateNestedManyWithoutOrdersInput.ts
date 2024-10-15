import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateOrConnectWithoutOrdersInput } from "../inputs/ProductCreateOrConnectWithoutOrdersInput";
import { ProductCreateWithoutOrdersInput } from "../inputs/ProductCreateWithoutOrdersInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductCreateNestedManyWithoutOrdersInput", {})
export class ProductCreateNestedManyWithoutOrdersInput {
  @TypeGraphQL.Field(_type => [ProductCreateWithoutOrdersInput], {
    nullable: true
  })
  create?: ProductCreateWithoutOrdersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutOrdersInput], {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutOrdersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true
  })
  connect?: ProductWhereUniqueInput[] | undefined;
}
