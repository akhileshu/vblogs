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

  Topic?: Topic | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  topicId?: number | null;

  @TypeGraphQL.Field(_type => SkillLevel, {
    nullable: false
  })
  skillLevel!: "BASIC" | "INTERMEDIATE" | "ADVANCED";

  Tags?: TagsOnBlogs[];

  Author?: User | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  authorId?: number | null;

  content?: BlogContent | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  slug!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  views!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  readTimeInMinutes!: number;

  Video?: Video | null;

  @TypeGraphQL.Field(_type => BlogCount, {
    nullable: true
  })
  _count?: BlogCount | null;
}
