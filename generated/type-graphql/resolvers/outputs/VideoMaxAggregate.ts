import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("VideoMaxAggregate", {})
export class VideoMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  blogId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  videoLink!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  thumbnailLink!: string | null;
}
