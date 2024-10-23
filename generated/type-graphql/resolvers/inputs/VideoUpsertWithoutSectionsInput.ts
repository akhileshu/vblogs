import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VideoCreateWithoutSectionsInput } from "../inputs/VideoCreateWithoutSectionsInput";
import { VideoUpdateWithoutSectionsInput } from "../inputs/VideoUpdateWithoutSectionsInput";
import { VideoWhereInput } from "../inputs/VideoWhereInput";

@TypeGraphQL.InputType("VideoUpsertWithoutSectionsInput", {})
export class VideoUpsertWithoutSectionsInput {
  @TypeGraphQL.Field(_type => VideoUpdateWithoutSectionsInput, {
    nullable: false
  })
  update!: VideoUpdateWithoutSectionsInput;

  @TypeGraphQL.Field(_type => VideoCreateWithoutSectionsInput, {
    nullable: false
  })
  create!: VideoCreateWithoutSectionsInput;

  @TypeGraphQL.Field(_type => VideoWhereInput, {
    nullable: true
  })
  where?: VideoWhereInput | undefined;
}
