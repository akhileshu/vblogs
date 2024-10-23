import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VideoSectionUpdateManyMutationInput } from "../../../inputs/VideoSectionUpdateManyMutationInput";
import { VideoSectionWhereInput } from "../../../inputs/VideoSectionWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyVideoSectionArgs {
  @TypeGraphQL.Field(_type => VideoSectionUpdateManyMutationInput, {
    nullable: false
  })
  data!: VideoSectionUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => VideoSectionWhereInput, {
    nullable: true
  })
  where?: VideoSectionWhereInput | undefined;
}
