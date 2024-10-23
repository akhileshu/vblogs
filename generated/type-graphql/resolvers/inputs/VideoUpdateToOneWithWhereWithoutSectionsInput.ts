import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VideoUpdateWithoutSectionsInput } from "../inputs/VideoUpdateWithoutSectionsInput";
import { VideoWhereInput } from "../inputs/VideoWhereInput";

@TypeGraphQL.InputType("VideoUpdateToOneWithWhereWithoutSectionsInput", {})
export class VideoUpdateToOneWithWhereWithoutSectionsInput {
  @TypeGraphQL.Field(_type => VideoWhereInput, {
    nullable: true
  })
  where?: VideoWhereInput | undefined;

  @TypeGraphQL.Field(_type => VideoUpdateWithoutSectionsInput, {
    nullable: false
  })
  data!: VideoUpdateWithoutSectionsInput;
}
