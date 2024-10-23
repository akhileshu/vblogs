import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCountBlogsArgs } from "./args/UserCountBlogsArgs";
import { UserCountInterestsArgs } from "./args/UserCountInterestsArgs";

@TypeGraphQL.ObjectType("UserCount", {})
export class UserCount {
  Blogs!: number;
  interests!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "Blogs",
    nullable: false
  })
  getBlogs(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountBlogsArgs): number {
    return root.Blogs;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "interests",
    nullable: false
  })
  getInterests(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountInterestsArgs): number {
    return root.interests;
  }
}
