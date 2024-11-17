import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogCreateManyTopicInputEnvelope } from "../inputs/BlogCreateManyTopicInputEnvelope";
import { BlogCreateOrConnectWithoutTopicInput } from "../inputs/BlogCreateOrConnectWithoutTopicInput";
import { BlogCreateWithoutTopicInput } from "../inputs/BlogCreateWithoutTopicInput";
import { BlogWhereUniqueInput } from "../inputs/BlogWhereUniqueInput";

@TypeGraphQL.InputType("BlogCreateNestedManyWithoutTopicInput", {})
export class BlogCreateNestedManyWithoutTopicInput {
  @TypeGraphQL.Field(_type => [BlogCreateWithoutTopicInput], {
    nullable: true
  })
  create?: BlogCreateWithoutTopicInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlogCreateOrConnectWithoutTopicInput], {
    nullable: true
  })
  connectOrCreate?: BlogCreateOrConnectWithoutTopicInput[] | undefined;

  @TypeGraphQL.Field(_type => BlogCreateManyTopicInputEnvelope, {
    nullable: true
  })
  createMany?: BlogCreateManyTopicInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BlogWhereUniqueInput], {
    nullable: true
  })
  connect?: BlogWhereUniqueInput[] | undefined;
}