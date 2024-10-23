import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserInterestOrderByWithRelationInput } from "../../../inputs/UserInterestOrderByWithRelationInput";
import { UserInterestWhereInput } from "../../../inputs/UserInterestWhereInput";
import { UserInterestWhereUniqueInput } from "../../../inputs/UserInterestWhereUniqueInput";
import { UserInterestScalarFieldEnum } from "../../../../enums/UserInterestScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyUserInterestArgs {
  @TypeGraphQL.Field(_type => UserInterestWhereInput, {
    nullable: true
  })
  where?: UserInterestWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UserInterestOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: UserInterestOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => UserInterestWhereUniqueInput, {
    nullable: true
  })
  cursor?: UserInterestWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [UserInterestScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "userId" | "technologyId" | "topicId" | "interestType"> | undefined;
}
