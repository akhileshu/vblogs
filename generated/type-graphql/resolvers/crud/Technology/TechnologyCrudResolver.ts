import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateTechnologyArgs } from "./args/AggregateTechnologyArgs";
import { CreateManyAndReturnTechnologyArgs } from "./args/CreateManyAndReturnTechnologyArgs";
import { CreateManyTechnologyArgs } from "./args/CreateManyTechnologyArgs";
import { CreateOneTechnologyArgs } from "./args/CreateOneTechnologyArgs";
import { DeleteManyTechnologyArgs } from "./args/DeleteManyTechnologyArgs";
import { DeleteOneTechnologyArgs } from "./args/DeleteOneTechnologyArgs";
import { FindFirstTechnologyArgs } from "./args/FindFirstTechnologyArgs";
import { FindFirstTechnologyOrThrowArgs } from "./args/FindFirstTechnologyOrThrowArgs";
import { FindManyTechnologyArgs } from "./args/FindManyTechnologyArgs";
import { FindUniqueTechnologyArgs } from "./args/FindUniqueTechnologyArgs";
import { FindUniqueTechnologyOrThrowArgs } from "./args/FindUniqueTechnologyOrThrowArgs";
import { GroupByTechnologyArgs } from "./args/GroupByTechnologyArgs";
import { UpdateManyTechnologyArgs } from "./args/UpdateManyTechnologyArgs";
import { UpdateOneTechnologyArgs } from "./args/UpdateOneTechnologyArgs";
import { UpsertOneTechnologyArgs } from "./args/UpsertOneTechnologyArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Technology } from "../../../models/Technology";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateTechnology } from "../../outputs/AggregateTechnology";
import { CreateManyAndReturnTechnology } from "../../outputs/CreateManyAndReturnTechnology";
import { TechnologyGroupBy } from "../../outputs/TechnologyGroupBy";

@TypeGraphQL.Resolver(_of => Technology)
export class TechnologyCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateTechnology, {
    nullable: false
  })
  async aggregateTechnology(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTechnologyArgs): Promise<AggregateTechnology> {
    return getPrismaFromContext(ctx).technology.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyTechnology(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyTechnologyArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).technology.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnTechnology], {
    nullable: false
  })
  async createManyAndReturnTechnology(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnTechnologyArgs): Promise<CreateManyAndReturnTechnology[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).technology.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Technology, {
    nullable: false
  })
  async createOneTechnology(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneTechnologyArgs): Promise<Technology> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).technology.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyTechnology(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyTechnologyArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).technology.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Technology, {
    nullable: true
  })
  async deleteOneTechnology(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneTechnologyArgs): Promise<Technology | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).technology.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Technology, {
    nullable: true
  })
  async findFirstTechnology(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTechnologyArgs): Promise<Technology | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).technology.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Technology, {
    nullable: true
  })
  async findFirstTechnologyOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTechnologyOrThrowArgs): Promise<Technology | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).technology.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Technology], {
    nullable: false
  })
  async technologies(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyTechnologyArgs): Promise<Technology[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).technology.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Technology, {
    nullable: true
  })
  async technology(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueTechnologyArgs): Promise<Technology | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).technology.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Technology, {
    nullable: true
  })
  async getTechnology(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueTechnologyOrThrowArgs): Promise<Technology | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).technology.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [TechnologyGroupBy], {
    nullable: false
  })
  async groupByTechnology(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByTechnologyArgs): Promise<TechnologyGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).technology.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyTechnology(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyTechnologyArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).technology.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Technology, {
    nullable: true
  })
  async updateOneTechnology(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneTechnologyArgs): Promise<Technology | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).technology.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Technology, {
    nullable: false
  })
  async upsertOneTechnology(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneTechnologyArgs): Promise<Technology> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).technology.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
