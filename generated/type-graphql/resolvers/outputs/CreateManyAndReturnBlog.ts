import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CreateManyAndReturnBlogAuthorArgs } from "./args/CreateManyAndReturnBlogAuthorArgs";
import { CreateManyAndReturnBlogTopicArgs } from "./args/CreateManyAndReturnBlogTopicArgs";
import { Topic } from "../../models/Topic";
import { User } from "../../models/User";
import { SkillLevel } from "../../enums/SkillLevel";

@TypeGraphQL.ObjectType("CreateManyAndReturnBlog", {})
export class CreateManyAndReturnBlog {
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

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  topicId!: number | null;

  @TypeGraphQL.Field(_type => SkillLevel, {
    nullable: false
  })
  skillLevel!: "BASIC" | "INTERMEDIATE" | "ADVANCED";

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  authorId!: number | null;

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

  Topic!: Topic | null;
  Author!: User | null;

  @TypeGraphQL.Field(_type => Topic, {
    name: "Topic",
    nullable: true
  })
  getTopic(@TypeGraphQL.Root() root: CreateManyAndReturnBlog, @TypeGraphQL.Args() args: CreateManyAndReturnBlogTopicArgs): Topic | null {
    return root.Topic;
  }

  @TypeGraphQL.Field(_type => User, {
    name: "Author",
    nullable: true
  })
  getAuthor(@TypeGraphQL.Root() root: CreateManyAndReturnBlog, @TypeGraphQL.Args() args: CreateManyAndReturnBlogAuthorArgs): User | null {
    return root.Author;
  }
}
