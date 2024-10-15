import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CreateManyAndReturnOrderCustomerArgs } from "./args/CreateManyAndReturnOrderCustomerArgs";
import { User } from "../../models/User";

@TypeGraphQL.ObjectType("CreateManyAndReturnOrder", {})
export class CreateManyAndReturnOrder {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  userId!: number | null;

  customer!: User | null;

  @TypeGraphQL.Field(_type => User, {
    name: "customer",
    nullable: true
  })
  getCustomer(@TypeGraphQL.Root() root: CreateManyAndReturnOrder, @TypeGraphQL.Args() args: CreateManyAndReturnOrderCustomerArgs): User | null {
    return root.customer;
  }
}
