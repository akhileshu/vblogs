import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateTagsOnBlogsArgs } from "./args/AggregateTagsOnBlogsArgs";
import { CreateManyAndReturnTagsOnBlogsArgs } from "./args/CreateManyAndReturnTagsOnBlogsArgs";
import { CreateManyTagsOnBlogsArgs } from "./args/CreateManyTagsOnBlogsArgs";
import { CreateOneTagsOnBlogsArgs } from "./args/CreateOneTagsOnBlogsArgs";
import { DeleteManyTagsOnBlogsArgs } from "./args/DeleteManyTagsOnBlogsArgs";
import { DeleteOneTagsOnBlogsArgs } from "./args/DeleteOneTagsOnBlogsArgs";
import { FindFirstTagsOnBlogsArgs } from "./args/FindFirstTagsOnBlogsArgs";
import { FindFirstTagsOnBlogsOrThrowArgs } from "./args/FindFirstTagsOnBlogsOrThrowArgs";
import { FindManyTagsOnBlogsArgs } from "./args/FindManyTagsOnBlogsArgs";
import { FindUniqueTagsOnBlogsArgs } from "./args/FindUniqueTagsOnBlogsArgs";
import { FindUniqueTagsOnBlogsOrThrowArgs } from "./args/FindUniqueTagsOnBlogsOrThrowArgs";
import { GroupByTagsOnBlogsArgs } from "./args/GroupByTagsOnBlogsArgs";
import { UpdateManyTagsOnBlogsArgs } from "./args/UpdateManyTagsOnBlogsArgs";
import { UpdateOneTagsOnBlogsArgs } from "./args/UpdateOneTagsOnBlogsArgs";
import { UpsertOneTagsOnBlogsArgs } from "./args/UpsertOneTagsOnBlogsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { TagsOnBlogs } from "../../../models/TagsOnBlogs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateTagsOnBlogs } from "../../outputs/AggregateTagsOnBlogs";
import { CreateManyAndReturnTagsOnBlogs } from "../../outputs/CreateManyAndReturnTagsOnBlogs";
import { TagsOnBlogsGroupBy } from "../../outputs/TagsOnBlogsGroupBy";

@TypeGraphQL.Resolver(_of => TagsOnBlogs)
export class TagsOnBlogsCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateTagsOnBlogs, {
    nullable: false
  })
  async aggregateTagsOnBlogs(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTagsOnBlogsArgs): Promise<AggregateTagsOnBlogs> {
    return getPrismaFromContext(ctx).tagsOnBlogs.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyTagsOnBlogs(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyTagsOnBlogsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tagsOnBlogs.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnTagsOnBlogs], {
    nullable: false
  })
  async createManyAndReturnTagsOnBlogs(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnTagsOnBlogsArgs): Promise<CreateManyAndReturnTagsOnBlogs[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tagsOnBlogs.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TagsOnBlogs, {
    nullable: false
  })
  async createOneTagsOnBlogs(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneTagsOnBlogsArgs): Promise<TagsOnBlogs> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tagsOnBlogs.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyTagsOnBlogs(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyTagsOnBlogsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tagsOnBlogs.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TagsOnBlogs, {
    nullable: true
  })
  async deleteOneTagsOnBlogs(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneTagsOnBlogsArgs): Promise<TagsOnBlogs | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tagsOnBlogs.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => TagsOnBlogs, {
    nullable: true
  })
  async findFirstTagsOnBlogs(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTagsOnBlogsArgs): Promise<TagsOnBlogs | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tagsOnBlogs.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => TagsOnBlogs, {
    nullable: true
  })
  async findFirstTagsOnBlogsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTagsOnBlogsOrThrowArgs): Promise<TagsOnBlogs | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tagsOnBlogs.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [TagsOnBlogs], {
    nullable: false
  })
  async findManyTagsOnBlogs(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyTagsOnBlogsArgs): Promise<TagsOnBlogs[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tagsOnBlogs.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => TagsOnBlogs, {
    nullable: true
  })
  async findUniqueTagsOnBlogs(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueTagsOnBlogsArgs): Promise<TagsOnBlogs | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tagsOnBlogs.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => TagsOnBlogs, {
    nullable: true
  })
  async findUniqueTagsOnBlogsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueTagsOnBlogsOrThrowArgs): Promise<TagsOnBlogs | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tagsOnBlogs.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [TagsOnBlogsGroupBy], {
    nullable: false
  })
  async groupByTagsOnBlogs(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByTagsOnBlogsArgs): Promise<TagsOnBlogsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tagsOnBlogs.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyTagsOnBlogs(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyTagsOnBlogsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tagsOnBlogs.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TagsOnBlogs, {
    nullable: true
  })
  async updateOneTagsOnBlogs(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneTagsOnBlogsArgs): Promise<TagsOnBlogs | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tagsOnBlogs.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TagsOnBlogs, {
    nullable: false
  })
  async upsertOneTagsOnBlogs(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneTagsOnBlogsArgs): Promise<TagsOnBlogs> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tagsOnBlogs.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
