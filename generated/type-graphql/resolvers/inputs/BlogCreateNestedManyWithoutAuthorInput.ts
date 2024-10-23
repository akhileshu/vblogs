import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogCreateManyAuthorInputEnvelope } from "../inputs/BlogCreateManyAuthorInputEnvelope";
import { BlogCreateOrConnectWithoutAuthorInput } from "../inputs/BlogCreateOrConnectWithoutAuthorInput";
import { BlogCreateWithoutAuthorInput } from "../inputs/BlogCreateWithoutAuthorInput";
import { BlogWhereUniqueInput } from "../inputs/BlogWhereUniqueInput";

@TypeGraphQL.InputType("BlogCreateNestedManyWithoutAuthorInput", {})
export class BlogCreateNestedManyWithoutAuthorInput {
  @TypeGraphQL.Field(_type => [BlogCreateWithoutAuthorInput], {
    nullable: true
  })
  create?: BlogCreateWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlogCreateOrConnectWithoutAuthorInput], {
    nullable: true
  })
  connectOrCreate?: BlogCreateOrConnectWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => BlogCreateManyAuthorInputEnvelope, {
    nullable: true
  })
  createMany?: BlogCreateManyAuthorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BlogWhereUniqueInput], {
    nullable: true
  })
  connect?: BlogWhereUniqueInput[] | undefined;
}
