import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VideoUpdateManyMutationInput } from "../../../inputs/VideoUpdateManyMutationInput";
import { VideoWhereInput } from "../../../inputs/VideoWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyVideoArgs {
  @TypeGraphQL.Field(_type => VideoUpdateManyMutationInput, {
    nullable: false
  })
  data!: VideoUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => VideoWhereInput, {
    nullable: true
  })
  where?: VideoWhereInput | undefined;
}
