import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Blog } from "../models/Blog";
import { VideoSection } from "../models/VideoSection";
import { VideoCount } from "../resolvers/outputs/VideoCount";

@TypeGraphQL.ObjectType("Video", {})
export class Video {
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

  blog?: Blog;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  blogId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  videoLink!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  thumbnailLink!: string;

  sections?: VideoSection[];

  @TypeGraphQL.Field(_type => VideoCount, {
    nullable: true
  })
  _count?: VideoCount | null;
}
