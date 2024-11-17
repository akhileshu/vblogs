import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Blog } from "../models/Blog";
import { Tag } from "../models/Tag";
import { Technology } from "../models/Technology";
import { UserInterest } from "../models/UserInterest";
import { TopicCount } from "../resolvers/outputs/TopicCount";

@TypeGraphQL.ObjectType("Topic", {})
export class Topic {
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

  Technology?: Technology | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  technologyId?: number | null;

  Blogs?: Blog[];

  tags?: Tag[];

  userInterests?: UserInterest[];

  @TypeGraphQL.Field(_type => TopicCount, {
    nullable: true
  })
  _count?: TopicCount | null;
}