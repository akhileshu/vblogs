import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VideoCreateOrConnectWithoutSectionsInput } from "../inputs/VideoCreateOrConnectWithoutSectionsInput";
import { VideoCreateWithoutSectionsInput } from "../inputs/VideoCreateWithoutSectionsInput";
import { VideoWhereUniqueInput } from "../inputs/VideoWhereUniqueInput";

@TypeGraphQL.InputType("VideoCreateNestedOneWithoutSectionsInput", {})
export class VideoCreateNestedOneWithoutSectionsInput {
  @TypeGraphQL.Field(_type => VideoCreateWithoutSectionsInput, {
    nullable: true
  })
  create?: VideoCreateWithoutSectionsInput | undefined;

  @TypeGraphQL.Field(_type => VideoCreateOrConnectWithoutSectionsInput, {
    nullable: true
  })
  connectOrCreate?: VideoCreateOrConnectWithoutSectionsInput | undefined;

  @TypeGraphQL.Field(_type => VideoWhereUniqueInput, {
    nullable: true
  })
  connect?: VideoWhereUniqueInput | undefined;
}
