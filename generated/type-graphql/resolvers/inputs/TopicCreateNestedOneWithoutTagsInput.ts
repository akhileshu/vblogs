import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TopicCreateOrConnectWithoutTagsInput } from "../inputs/TopicCreateOrConnectWithoutTagsInput";
import { TopicCreateWithoutTagsInput } from "../inputs/TopicCreateWithoutTagsInput";
import { TopicWhereUniqueInput } from "../inputs/TopicWhereUniqueInput";

@TypeGraphQL.InputType("TopicCreateNestedOneWithoutTagsInput", {})
export class TopicCreateNestedOneWithoutTagsInput {
  @TypeGraphQL.Field(_type => TopicCreateWithoutTagsInput, {
    nullable: true
  })
  create?: TopicCreateWithoutTagsInput | undefined;

  @TypeGraphQL.Field(_type => TopicCreateOrConnectWithoutTagsInput, {
    nullable: true
  })
  connectOrCreate?: TopicCreateOrConnectWithoutTagsInput | undefined;

  @TypeGraphQL.Field(_type => TopicWhereUniqueInput, {
    nullable: true
  })
  connect?: TopicWhereUniqueInput | undefined;
}
