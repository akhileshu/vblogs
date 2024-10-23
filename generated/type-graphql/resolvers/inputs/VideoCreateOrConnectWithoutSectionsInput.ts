import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VideoCreateWithoutSectionsInput } from "../inputs/VideoCreateWithoutSectionsInput";
import { VideoWhereUniqueInput } from "../inputs/VideoWhereUniqueInput";

@TypeGraphQL.InputType("VideoCreateOrConnectWithoutSectionsInput", {})
export class VideoCreateOrConnectWithoutSectionsInput {
  @TypeGraphQL.Field(_type => VideoWhereUniqueInput, {
    nullable: false
  })
  where!: VideoWhereUniqueInput;

  @TypeGraphQL.Field(_type => VideoCreateWithoutSectionsInput, {
    nullable: false
  })
  create!: VideoCreateWithoutSectionsInput;
}
