import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryUpdateWithoutProductsInput } from "../inputs/CategoryUpdateWithoutProductsInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryUpdateWithWhereUniqueWithoutProductsInput", {})
export class CategoryUpdateWithWhereUniqueWithoutProductsInput {
  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: false
  })
  where!: CategoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => CategoryUpdateWithoutProductsInput, {
    nullable: false
  })
  data!: CategoryUpdateWithoutProductsInput;
}
