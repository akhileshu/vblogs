import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateOrConnectWithoutProductsInput } from "../inputs/CategoryCreateOrConnectWithoutProductsInput";
import { CategoryCreateWithoutProductsInput } from "../inputs/CategoryCreateWithoutProductsInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryCreateNestedManyWithoutProductsInput", {})
export class CategoryCreateNestedManyWithoutProductsInput {
  @TypeGraphQL.Field(_type => [CategoryCreateWithoutProductsInput], {
    nullable: true
  })
  create?: CategoryCreateWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryCreateOrConnectWithoutProductsInput], {
    nullable: true
  })
  connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryWhereUniqueInput], {
    nullable: true
  })
  connect?: CategoryWhereUniqueInput[] | undefined;
}
