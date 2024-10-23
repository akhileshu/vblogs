import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnTopicArgs } from "./args/CreateManyAndReturnTopicArgs";
import { Topic } from "../../../models/Topic";
import { CreateManyAndReturnTopic } from "../../outputs/CreateManyAndReturnTopic";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Topic)
export class CreateManyAndReturnTopicResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnTopic], {
    nullable: false
  })
  async createManyAndReturnTopic(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnTopicArgs): Promise<CreateManyAndReturnTopic[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).topic.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
