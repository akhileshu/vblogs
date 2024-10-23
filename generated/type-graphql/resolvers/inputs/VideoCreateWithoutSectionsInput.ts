import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogCreateNestedOneWithoutVideoInput } from "../inputs/BlogCreateNestedOneWithoutVideoInput";

@TypeGraphQL.InputType("VideoCreateWithoutSectionsInput", {})
export class VideoCreateWithoutSectionsInput {
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
  videoLink!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  thumbnailLink!: string;

  @TypeGraphQL.Field(_type => BlogCreateNestedOneWithoutVideoInput, {
    nullable: false
  })
  Blog!: BlogCreateNestedOneWithoutVideoInput;
}
