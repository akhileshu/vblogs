import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { BlogContent } from "../models/BlogContent";
import { TagsOnBlogs } from "../models/TagsOnBlogs";
import { Topic } from "../models/Topic";
import { User } from "../models/User";
import { Video } from "../models/Video";
import { SkillLevel } from "../enums/SkillLevel";
import { BlogCount } from "../resolvers/outputs/BlogCount";

@TypeGraphQL.ObjectType("Blog", {})
export class Blog {
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

  topic?: Topic | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  topicId?: string | null;

  tags?: TagsOnBlogs[];

  author?: User | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  authorId?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => SkillLevel, {
    nullable: false
  })
  skillLevel!: "BASIC" | "INTERMEDIATE" | "ADVANCED";

  content?: BlogContent | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  slug?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  views!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  readTimeInMinutes?: number | null;

  Video?: Video | null;

  @TypeGraphQL.Field(_type => BlogCount, {
    nullable: true
  })
  _count?: BlogCount | null;
}
