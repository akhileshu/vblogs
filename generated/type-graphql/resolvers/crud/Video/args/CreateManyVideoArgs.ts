import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VideoCreateManyInput } from "../../../inputs/VideoCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyVideoArgs {
  @TypeGraphQL.Field(_type => [VideoCreateManyInput], {
    nullable: false
  })
  data!: VideoCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
