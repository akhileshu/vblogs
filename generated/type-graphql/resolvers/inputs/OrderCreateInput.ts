import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateNestedManyWithoutOrdersInput } from "../inputs/ProductCreateNestedManyWithoutOrdersInput";
import { UserCreateNestedOneWithoutOrdersInput } from "../inputs/UserCreateNestedOneWithoutOrdersInput";

@TypeGraphQL.InputType("OrderCreateInput", {})
export class OrderCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutOrdersInput, {
    nullable: true
  })
  customer?: UserCreateNestedOneWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateNestedManyWithoutOrdersInput, {
    nullable: true
  })
  products?: ProductCreateNestedManyWithoutOrdersInput | undefined;
}
