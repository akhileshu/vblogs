import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CreateManyAndReturnTopicTechnologyArgs } from "./args/CreateManyAndReturnTopicTechnologyArgs";
import { Technology } from "../../models/Technology";

@TypeGraphQL.ObjectType("CreateManyAndReturnTopic", {})
export class CreateManyAndReturnTopic {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

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

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  technologyId!: string | null;

  Technology!: Technology | null;

  @TypeGraphQL.Field(_type => Technology, {
    name: "Technology",
    nullable: true
  })
  getTechnology(@TypeGraphQL.Root() root: CreateManyAndReturnTopic, @TypeGraphQL.Args() args: CreateManyAndReturnTopicTechnologyArgs): Technology | null {
    return root.Technology;
  }
}
