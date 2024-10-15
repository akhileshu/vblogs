import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateNestedManyWithoutCategoriesInput } from "../inputs/ProductCreateNestedManyWithoutCategoriesInput";

@TypeGraphQL.InputType("CategoryCreateInput", {})
export class CategoryCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => ProductCreateNestedManyWithoutCategoriesInput, {
    nullable: true
  })
  products?: ProductCreateNestedManyWithoutCategoriesInput | undefined;
}
