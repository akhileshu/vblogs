import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VideoCreateNestedOneWithoutSectionsInput } from "../inputs/VideoCreateNestedOneWithoutSectionsInput";
import { BlogPart } from "../../enums/BlogPart";

@TypeGraphQL.InputType("VideoSectionCreateInput", {})
export class VideoSectionCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  blogSectionTitle!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  timestampInSeconds!: number;

  @TypeGraphQL.Field(_type => BlogPart, {
    nullable: false
  })
  blogPart!: "INTRO" | "IMPLEMENTATION" | "ADVANCED";

  @TypeGraphQL.Field(_type => VideoCreateNestedOneWithoutSectionsInput, {
    nullable: false
  })
  Video!: VideoCreateNestedOneWithoutSectionsInput;
}
