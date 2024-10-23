import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TopicCreateOrConnectWithoutTagsInput } from "../inputs/TopicCreateOrConnectWithoutTagsInput";
import { TopicCreateWithoutTagsInput } from "../inputs/TopicCreateWithoutTagsInput";
import { TopicUpdateToOneWithWhereWithoutTagsInput } from "../inputs/TopicUpdateToOneWithWhereWithoutTagsInput";
import { TopicUpsertWithoutTagsInput } from "../inputs/TopicUpsertWithoutTagsInput";
import { TopicWhereInput } from "../inputs/TopicWhereInput";
import { TopicWhereUniqueInput } from "../inputs/TopicWhereUniqueInput";

@TypeGraphQL.InputType("TopicUpdateOneWithoutTagsNestedInput", {})
export class TopicUpdateOneWithoutTagsNestedInput {
  @TypeGraphQL.Field(_type => TopicCreateWithoutTagsInput, {
    nullable: true
  })
  create?: TopicCreateWithoutTagsInput | undefined;

  @TypeGraphQL.Field(_type => TopicCreateOrConnectWithoutTagsInput, {
    nullable: true
  })
  connectOrCreate?: TopicCreateOrConnectWithoutTagsInput | undefined;

  @TypeGraphQL.Field(_type => TopicUpsertWithoutTagsInput, {
    nullable: true
  })
  upsert?: TopicUpsertWithoutTagsInput | undefined;

  @TypeGraphQL.Field(_type => TopicWhereInput, {
    nullable: true
  })
  disconnect?: TopicWhereInput | undefined;

  @TypeGraphQL.Field(_type => TopicWhereInput, {
    nullable: true
  })
  delete?: TopicWhereInput | undefined;

  @TypeGraphQL.Field(_type => TopicWhereUniqueInput, {
    nullable: true
  })
  connect?: TopicWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TopicUpdateToOneWithWhereWithoutTagsInput, {
    nullable: true
  })
  update?: TopicUpdateToOneWithWhereWithoutTagsInput | undefined;
}
