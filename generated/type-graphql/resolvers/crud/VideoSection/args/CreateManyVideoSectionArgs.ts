import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VideoSectionCreateManyInput } from "../../../inputs/VideoSectionCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyVideoSectionArgs {
  @TypeGraphQL.Field(_type => [VideoSectionCreateManyInput], {
    nullable: false
  })
  data!: VideoSectionCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
