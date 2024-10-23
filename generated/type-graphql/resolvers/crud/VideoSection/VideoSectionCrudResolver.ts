import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateVideoSectionArgs } from "./args/AggregateVideoSectionArgs";
import { CreateManyAndReturnVideoSectionArgs } from "./args/CreateManyAndReturnVideoSectionArgs";
import { CreateManyVideoSectionArgs } from "./args/CreateManyVideoSectionArgs";
import { CreateOneVideoSectionArgs } from "./args/CreateOneVideoSectionArgs";
import { DeleteManyVideoSectionArgs } from "./args/DeleteManyVideoSectionArgs";
import { DeleteOneVideoSectionArgs } from "./args/DeleteOneVideoSectionArgs";
import { FindFirstVideoSectionArgs } from "./args/FindFirstVideoSectionArgs";
import { FindFirstVideoSectionOrThrowArgs } from "./args/FindFirstVideoSectionOrThrowArgs";
import { FindManyVideoSectionArgs } from "./args/FindManyVideoSectionArgs";
import { FindUniqueVideoSectionArgs } from "./args/FindUniqueVideoSectionArgs";
import { FindUniqueVideoSectionOrThrowArgs } from "./args/FindUniqueVideoSectionOrThrowArgs";
import { GroupByVideoSectionArgs } from "./args/GroupByVideoSectionArgs";
import { UpdateManyVideoSectionArgs } from "./args/UpdateManyVideoSectionArgs";
import { UpdateOneVideoSectionArgs } from "./args/UpdateOneVideoSectionArgs";
import { UpsertOneVideoSectionArgs } from "./args/UpsertOneVideoSectionArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { VideoSection } from "../../../models/VideoSection";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateVideoSection } from "../../outputs/AggregateVideoSection";
import { CreateManyAndReturnVideoSection } from "../../outputs/CreateManyAndReturnVideoSection";
import { VideoSectionGroupBy } from "../../outputs/VideoSectionGroupBy";

@TypeGraphQL.Resolver(_of => VideoSection)
export class VideoSectionCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateVideoSection, {
    nullable: false
  })
  async aggregateVideoSection(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateVideoSectionArgs): Promise<AggregateVideoSection> {
    return getPrismaFromContext(ctx).videoSection.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyVideoSection(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyVideoSectionArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).videoSection.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnVideoSection], {
    nullable: false
  })
  async createManyAndReturnVideoSection(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnVideoSectionArgs): Promise<CreateManyAndReturnVideoSection[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).videoSection.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => VideoSection, {
    nullable: false
  })
  async createOneVideoSection(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneVideoSectionArgs): Promise<VideoSection> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).videoSection.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyVideoSection(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyVideoSectionArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).videoSection.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => VideoSection, {
    nullable: true
  })
  async deleteOneVideoSection(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneVideoSectionArgs): Promise<VideoSection | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).videoSection.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => VideoSection, {
    nullable: true
  })
  async findFirstVideoSection(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstVideoSectionArgs): Promise<VideoSection | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).videoSection.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => VideoSection, {
    nullable: true
  })
  async findFirstVideoSectionOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstVideoSectionOrThrowArgs): Promise<VideoSection | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).videoSection.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [VideoSection], {
    nullable: false
  })
  async videoSections(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyVideoSectionArgs): Promise<VideoSection[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).videoSection.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => VideoSection, {
    nullable: true
  })
  async videoSection(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueVideoSectionArgs): Promise<VideoSection | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).videoSection.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => VideoSection, {
    nullable: true
  })
  async getVideoSection(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueVideoSectionOrThrowArgs): Promise<VideoSection | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).videoSection.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [VideoSectionGroupBy], {
    nullable: false
  })
  async groupByVideoSection(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByVideoSectionArgs): Promise<VideoSectionGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).videoSection.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyVideoSection(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyVideoSectionArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).videoSection.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => VideoSection, {
    nullable: true
  })
  async updateOneVideoSection(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneVideoSectionArgs): Promise<VideoSection | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).videoSection.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => VideoSection, {
    nullable: false
  })
  async upsertOneVideoSection(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneVideoSectionArgs): Promise<VideoSection> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).videoSection.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
