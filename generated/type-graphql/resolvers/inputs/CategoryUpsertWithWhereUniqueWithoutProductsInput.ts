import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateWithoutProductsInput } from "../inputs/CategoryCreateWithoutProductsInput";
import { CategoryUpdateWithoutProductsInput } from "../inputs/CategoryUpdateWithoutProductsInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryUpsertWithWhereUniqueWithoutProductsInput", {})
export class CategoryUpsertWithWhereUniqueWithoutProductsInput {
  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: false
  })
  where!: CategoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => CategoryUpdateWithoutProductsInput, {
    nullable: false
  })
  update!: CategoryUpdateWithoutProductsInput;

  @TypeGraphQL.Field(_type => CategoryCreateWithoutProductsInput, {
    nullable: false
  })
  create!: CategoryCreateWithoutProductsInput;
}
