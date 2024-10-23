import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InterestType } from "../../enums/InterestType";

@TypeGraphQL.InputType("EnumInterestTypeFieldUpdateOperationsInput", {})
export class EnumInterestTypeFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => InterestType, {
    nullable: true
  })
  set?: "TECHNOLOGY" | "TOPIC" | undefined;
}
