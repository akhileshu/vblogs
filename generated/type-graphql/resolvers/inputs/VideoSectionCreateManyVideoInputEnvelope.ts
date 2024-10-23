import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VideoSectionCreateManyVideoInput } from "../inputs/VideoSectionCreateManyVideoInput";

@TypeGraphQL.InputType("VideoSectionCreateManyVideoInputEnvelope", {})
export class VideoSectionCreateManyVideoInputEnvelope {
  @TypeGraphQL.Field(_type => [VideoSectionCreateManyVideoInput], {
    nullable: false
  })
  data!: VideoSectionCreateManyVideoInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
