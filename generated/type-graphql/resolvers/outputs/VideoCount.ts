import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VideoCountSectionsArgs } from "./args/VideoCountSectionsArgs";

@TypeGraphQL.ObjectType("VideoCount", {})
export class VideoCount {
  Sections!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "Sections",
    nullable: false
  })
  getSections(@TypeGraphQL.Root() root: VideoCount, @TypeGraphQL.Args() args: VideoCountSectionsArgs): number {
    return root.Sections;
  }
}
