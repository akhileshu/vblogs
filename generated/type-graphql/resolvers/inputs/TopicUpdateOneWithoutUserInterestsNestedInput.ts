import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TopicCreateOrConnectWithoutUserInterestsInput } from "../inputs/TopicCreateOrConnectWithoutUserInterestsInput";
import { TopicCreateWithoutUserInterestsInput } from "../inputs/TopicCreateWithoutUserInterestsInput";
import { TopicUpdateToOneWithWhereWithoutUserInterestsInput } from "../inputs/TopicUpdateToOneWithWhereWithoutUserInterestsInput";
import { TopicUpsertWithoutUserInterestsInput } from "../inputs/TopicUpsertWithoutUserInterestsInput";
import { TopicWhereInput } from "../inputs/TopicWhereInput";
import { TopicWhereUniqueInput } from "../inputs/TopicWhereUniqueInput";

@TypeGraphQL.InputType("TopicUpdateOneWithoutUserInterestsNestedInput", {})
export class TopicUpdateOneWithoutUserInterestsNestedInput {
  @TypeGraphQL.Field(_type => TopicCreateWithoutUserInterestsInput, {
    nullable: true
  })
  create?: TopicCreateWithoutUserInterestsInput | undefined;

  @TypeGraphQL.Field(_type => TopicCreateOrConnectWithoutUserInterestsInput, {
    nullable: true
  })
  connectOrCreate?: TopicCreateOrConnectWithoutUserInterestsInput | undefined;

  @TypeGraphQL.Field(_type => TopicUpsertWithoutUserInterestsInput, {
    nullable: true
  })
  upsert?: TopicUpsertWithoutUserInterestsInput | undefined;

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

  @TypeGraphQL.Field(_type => TopicUpdateToOneWithWhereWithoutUserInterestsInput, {
    nullable: true
  })
  update?: TopicUpdateToOneWithWhereWithoutUserInterestsInput | undefined;
}
