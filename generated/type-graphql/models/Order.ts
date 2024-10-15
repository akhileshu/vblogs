import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Product } from "../models/Product";
import { User } from "../models/User";
import { OrderCount } from "../resolvers/outputs/OrderCount";

@TypeGraphQL.ObjectType("Order", {})
export class Order {
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
  userId?: number | null;

  customer?: User | null;

  products?: Product[];

  @TypeGraphQL.Field(_type => OrderCount, {
    nullable: true
  })
  _count?: OrderCount | null;
}
