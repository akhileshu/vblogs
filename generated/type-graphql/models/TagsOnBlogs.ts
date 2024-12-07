import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Blog } from "../models/Blog";
import { Tag } from "../models/Tag";

@TypeGraphQL.ObjectType("TagsOnBlogs", {})
export class TagsOnBlogs {
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

  tag?: Tag;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  tagId!: string;

  blog?: Blog;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  blogId!: string;
}
