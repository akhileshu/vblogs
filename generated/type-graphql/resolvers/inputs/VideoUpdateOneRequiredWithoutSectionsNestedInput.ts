import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VideoCreateOrConnectWithoutSectionsInput } from "../inputs/VideoCreateOrConnectWithoutSectionsInput";
import { VideoCreateWithoutSectionsInput } from "../inputs/VideoCreateWithoutSectionsInput";
import { VideoUpdateToOneWithWhereWithoutSectionsInput } from "../inputs/VideoUpdateToOneWithWhereWithoutSectionsInput";
import { VideoUpsertWithoutSectionsInput } from "../inputs/VideoUpsertWithoutSectionsInput";
import { VideoWhereUniqueInput } from "../inputs/VideoWhereUniqueInput";

@TypeGraphQL.InputType("VideoUpdateOneRequiredWithoutSectionsNestedInput", {})
export class VideoUpdateOneRequiredWithoutSectionsNestedInput {
  @TypeGraphQL.Field(_type => VideoCreateWithoutSectionsInput, {
    nullable: true
  })
  create?: VideoCreateWithoutSectionsInput | undefined;

  @TypeGraphQL.Field(_type => VideoCreateOrConnectWithoutSectionsInput, {
    nullable: true
  })
  connectOrCreate?: VideoCreateOrConnectWithoutSectionsInput | undefined;

  @TypeGraphQL.Field(_type => VideoUpsertWithoutSectionsInput, {
    nullable: true
  })
  upsert?: VideoUpsertWithoutSectionsInput | undefined;

  @TypeGraphQL.Field(_type => VideoWhereUniqueInput, {
    nullable: true
  })
  connect?: VideoWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => VideoUpdateToOneWithWhereWithoutSectionsInput, {
    nullable: true
  })
  update?: VideoUpdateToOneWithWhereWithoutSectionsInput | undefined;
}
