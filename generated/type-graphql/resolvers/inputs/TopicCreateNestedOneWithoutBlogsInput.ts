import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TopicCreateOrConnectWithoutBlogsInput } from "../inputs/TopicCreateOrConnectWithoutBlogsInput";
import { TopicCreateWithoutBlogsInput } from "../inputs/TopicCreateWithoutBlogsInput";
import { TopicWhereUniqueInput } from "../inputs/TopicWhereUniqueInput";

@TypeGraphQL.InputType("TopicCreateNestedOneWithoutBlogsInput", {})
export class TopicCreateNestedOneWithoutBlogsInput {
  @TypeGraphQL.Field(_type => TopicCreateWithoutBlogsInput, {
    nullable: true
  })
  create?: TopicCreateWithoutBlogsInput | undefined;

  @TypeGraphQL.Field(_type => TopicCreateOrConnectWithoutBlogsInput, {
    nullable: true
  })
  connectOrCreate?: TopicCreateOrConnectWithoutBlogsInput | undefined;

  @TypeGraphQL.Field(_type => TopicWhereUniqueInput, {
    nullable: true
  })
  connect?: TopicWhereUniqueInput | undefined;
}
