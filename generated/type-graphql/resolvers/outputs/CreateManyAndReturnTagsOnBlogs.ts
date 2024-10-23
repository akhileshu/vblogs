import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Blog } from "../../models/Blog";
import { Tag } from "../../models/Tag";

@TypeGraphQL.ObjectType("CreateManyAndReturnTagsOnBlogs", {})
export class CreateManyAndReturnTagsOnBlogs {
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
    nullable: false
  })
  tagId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  blogId!: number;

  @TypeGraphQL.Field(_type => Tag, {
    nullable: false
  })
  Tag!: Tag;

  @TypeGraphQL.Field(_type => Blog, {
    nullable: false
  })
  Blog!: Blog;
}
