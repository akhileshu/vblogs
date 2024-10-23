import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TopicCreateOrConnectWithoutBlogsInput } from "../inputs/TopicCreateOrConnectWithoutBlogsInput";
import { TopicCreateWithoutBlogsInput } from "../inputs/TopicCreateWithoutBlogsInput";
import { TopicUpdateToOneWithWhereWithoutBlogsInput } from "../inputs/TopicUpdateToOneWithWhereWithoutBlogsInput";
import { TopicUpsertWithoutBlogsInput } from "../inputs/TopicUpsertWithoutBlogsInput";
import { TopicWhereInput } from "../inputs/TopicWhereInput";
import { TopicWhereUniqueInput } from "../inputs/TopicWhereUniqueInput";

@TypeGraphQL.InputType("TopicUpdateOneWithoutBlogsNestedInput", {})
export class TopicUpdateOneWithoutBlogsNestedInput {
  @TypeGraphQL.Field(_type => TopicCreateWithoutBlogsInput, {
    nullable: true
  })
  create?: TopicCreateWithoutBlogsInput | undefined;

  @TypeGraphQL.Field(_type => TopicCreateOrConnectWithoutBlogsInput, {
    nullable: true
  })
  connectOrCreate?: TopicCreateOrConnectWithoutBlogsInput | undefined;

  @TypeGraphQL.Field(_type => TopicUpsertWithoutBlogsInput, {
    nullable: true
  })
  upsert?: TopicUpsertWithoutBlogsInput | undefined;

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

  @TypeGraphQL.Field(_type => TopicUpdateToOneWithWhereWithoutBlogsInput, {
    nullable: true
  })
  update?: TopicUpdateToOneWithWhereWithoutBlogsInput | undefined;
}
