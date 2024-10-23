import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserInterestWhereInput } from "../inputs/UserInterestWhereInput";

@TypeGraphQL.InputType("UserInterestListRelationFilter", {})
export class UserInterestListRelationFilter {
  @TypeGraphQL.Field(_type => UserInterestWhereInput, {
    nullable: true
  })
  every?: UserInterestWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserInterestWhereInput, {
    nullable: true
  })
  some?: UserInterestWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserInterestWhereInput, {
    nullable: true
  })
  none?: UserInterestWhereInput | undefined;
}
