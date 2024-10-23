import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CreateManyAndReturnTagTopicArgs } from "./args/CreateManyAndReturnTagTopicArgs";
import { Topic } from "../../models/Topic";

@TypeGraphQL.ObjectType("CreateManyAndReturnTag", {})
export class CreateManyAndReturnTag {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  topicId!: number | null;

  Topic!: Topic | null;

  @TypeGraphQL.Field(_type => Topic, {
    name: "Topic",
    nullable: true
  })
  getTopic(@TypeGraphQL.Root() root: CreateManyAndReturnTag, @TypeGraphQL.Args() args: CreateManyAndReturnTagTopicArgs): Topic | null {
    return root.Topic;
  }
}
