import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

export type MethodDecoratorOverrideFn = (decorators: MethodDecorator[]) => MethodDecorator[];

const crudResolversMap = {
  Goal: crudResolvers.GoalCrudResolver,
  Technology: crudResolvers.TechnologyCrudResolver,
  Topic: crudResolvers.TopicCrudResolver,
  Tag: crudResolvers.TagCrudResolver,
  User: crudResolvers.UserCrudResolver,
  UserInterest: crudResolvers.UserInterestCrudResolver,
  Blog: crudResolvers.BlogCrudResolver,
  Video: crudResolvers.VideoCrudResolver,
  VideoSection: crudResolvers.VideoSectionCrudResolver,
  BlogContent: crudResolvers.BlogContentCrudResolver,
  TagsOnBlogs: crudResolvers.TagsOnBlogsCrudResolver
};
const actionResolversMap = {
  Goal: {
    aggregateGoal: actionResolvers.AggregateGoalResolver,
    createManyGoal: actionResolvers.CreateManyGoalResolver,
    createManyAndReturnGoal: actionResolvers.CreateManyAndReturnGoalResolver,
    createOneGoal: actionResolvers.CreateOneGoalResolver,
    deleteManyGoal: actionResolvers.DeleteManyGoalResolver,
    deleteOneGoal: actionResolvers.DeleteOneGoalResolver,
    findFirstGoal: actionResolvers.FindFirstGoalResolver,
    findFirstGoalOrThrow: actionResolvers.FindFirstGoalOrThrowResolver,
    goals: actionResolvers.FindManyGoalResolver,
    goal: actionResolvers.FindUniqueGoalResolver,
    getGoal: actionResolvers.FindUniqueGoalOrThrowResolver,
    groupByGoal: actionResolvers.GroupByGoalResolver,
    updateManyGoal: actionResolvers.UpdateManyGoalResolver,
    updateOneGoal: actionResolvers.UpdateOneGoalResolver,
    upsertOneGoal: actionResolvers.UpsertOneGoalResolver
  },
  Technology: {
    aggregateTechnology: actionResolvers.AggregateTechnologyResolver,
    createManyTechnology: actionResolvers.CreateManyTechnologyResolver,
    createManyAndReturnTechnology: actionResolvers.CreateManyAndReturnTechnologyResolver,
    createOneTechnology: actionResolvers.CreateOneTechnologyResolver,
    deleteManyTechnology: actionResolvers.DeleteManyTechnologyResolver,
    deleteOneTechnology: actionResolvers.DeleteOneTechnologyResolver,
    findFirstTechnology: actionResolvers.FindFirstTechnologyResolver,
    findFirstTechnologyOrThrow: actionResolvers.FindFirstTechnologyOrThrowResolver,
    technologies: actionResolvers.FindManyTechnologyResolver,
    technology: actionResolvers.FindUniqueTechnologyResolver,
    getTechnology: actionResolvers.FindUniqueTechnologyOrThrowResolver,
    groupByTechnology: actionResolvers.GroupByTechnologyResolver,
    updateManyTechnology: actionResolvers.UpdateManyTechnologyResolver,
    updateOneTechnology: actionResolvers.UpdateOneTechnologyResolver,
    upsertOneTechnology: actionResolvers.UpsertOneTechnologyResolver
  },
  Topic: {
    aggregateTopic: actionResolvers.AggregateTopicResolver,
    createManyTopic: actionResolvers.CreateManyTopicResolver,
    createManyAndReturnTopic: actionResolvers.CreateManyAndReturnTopicResolver,
    createOneTopic: actionResolvers.CreateOneTopicResolver,
    deleteManyTopic: actionResolvers.DeleteManyTopicResolver,
    deleteOneTopic: actionResolvers.DeleteOneTopicResolver,
    findFirstTopic: actionResolvers.FindFirstTopicResolver,
    findFirstTopicOrThrow: actionResolvers.FindFirstTopicOrThrowResolver,
    topics: actionResolvers.FindManyTopicResolver,
    topic: actionResolvers.FindUniqueTopicResolver,
    getTopic: actionResolvers.FindUniqueTopicOrThrowResolver,
    groupByTopic: actionResolvers.GroupByTopicResolver,
    updateManyTopic: actionResolvers.UpdateManyTopicResolver,
    updateOneTopic: actionResolvers.UpdateOneTopicResolver,
    upsertOneTopic: actionResolvers.UpsertOneTopicResolver
  },
  Tag: {
    aggregateTag: actionResolvers.AggregateTagResolver,
    createManyTag: actionResolvers.CreateManyTagResolver,
    createManyAndReturnTag: actionResolvers.CreateManyAndReturnTagResolver,
    createOneTag: actionResolvers.CreateOneTagResolver,
    deleteManyTag: actionResolvers.DeleteManyTagResolver,
    deleteOneTag: actionResolvers.DeleteOneTagResolver,
    findFirstTag: actionResolvers.FindFirstTagResolver,
    findFirstTagOrThrow: actionResolvers.FindFirstTagOrThrowResolver,
    tags: actionResolvers.FindManyTagResolver,
    tag: actionResolvers.FindUniqueTagResolver,
    getTag: actionResolvers.FindUniqueTagOrThrowResolver,
    groupByTag: actionResolvers.GroupByTagResolver,
    updateManyTag: actionResolvers.UpdateManyTagResolver,
    updateOneTag: actionResolvers.UpdateOneTagResolver,
    upsertOneTag: actionResolvers.UpsertOneTagResolver
  },
  User: {
    aggregateUser: actionResolvers.AggregateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    createManyAndReturnUser: actionResolvers.CreateManyAndReturnUserResolver,
    createOneUser: actionResolvers.CreateOneUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    deleteOneUser: actionResolvers.DeleteOneUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    findFirstUserOrThrow: actionResolvers.FindFirstUserOrThrowResolver,
    users: actionResolvers.FindManyUserResolver,
    user: actionResolvers.FindUniqueUserResolver,
    getUser: actionResolvers.FindUniqueUserOrThrowResolver,
    groupByUser: actionResolvers.GroupByUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    updateOneUser: actionResolvers.UpdateOneUserResolver,
    upsertOneUser: actionResolvers.UpsertOneUserResolver
  },
  UserInterest: {
    aggregateUserInterest: actionResolvers.AggregateUserInterestResolver,
    createManyUserInterest: actionResolvers.CreateManyUserInterestResolver,
    createManyAndReturnUserInterest: actionResolvers.CreateManyAndReturnUserInterestResolver,
    createOneUserInterest: actionResolvers.CreateOneUserInterestResolver,
    deleteManyUserInterest: actionResolvers.DeleteManyUserInterestResolver,
    deleteOneUserInterest: actionResolvers.DeleteOneUserInterestResolver,
    findFirstUserInterest: actionResolvers.FindFirstUserInterestResolver,
    findFirstUserInterestOrThrow: actionResolvers.FindFirstUserInterestOrThrowResolver,
    userInterests: actionResolvers.FindManyUserInterestResolver,
    userInterest: actionResolvers.FindUniqueUserInterestResolver,
    getUserInterest: actionResolvers.FindUniqueUserInterestOrThrowResolver,
    groupByUserInterest: actionResolvers.GroupByUserInterestResolver,
    updateManyUserInterest: actionResolvers.UpdateManyUserInterestResolver,
    updateOneUserInterest: actionResolvers.UpdateOneUserInterestResolver,
    upsertOneUserInterest: actionResolvers.UpsertOneUserInterestResolver
  },
  Blog: {
    aggregateBlog: actionResolvers.AggregateBlogResolver,
    createManyBlog: actionResolvers.CreateManyBlogResolver,
    createManyAndReturnBlog: actionResolvers.CreateManyAndReturnBlogResolver,
    createOneBlog: actionResolvers.CreateOneBlogResolver,
    deleteManyBlog: actionResolvers.DeleteManyBlogResolver,
    deleteOneBlog: actionResolvers.DeleteOneBlogResolver,
    findFirstBlog: actionResolvers.FindFirstBlogResolver,
    findFirstBlogOrThrow: actionResolvers.FindFirstBlogOrThrowResolver,
    blogs: actionResolvers.FindManyBlogResolver,
    blog: actionResolvers.FindUniqueBlogResolver,
    getBlog: actionResolvers.FindUniqueBlogOrThrowResolver,
    groupByBlog: actionResolvers.GroupByBlogResolver,
    updateManyBlog: actionResolvers.UpdateManyBlogResolver,
    updateOneBlog: actionResolvers.UpdateOneBlogResolver,
    upsertOneBlog: actionResolvers.UpsertOneBlogResolver
  },
  Video: {
    aggregateVideo: actionResolvers.AggregateVideoResolver,
    createManyVideo: actionResolvers.CreateManyVideoResolver,
    createManyAndReturnVideo: actionResolvers.CreateManyAndReturnVideoResolver,
    createOneVideo: actionResolvers.CreateOneVideoResolver,
    deleteManyVideo: actionResolvers.DeleteManyVideoResolver,
    deleteOneVideo: actionResolvers.DeleteOneVideoResolver,
    findFirstVideo: actionResolvers.FindFirstVideoResolver,
    findFirstVideoOrThrow: actionResolvers.FindFirstVideoOrThrowResolver,
    videos: actionResolvers.FindManyVideoResolver,
    video: actionResolvers.FindUniqueVideoResolver,
    getVideo: actionResolvers.FindUniqueVideoOrThrowResolver,
    groupByVideo: actionResolvers.GroupByVideoResolver,
    updateManyVideo: actionResolvers.UpdateManyVideoResolver,
    updateOneVideo: actionResolvers.UpdateOneVideoResolver,
    upsertOneVideo: actionResolvers.UpsertOneVideoResolver
  },
  VideoSection: {
    aggregateVideoSection: actionResolvers.AggregateVideoSectionResolver,
    createManyVideoSection: actionResolvers.CreateManyVideoSectionResolver,
    createManyAndReturnVideoSection: actionResolvers.CreateManyAndReturnVideoSectionResolver,
    createOneVideoSection: actionResolvers.CreateOneVideoSectionResolver,
    deleteManyVideoSection: actionResolvers.DeleteManyVideoSectionResolver,
    deleteOneVideoSection: actionResolvers.DeleteOneVideoSectionResolver,
    findFirstVideoSection: actionResolvers.FindFirstVideoSectionResolver,
    findFirstVideoSectionOrThrow: actionResolvers.FindFirstVideoSectionOrThrowResolver,
    videoSections: actionResolvers.FindManyVideoSectionResolver,
    videoSection: actionResolvers.FindUniqueVideoSectionResolver,
    getVideoSection: actionResolvers.FindUniqueVideoSectionOrThrowResolver,
    groupByVideoSection: actionResolvers.GroupByVideoSectionResolver,
    updateManyVideoSection: actionResolvers.UpdateManyVideoSectionResolver,
    updateOneVideoSection: actionResolvers.UpdateOneVideoSectionResolver,
    upsertOneVideoSection: actionResolvers.UpsertOneVideoSectionResolver
  },
  BlogContent: {
    aggregateBlogContent: actionResolvers.AggregateBlogContentResolver,
    createManyBlogContent: actionResolvers.CreateManyBlogContentResolver,
    createManyAndReturnBlogContent: actionResolvers.CreateManyAndReturnBlogContentResolver,
    createOneBlogContent: actionResolvers.CreateOneBlogContentResolver,
    deleteManyBlogContent: actionResolvers.DeleteManyBlogContentResolver,
    deleteOneBlogContent: actionResolvers.DeleteOneBlogContentResolver,
    findFirstBlogContent: actionResolvers.FindFirstBlogContentResolver,
    findFirstBlogContentOrThrow: actionResolvers.FindFirstBlogContentOrThrowResolver,
    blogContents: actionResolvers.FindManyBlogContentResolver,
    blogContent: actionResolvers.FindUniqueBlogContentResolver,
    getBlogContent: actionResolvers.FindUniqueBlogContentOrThrowResolver,
    groupByBlogContent: actionResolvers.GroupByBlogContentResolver,
    updateManyBlogContent: actionResolvers.UpdateManyBlogContentResolver,
    updateOneBlogContent: actionResolvers.UpdateOneBlogContentResolver,
    upsertOneBlogContent: actionResolvers.UpsertOneBlogContentResolver
  },
  TagsOnBlogs: {
    aggregateTagsOnBlogs: actionResolvers.AggregateTagsOnBlogsResolver,
    createManyTagsOnBlogs: actionResolvers.CreateManyTagsOnBlogsResolver,
    createManyAndReturnTagsOnBlogs: actionResolvers.CreateManyAndReturnTagsOnBlogsResolver,
    createOneTagsOnBlogs: actionResolvers.CreateOneTagsOnBlogsResolver,
    deleteManyTagsOnBlogs: actionResolvers.DeleteManyTagsOnBlogsResolver,
    deleteOneTagsOnBlogs: actionResolvers.DeleteOneTagsOnBlogsResolver,
    findFirstTagsOnBlogs: actionResolvers.FindFirstTagsOnBlogsResolver,
    findFirstTagsOnBlogsOrThrow: actionResolvers.FindFirstTagsOnBlogsOrThrowResolver,
    findManyTagsOnBlogs: actionResolvers.FindManyTagsOnBlogsResolver,
    findUniqueTagsOnBlogs: actionResolvers.FindUniqueTagsOnBlogsResolver,
    findUniqueTagsOnBlogsOrThrow: actionResolvers.FindUniqueTagsOnBlogsOrThrowResolver,
    groupByTagsOnBlogs: actionResolvers.GroupByTagsOnBlogsResolver,
    updateManyTagsOnBlogs: actionResolvers.UpdateManyTagsOnBlogsResolver,
    updateOneTagsOnBlogs: actionResolvers.UpdateOneTagsOnBlogsResolver,
    upsertOneTagsOnBlogs: actionResolvers.UpsertOneTagsOnBlogsResolver
  }
};
const crudResolversInfo = {
  Goal: ["aggregateGoal", "createManyGoal", "createManyAndReturnGoal", "createOneGoal", "deleteManyGoal", "deleteOneGoal", "findFirstGoal", "findFirstGoalOrThrow", "goals", "goal", "getGoal", "groupByGoal", "updateManyGoal", "updateOneGoal", "upsertOneGoal"],
  Technology: ["aggregateTechnology", "createManyTechnology", "createManyAndReturnTechnology", "createOneTechnology", "deleteManyTechnology", "deleteOneTechnology", "findFirstTechnology", "findFirstTechnologyOrThrow", "technologies", "technology", "getTechnology", "groupByTechnology", "updateManyTechnology", "updateOneTechnology", "upsertOneTechnology"],
  Topic: ["aggregateTopic", "createManyTopic", "createManyAndReturnTopic", "createOneTopic", "deleteManyTopic", "deleteOneTopic", "findFirstTopic", "findFirstTopicOrThrow", "topics", "topic", "getTopic", "groupByTopic", "updateManyTopic", "updateOneTopic", "upsertOneTopic"],
  Tag: ["aggregateTag", "createManyTag", "createManyAndReturnTag", "createOneTag", "deleteManyTag", "deleteOneTag", "findFirstTag", "findFirstTagOrThrow", "tags", "tag", "getTag", "groupByTag", "updateManyTag", "updateOneTag", "upsertOneTag"],
  User: ["aggregateUser", "createManyUser", "createManyAndReturnUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "user", "getUser", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
  UserInterest: ["aggregateUserInterest", "createManyUserInterest", "createManyAndReturnUserInterest", "createOneUserInterest", "deleteManyUserInterest", "deleteOneUserInterest", "findFirstUserInterest", "findFirstUserInterestOrThrow", "userInterests", "userInterest", "getUserInterest", "groupByUserInterest", "updateManyUserInterest", "updateOneUserInterest", "upsertOneUserInterest"],
  Blog: ["aggregateBlog", "createManyBlog", "createManyAndReturnBlog", "createOneBlog", "deleteManyBlog", "deleteOneBlog", "findFirstBlog", "findFirstBlogOrThrow", "blogs", "blog", "getBlog", "groupByBlog", "updateManyBlog", "updateOneBlog", "upsertOneBlog"],
  Video: ["aggregateVideo", "createManyVideo", "createManyAndReturnVideo", "createOneVideo", "deleteManyVideo", "deleteOneVideo", "findFirstVideo", "findFirstVideoOrThrow", "videos", "video", "getVideo", "groupByVideo", "updateManyVideo", "updateOneVideo", "upsertOneVideo"],
  VideoSection: ["aggregateVideoSection", "createManyVideoSection", "createManyAndReturnVideoSection", "createOneVideoSection", "deleteManyVideoSection", "deleteOneVideoSection", "findFirstVideoSection", "findFirstVideoSectionOrThrow", "videoSections", "videoSection", "getVideoSection", "groupByVideoSection", "updateManyVideoSection", "updateOneVideoSection", "upsertOneVideoSection"],
  BlogContent: ["aggregateBlogContent", "createManyBlogContent", "createManyAndReturnBlogContent", "createOneBlogContent", "deleteManyBlogContent", "deleteOneBlogContent", "findFirstBlogContent", "findFirstBlogContentOrThrow", "blogContents", "blogContent", "getBlogContent", "groupByBlogContent", "updateManyBlogContent", "updateOneBlogContent", "upsertOneBlogContent"],
  TagsOnBlogs: ["aggregateTagsOnBlogs", "createManyTagsOnBlogs", "createManyAndReturnTagsOnBlogs", "createOneTagsOnBlogs", "deleteManyTagsOnBlogs", "deleteOneTagsOnBlogs", "findFirstTagsOnBlogs", "findFirstTagsOnBlogsOrThrow", "findManyTagsOnBlogs", "findUniqueTagsOnBlogs", "findUniqueTagsOnBlogsOrThrow", "groupByTagsOnBlogs", "updateManyTagsOnBlogs", "updateOneTagsOnBlogs", "upsertOneTagsOnBlogs"]
};
const argsInfo = {
  AggregateGoalArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyGoalArgs: ["data", "skipDuplicates"],
  CreateManyAndReturnGoalArgs: ["data", "skipDuplicates"],
  CreateOneGoalArgs: ["data"],
  DeleteManyGoalArgs: ["where"],
  DeleteOneGoalArgs: ["where"],
  FindFirstGoalArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstGoalOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyGoalArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueGoalArgs: ["where"],
  FindUniqueGoalOrThrowArgs: ["where"],
  GroupByGoalArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyGoalArgs: ["data", "where"],
  UpdateOneGoalArgs: ["data", "where"],
  UpsertOneGoalArgs: ["where", "create", "update"],
  AggregateTechnologyArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyTechnologyArgs: ["data", "skipDuplicates"],
  CreateManyAndReturnTechnologyArgs: ["data", "skipDuplicates"],
  CreateOneTechnologyArgs: ["data"],
  DeleteManyTechnologyArgs: ["where"],
  DeleteOneTechnologyArgs: ["where"],
  FindFirstTechnologyArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstTechnologyOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyTechnologyArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueTechnologyArgs: ["where"],
  FindUniqueTechnologyOrThrowArgs: ["where"],
  GroupByTechnologyArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyTechnologyArgs: ["data", "where"],
  UpdateOneTechnologyArgs: ["data", "where"],
  UpsertOneTechnologyArgs: ["where", "create", "update"],
  AggregateTopicArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyTopicArgs: ["data", "skipDuplicates"],
  CreateManyAndReturnTopicArgs: ["data", "skipDuplicates"],
  CreateOneTopicArgs: ["data"],
  DeleteManyTopicArgs: ["where"],
  DeleteOneTopicArgs: ["where"],
  FindFirstTopicArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstTopicOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyTopicArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueTopicArgs: ["where"],
  FindUniqueTopicOrThrowArgs: ["where"],
  GroupByTopicArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyTopicArgs: ["data", "where"],
  UpdateOneTopicArgs: ["data", "where"],
  UpsertOneTopicArgs: ["where", "create", "update"],
  AggregateTagArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyTagArgs: ["data", "skipDuplicates"],
  CreateManyAndReturnTagArgs: ["data", "skipDuplicates"],
  CreateOneTagArgs: ["data"],
  DeleteManyTagArgs: ["where"],
  DeleteOneTagArgs: ["where"],
  FindFirstTagArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstTagOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyTagArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueTagArgs: ["where"],
  FindUniqueTagOrThrowArgs: ["where"],
  GroupByTagArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyTagArgs: ["data", "where"],
  UpdateOneTagArgs: ["data", "where"],
  UpsertOneTagArgs: ["where", "create", "update"],
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  CreateManyAndReturnUserArgs: ["data", "skipDuplicates"],
  CreateOneUserArgs: ["data"],
  DeleteManyUserArgs: ["where"],
  DeleteOneUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstUserOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUserArgs: ["where"],
  FindUniqueUserOrThrowArgs: ["where"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyUserArgs: ["data", "where"],
  UpdateOneUserArgs: ["data", "where"],
  UpsertOneUserArgs: ["where", "create", "update"],
  AggregateUserInterestArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyUserInterestArgs: ["data", "skipDuplicates"],
  CreateManyAndReturnUserInterestArgs: ["data", "skipDuplicates"],
  CreateOneUserInterestArgs: ["data"],
  DeleteManyUserInterestArgs: ["where"],
  DeleteOneUserInterestArgs: ["where"],
  FindFirstUserInterestArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstUserInterestOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserInterestArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUserInterestArgs: ["where"],
  FindUniqueUserInterestOrThrowArgs: ["where"],
  GroupByUserInterestArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyUserInterestArgs: ["data", "where"],
  UpdateOneUserInterestArgs: ["data", "where"],
  UpsertOneUserInterestArgs: ["where", "create", "update"],
  AggregateBlogArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyBlogArgs: ["data", "skipDuplicates"],
  CreateManyAndReturnBlogArgs: ["data", "skipDuplicates"],
  CreateOneBlogArgs: ["data"],
  DeleteManyBlogArgs: ["where"],
  DeleteOneBlogArgs: ["where"],
  FindFirstBlogArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstBlogOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyBlogArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueBlogArgs: ["where"],
  FindUniqueBlogOrThrowArgs: ["where"],
  GroupByBlogArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyBlogArgs: ["data", "where"],
  UpdateOneBlogArgs: ["data", "where"],
  UpsertOneBlogArgs: ["where", "create", "update"],
  AggregateVideoArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyVideoArgs: ["data", "skipDuplicates"],
  CreateManyAndReturnVideoArgs: ["data", "skipDuplicates"],
  CreateOneVideoArgs: ["data"],
  DeleteManyVideoArgs: ["where"],
  DeleteOneVideoArgs: ["where"],
  FindFirstVideoArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstVideoOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyVideoArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueVideoArgs: ["where"],
  FindUniqueVideoOrThrowArgs: ["where"],
  GroupByVideoArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyVideoArgs: ["data", "where"],
  UpdateOneVideoArgs: ["data", "where"],
  UpsertOneVideoArgs: ["where", "create", "update"],
  AggregateVideoSectionArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyVideoSectionArgs: ["data", "skipDuplicates"],
  CreateManyAndReturnVideoSectionArgs: ["data", "skipDuplicates"],
  CreateOneVideoSectionArgs: ["data"],
  DeleteManyVideoSectionArgs: ["where"],
  DeleteOneVideoSectionArgs: ["where"],
  FindFirstVideoSectionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstVideoSectionOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyVideoSectionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueVideoSectionArgs: ["where"],
  FindUniqueVideoSectionOrThrowArgs: ["where"],
  GroupByVideoSectionArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyVideoSectionArgs: ["data", "where"],
  UpdateOneVideoSectionArgs: ["data", "where"],
  UpsertOneVideoSectionArgs: ["where", "create", "update"],
  AggregateBlogContentArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyBlogContentArgs: ["data", "skipDuplicates"],
  CreateManyAndReturnBlogContentArgs: ["data", "skipDuplicates"],
  CreateOneBlogContentArgs: ["data"],
  DeleteManyBlogContentArgs: ["where"],
  DeleteOneBlogContentArgs: ["where"],
  FindFirstBlogContentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstBlogContentOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyBlogContentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueBlogContentArgs: ["where"],
  FindUniqueBlogContentOrThrowArgs: ["where"],
  GroupByBlogContentArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyBlogContentArgs: ["data", "where"],
  UpdateOneBlogContentArgs: ["data", "where"],
  UpsertOneBlogContentArgs: ["where", "create", "update"],
  AggregateTagsOnBlogsArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyTagsOnBlogsArgs: ["data", "skipDuplicates"],
  CreateManyAndReturnTagsOnBlogsArgs: ["data", "skipDuplicates"],
  CreateOneTagsOnBlogsArgs: ["data"],
  DeleteManyTagsOnBlogsArgs: ["where"],
  DeleteOneTagsOnBlogsArgs: ["where"],
  FindFirstTagsOnBlogsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstTagsOnBlogsOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyTagsOnBlogsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueTagsOnBlogsArgs: ["where"],
  FindUniqueTagsOnBlogsOrThrowArgs: ["where"],
  GroupByTagsOnBlogsArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyTagsOnBlogsArgs: ["data", "where"],
  UpdateOneTagsOnBlogsArgs: ["data", "where"],
  UpsertOneTagsOnBlogsArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
> = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
> = Partial<Record<ModelResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & {
    _all?: MethodDecorator[];
    _query?: MethodDecorator[];
    _mutation?: MethodDecorator[];
  };

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  const mutationOperationPrefixes = [
    "createOne", "createMany", "createManyAndReturn", "deleteOne", "updateOne", "deleteMany", "updateMany", "upsertOne"
  ];
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    const allActionsDecorators = resolverActionsConfig._all;
    const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
    for (const resolverActionName of resolverActionNames) {
      const maybeDecoratorsOrFn = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      const isWriteOperation = mutationOperationPrefixes.some(prefix => resolverActionName.startsWith(prefix));
      const operationKindDecorators = isWriteOperation ? resolverActionsConfig._mutation : resolverActionsConfig._query;
      const mainDecorators = [
        ...allActionsDecorators ?? [],
        ...operationKindDecorators ?? [],
      ]
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(mainDecorators);
      } else {
        decorators = [...mainDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
> = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  Goal: relationResolvers.GoalRelationsResolver,
  Technology: relationResolvers.TechnologyRelationsResolver,
  Topic: relationResolvers.TopicRelationsResolver,
  Tag: relationResolvers.TagRelationsResolver,
  User: relationResolvers.UserRelationsResolver,
  UserInterest: relationResolvers.UserInterestRelationsResolver,
  Blog: relationResolvers.BlogRelationsResolver,
  Video: relationResolvers.VideoRelationsResolver,
  VideoSection: relationResolvers.VideoSectionRelationsResolver,
  BlogContent: relationResolvers.BlogContentRelationsResolver,
  TagsOnBlogs: relationResolvers.TagsOnBlogsRelationsResolver
};
const relationResolversInfo = {
  Goal: ["Technologies"],
  Technology: ["Topics", "Goal", "userInterests"],
  Topic: ["Technology", "Blogs", "tags", "userInterests"],
  Tag: ["Topic", "Blogs"],
  User: ["Blogs", "interests"],
  UserInterest: ["user", "Technology", "Topic"],
  Blog: ["Topic", "Tags", "Author", "content", "Video"],
  Video: ["Blog", "Sections"],
  VideoSection: ["Video"],
  BlogContent: ["Blog"],
  TagsOnBlogs: ["Tag", "Blog"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
> = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & { _all?: MethodDecorator[] };

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    const allActionsDecorators = relationResolverActionsConfig._all ?? [];
    const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
    for (const relationResolverActionName of relationResolverActionNames) {
      const maybeDecoratorsOrFn = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allActionsDecorators);
      } else {
        decorators = [...allActionsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

export type PropertyDecoratorOverrideFn = (decorators: PropertyDecorator[]) => PropertyDecorator[];

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys, PropertyDecorator[] | PropertyDecoratorOverrideFn>
> & { _all?: PropertyDecorator[] };

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    const allFieldsDecorators = enhanceConfig.fields._all ?? [];
    for (const typeFieldName of typeFieldNames) {
      const maybeDecoratorsOrFn = enhanceConfig.fields[
        typeFieldName
      ] as PropertyDecorator[] | PropertyDecoratorOverrideFn | undefined;
      let decorators: PropertyDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allFieldsDecorators);
      } else {
        decorators = [...allFieldsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  Goal: ["id", "createdAt", "updatedAt", "title"],
  Technology: ["id", "createdAt", "updatedAt", "title", "goalId"],
  Topic: ["id", "createdAt", "updatedAt", "title", "technologyId"],
  Tag: ["id", "createdAt", "updatedAt", "title", "topicId"],
  User: ["id", "createdAt", "updatedAt", "role", "name", "email", "image"],
  UserInterest: ["id", "createdAt", "updatedAt", "userId", "technologyId", "topicId", "interestType"],
  Blog: ["id", "createdAt", "updatedAt", "topicId", "skillLevel", "authorId", "description", "title", "slug", "views", "readTimeInMinutes"],
  Video: ["id", "createdAt", "updatedAt", "blogId", "videoLink", "thumbnailLink"],
  VideoSection: ["id", "createdAt", "updatedAt", "videoId", "blogSectionTitle", "timestampInSeconds", "blogPart"],
  BlogContent: ["id", "createdAt", "updatedAt", "intro", "implementation", "advanced", "blogId"],
  TagsOnBlogs: ["id", "createdAt", "updatedAt", "tagId", "blogId"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateGoal: ["_count", "_min", "_max"],
  GoalGroupBy: ["id", "createdAt", "updatedAt", "title", "_count", "_min", "_max"],
  AggregateTechnology: ["_count", "_min", "_max"],
  TechnologyGroupBy: ["id", "createdAt", "updatedAt", "title", "goalId", "_count", "_min", "_max"],
  AggregateTopic: ["_count", "_min", "_max"],
  TopicGroupBy: ["id", "createdAt", "updatedAt", "title", "technologyId", "_count", "_min", "_max"],
  AggregateTag: ["_count", "_min", "_max"],
  TagGroupBy: ["id", "createdAt", "updatedAt", "title", "topicId", "_count", "_min", "_max"],
  AggregateUser: ["_count", "_min", "_max"],
  UserGroupBy: ["id", "createdAt", "updatedAt", "role", "name", "email", "image", "_count", "_min", "_max"],
  AggregateUserInterest: ["_count", "_min", "_max"],
  UserInterestGroupBy: ["id", "createdAt", "updatedAt", "userId", "technologyId", "topicId", "interestType", "_count", "_min", "_max"],
  AggregateBlog: ["_count", "_avg", "_sum", "_min", "_max"],
  BlogGroupBy: ["id", "createdAt", "updatedAt", "topicId", "skillLevel", "authorId", "description", "title", "slug", "views", "readTimeInMinutes", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateVideo: ["_count", "_min", "_max"],
  VideoGroupBy: ["id", "createdAt", "updatedAt", "blogId", "videoLink", "thumbnailLink", "_count", "_min", "_max"],
  AggregateVideoSection: ["_count", "_avg", "_sum", "_min", "_max"],
  VideoSectionGroupBy: ["id", "createdAt", "updatedAt", "videoId", "blogSectionTitle", "timestampInSeconds", "blogPart", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateBlogContent: ["_count", "_min", "_max"],
  BlogContentGroupBy: ["id", "createdAt", "updatedAt", "intro", "implementation", "advanced", "blogId", "_count", "_min", "_max"],
  AggregateTagsOnBlogs: ["_count", "_min", "_max"],
  TagsOnBlogsGroupBy: ["id", "createdAt", "updatedAt", "tagId", "blogId", "_count", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  GoalCount: ["Technologies"],
  GoalCountAggregate: ["id", "createdAt", "updatedAt", "title", "_all"],
  GoalMinAggregate: ["id", "createdAt", "updatedAt", "title"],
  GoalMaxAggregate: ["id", "createdAt", "updatedAt", "title"],
  TechnologyCount: ["Topics", "userInterests"],
  TechnologyCountAggregate: ["id", "createdAt", "updatedAt", "title", "goalId", "_all"],
  TechnologyMinAggregate: ["id", "createdAt", "updatedAt", "title", "goalId"],
  TechnologyMaxAggregate: ["id", "createdAt", "updatedAt", "title", "goalId"],
  TopicCount: ["Blogs", "tags", "userInterests"],
  TopicCountAggregate: ["id", "createdAt", "updatedAt", "title", "technologyId", "_all"],
  TopicMinAggregate: ["id", "createdAt", "updatedAt", "title", "technologyId"],
  TopicMaxAggregate: ["id", "createdAt", "updatedAt", "title", "technologyId"],
  TagCount: ["Blogs"],
  TagCountAggregate: ["id", "createdAt", "updatedAt", "title", "topicId", "_all"],
  TagMinAggregate: ["id", "createdAt", "updatedAt", "title", "topicId"],
  TagMaxAggregate: ["id", "createdAt", "updatedAt", "title", "topicId"],
  UserCount: ["Blogs", "interests"],
  UserCountAggregate: ["id", "createdAt", "updatedAt", "role", "name", "email", "image", "_all"],
  UserMinAggregate: ["id", "createdAt", "updatedAt", "role", "name", "email", "image"],
  UserMaxAggregate: ["id", "createdAt", "updatedAt", "role", "name", "email", "image"],
  UserInterestCountAggregate: ["id", "createdAt", "updatedAt", "userId", "technologyId", "topicId", "interestType", "_all"],
  UserInterestMinAggregate: ["id", "createdAt", "updatedAt", "userId", "technologyId", "topicId", "interestType"],
  UserInterestMaxAggregate: ["id", "createdAt", "updatedAt", "userId", "technologyId", "topicId", "interestType"],
  BlogCount: ["Tags"],
  BlogCountAggregate: ["id", "createdAt", "updatedAt", "topicId", "skillLevel", "authorId", "description", "title", "slug", "views", "readTimeInMinutes", "_all"],
  BlogAvgAggregate: ["views", "readTimeInMinutes"],
  BlogSumAggregate: ["views", "readTimeInMinutes"],
  BlogMinAggregate: ["id", "createdAt", "updatedAt", "topicId", "skillLevel", "authorId", "description", "title", "slug", "views", "readTimeInMinutes"],
  BlogMaxAggregate: ["id", "createdAt", "updatedAt", "topicId", "skillLevel", "authorId", "description", "title", "slug", "views", "readTimeInMinutes"],
  VideoCount: ["Sections"],
  VideoCountAggregate: ["id", "createdAt", "updatedAt", "blogId", "videoLink", "thumbnailLink", "_all"],
  VideoMinAggregate: ["id", "createdAt", "updatedAt", "blogId", "videoLink", "thumbnailLink"],
  VideoMaxAggregate: ["id", "createdAt", "updatedAt", "blogId", "videoLink", "thumbnailLink"],
  VideoSectionCountAggregate: ["id", "createdAt", "updatedAt", "videoId", "blogSectionTitle", "timestampInSeconds", "blogPart", "_all"],
  VideoSectionAvgAggregate: ["timestampInSeconds"],
  VideoSectionSumAggregate: ["timestampInSeconds"],
  VideoSectionMinAggregate: ["id", "createdAt", "updatedAt", "videoId", "blogSectionTitle", "timestampInSeconds", "blogPart"],
  VideoSectionMaxAggregate: ["id", "createdAt", "updatedAt", "videoId", "blogSectionTitle", "timestampInSeconds", "blogPart"],
  BlogContentCountAggregate: ["id", "createdAt", "updatedAt", "intro", "implementation", "advanced", "blogId", "_all"],
  BlogContentMinAggregate: ["id", "createdAt", "updatedAt", "blogId"],
  BlogContentMaxAggregate: ["id", "createdAt", "updatedAt", "blogId"],
  TagsOnBlogsCountAggregate: ["id", "createdAt", "updatedAt", "tagId", "blogId", "_all"],
  TagsOnBlogsMinAggregate: ["id", "createdAt", "updatedAt", "tagId", "blogId"],
  TagsOnBlogsMaxAggregate: ["id", "createdAt", "updatedAt", "tagId", "blogId"],
  CreateManyAndReturnGoal: ["id", "createdAt", "updatedAt", "title"],
  CreateManyAndReturnTechnology: ["id", "createdAt", "updatedAt", "title", "goalId", "Goal"],
  CreateManyAndReturnTopic: ["id", "createdAt", "updatedAt", "title", "technologyId", "Technology"],
  CreateManyAndReturnTag: ["id", "createdAt", "updatedAt", "title", "topicId", "Topic"],
  CreateManyAndReturnUser: ["id", "createdAt", "updatedAt", "role", "name", "email", "image"],
  CreateManyAndReturnUserInterest: ["id", "createdAt", "updatedAt", "userId", "technologyId", "topicId", "interestType", "user", "Technology", "Topic"],
  CreateManyAndReturnBlog: ["id", "createdAt", "updatedAt", "topicId", "skillLevel", "authorId", "description", "title", "slug", "views", "readTimeInMinutes", "Topic", "Author"],
  CreateManyAndReturnVideo: ["id", "createdAt", "updatedAt", "blogId", "videoLink", "thumbnailLink", "Blog"],
  CreateManyAndReturnVideoSection: ["id", "createdAt", "updatedAt", "videoId", "blogSectionTitle", "timestampInSeconds", "blogPart", "Video"],
  CreateManyAndReturnBlogContent: ["id", "createdAt", "updatedAt", "intro", "implementation", "advanced", "blogId", "Blog"],
  CreateManyAndReturnTagsOnBlogs: ["id", "createdAt", "updatedAt", "tagId", "blogId", "Tag", "Blog"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
> = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  GoalWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "title", "Technologies"],
  GoalOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "title", "Technologies"],
  GoalWhereUniqueInput: ["id", "AND", "OR", "NOT", "createdAt", "updatedAt", "title", "Technologies"],
  GoalOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "title", "_count", "_max", "_min"],
  GoalScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "title"],
  TechnologyWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "title", "goalId", "Topics", "Goal", "userInterests"],
  TechnologyOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "title", "goalId", "Topics", "Goal", "userInterests"],
  TechnologyWhereUniqueInput: ["id", "AND", "OR", "NOT", "createdAt", "updatedAt", "title", "goalId", "Topics", "Goal", "userInterests"],
  TechnologyOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "title", "goalId", "_count", "_max", "_min"],
  TechnologyScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "title", "goalId"],
  TopicWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "title", "technologyId", "Technology", "Blogs", "tags", "userInterests"],
  TopicOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "title", "technologyId", "Technology", "Blogs", "tags", "userInterests"],
  TopicWhereUniqueInput: ["id", "AND", "OR", "NOT", "createdAt", "updatedAt", "title", "technologyId", "Technology", "Blogs", "tags", "userInterests"],
  TopicOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "title", "technologyId", "_count", "_max", "_min"],
  TopicScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "title", "technologyId"],
  TagWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "title", "topicId", "Topic", "Blogs"],
  TagOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "title", "topicId", "Topic", "Blogs"],
  TagWhereUniqueInput: ["id", "AND", "OR", "NOT", "createdAt", "updatedAt", "title", "topicId", "Topic", "Blogs"],
  TagOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "title", "topicId", "_count", "_max", "_min"],
  TagScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "title", "topicId"],
  UserWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "role", "name", "email", "image", "Blogs", "interests"],
  UserOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "role", "name", "email", "image", "Blogs", "interests"],
  UserWhereUniqueInput: ["id", "email", "AND", "OR", "NOT", "createdAt", "updatedAt", "role", "name", "image", "Blogs", "interests"],
  UserOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "role", "name", "email", "image", "_count", "_max", "_min"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "role", "name", "email", "image"],
  UserInterestWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "userId", "technologyId", "topicId", "interestType", "user", "Technology", "Topic"],
  UserInterestOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "userId", "technologyId", "topicId", "interestType", "user", "Technology", "Topic"],
  UserInterestWhereUniqueInput: ["id", "AND", "OR", "NOT", "createdAt", "updatedAt", "userId", "technologyId", "topicId", "interestType", "user", "Technology", "Topic"],
  UserInterestOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "userId", "technologyId", "topicId", "interestType", "_count", "_max", "_min"],
  UserInterestScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "userId", "technologyId", "topicId", "interestType"],
  BlogWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "topicId", "skillLevel", "authorId", "description", "title", "slug", "views", "readTimeInMinutes", "Topic", "Tags", "Author", "content", "Video"],
  BlogOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "topicId", "skillLevel", "authorId", "description", "title", "slug", "views", "readTimeInMinutes", "Topic", "Tags", "Author", "content", "Video"],
  BlogWhereUniqueInput: ["id", "slug", "topicId_title", "AND", "OR", "NOT", "createdAt", "updatedAt", "topicId", "skillLevel", "authorId", "description", "title", "views", "readTimeInMinutes", "Topic", "Tags", "Author", "content", "Video"],
  BlogOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "topicId", "skillLevel", "authorId", "description", "title", "slug", "views", "readTimeInMinutes", "_count", "_avg", "_max", "_min", "_sum"],
  BlogScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "topicId", "skillLevel", "authorId", "description", "title", "slug", "views", "readTimeInMinutes"],
  VideoWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "blogId", "videoLink", "thumbnailLink", "Blog", "Sections"],
  VideoOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "blogId", "videoLink", "thumbnailLink", "Blog", "Sections"],
  VideoWhereUniqueInput: ["id", "blogId", "AND", "OR", "NOT", "createdAt", "updatedAt", "videoLink", "thumbnailLink", "Blog", "Sections"],
  VideoOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "blogId", "videoLink", "thumbnailLink", "_count", "_max", "_min"],
  VideoScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "blogId", "videoLink", "thumbnailLink"],
  VideoSectionWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "videoId", "blogSectionTitle", "timestampInSeconds", "blogPart", "Video"],
  VideoSectionOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "videoId", "blogSectionTitle", "timestampInSeconds", "blogPart", "Video"],
  VideoSectionWhereUniqueInput: ["id", "blogSectionTitle_blogPart", "AND", "OR", "NOT", "createdAt", "updatedAt", "videoId", "blogSectionTitle", "timestampInSeconds", "blogPart", "Video"],
  VideoSectionOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "videoId", "blogSectionTitle", "timestampInSeconds", "blogPart", "_count", "_avg", "_max", "_min", "_sum"],
  VideoSectionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "videoId", "blogSectionTitle", "timestampInSeconds", "blogPart"],
  BlogContentWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "intro", "implementation", "advanced", "blogId", "Blog"],
  BlogContentOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "intro", "implementation", "advanced", "blogId", "Blog"],
  BlogContentWhereUniqueInput: ["id", "blogId", "AND", "OR", "NOT", "createdAt", "updatedAt", "intro", "implementation", "advanced", "Blog"],
  BlogContentOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "intro", "implementation", "advanced", "blogId", "_count", "_max", "_min"],
  BlogContentScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "intro", "implementation", "advanced", "blogId"],
  TagsOnBlogsWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "tagId", "blogId", "Tag", "Blog"],
  TagsOnBlogsOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "tagId", "blogId", "Tag", "Blog"],
  TagsOnBlogsWhereUniqueInput: ["id", "blogId_tagId", "AND", "OR", "NOT", "createdAt", "updatedAt", "tagId", "blogId", "Tag", "Blog"],
  TagsOnBlogsOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "tagId", "blogId", "_count", "_max", "_min"],
  TagsOnBlogsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "tagId", "blogId"],
  GoalCreateInput: ["id", "createdAt", "updatedAt", "title", "Technologies"],
  GoalUpdateInput: ["id", "createdAt", "updatedAt", "title", "Technologies"],
  GoalCreateManyInput: ["id", "createdAt", "updatedAt", "title"],
  GoalUpdateManyMutationInput: ["id", "createdAt", "updatedAt", "title"],
  TechnologyCreateInput: ["id", "createdAt", "updatedAt", "title", "Topics", "Goal", "userInterests"],
  TechnologyUpdateInput: ["id", "createdAt", "updatedAt", "title", "Topics", "Goal", "userInterests"],
  TechnologyCreateManyInput: ["id", "createdAt", "updatedAt", "title", "goalId"],
  TechnologyUpdateManyMutationInput: ["id", "createdAt", "updatedAt", "title"],
  TopicCreateInput: ["id", "createdAt", "updatedAt", "title", "Technology", "Blogs", "tags", "userInterests"],
  TopicUpdateInput: ["id", "createdAt", "updatedAt", "title", "Technology", "Blogs", "tags", "userInterests"],
  TopicCreateManyInput: ["id", "createdAt", "updatedAt", "title", "technologyId"],
  TopicUpdateManyMutationInput: ["id", "createdAt", "updatedAt", "title"],
  TagCreateInput: ["id", "createdAt", "updatedAt", "title", "Topic", "Blogs"],
  TagUpdateInput: ["id", "createdAt", "updatedAt", "title", "Topic", "Blogs"],
  TagCreateManyInput: ["id", "createdAt", "updatedAt", "title", "topicId"],
  TagUpdateManyMutationInput: ["id", "createdAt", "updatedAt", "title"],
  UserCreateInput: ["id", "createdAt", "updatedAt", "role", "name", "email", "image", "Blogs", "interests"],
  UserUpdateInput: ["id", "createdAt", "updatedAt", "role", "name", "email", "image", "Blogs", "interests"],
  UserCreateManyInput: ["id", "createdAt", "updatedAt", "role", "name", "email", "image"],
  UserUpdateManyMutationInput: ["id", "createdAt", "updatedAt", "role", "name", "email", "image"],
  UserInterestCreateInput: ["id", "createdAt", "updatedAt", "interestType", "user", "Technology", "Topic"],
  UserInterestUpdateInput: ["id", "createdAt", "updatedAt", "interestType", "user", "Technology", "Topic"],
  UserInterestCreateManyInput: ["id", "createdAt", "updatedAt", "userId", "technologyId", "topicId", "interestType"],
  UserInterestUpdateManyMutationInput: ["id", "createdAt", "updatedAt", "interestType"],
  BlogCreateInput: ["id", "createdAt", "updatedAt", "skillLevel", "description", "title", "slug", "views", "readTimeInMinutes", "Topic", "Tags", "Author", "content", "Video"],
  BlogUpdateInput: ["id", "createdAt", "updatedAt", "skillLevel", "description", "title", "slug", "views", "readTimeInMinutes", "Topic", "Tags", "Author", "content", "Video"],
  BlogCreateManyInput: ["id", "createdAt", "updatedAt", "topicId", "skillLevel", "authorId", "description", "title", "slug", "views", "readTimeInMinutes"],
  BlogUpdateManyMutationInput: ["id", "createdAt", "updatedAt", "skillLevel", "description", "title", "slug", "views", "readTimeInMinutes"],
  VideoCreateInput: ["id", "createdAt", "updatedAt", "videoLink", "thumbnailLink", "Blog", "Sections"],
  VideoUpdateInput: ["id", "createdAt", "updatedAt", "videoLink", "thumbnailLink", "Blog", "Sections"],
  VideoCreateManyInput: ["id", "createdAt", "updatedAt", "blogId", "videoLink", "thumbnailLink"],
  VideoUpdateManyMutationInput: ["id", "createdAt", "updatedAt", "videoLink", "thumbnailLink"],
  VideoSectionCreateInput: ["id", "createdAt", "updatedAt", "blogSectionTitle", "timestampInSeconds", "blogPart", "Video"],
  VideoSectionUpdateInput: ["id", "createdAt", "updatedAt", "blogSectionTitle", "timestampInSeconds", "blogPart", "Video"],
  VideoSectionCreateManyInput: ["id", "createdAt", "updatedAt", "videoId", "blogSectionTitle", "timestampInSeconds", "blogPart"],
  VideoSectionUpdateManyMutationInput: ["id", "createdAt", "updatedAt", "blogSectionTitle", "timestampInSeconds", "blogPart"],
  BlogContentCreateInput: ["id", "createdAt", "updatedAt", "intro", "implementation", "advanced", "Blog"],
  BlogContentUpdateInput: ["id", "createdAt", "updatedAt", "intro", "implementation", "advanced", "Blog"],
  BlogContentCreateManyInput: ["id", "createdAt", "updatedAt", "intro", "implementation", "advanced", "blogId"],
  BlogContentUpdateManyMutationInput: ["id", "createdAt", "updatedAt", "intro", "implementation", "advanced"],
  TagsOnBlogsCreateInput: ["id", "createdAt", "updatedAt", "Tag", "Blog"],
  TagsOnBlogsUpdateInput: ["id", "createdAt", "updatedAt", "Tag", "Blog"],
  TagsOnBlogsCreateManyInput: ["id", "createdAt", "updatedAt", "tagId", "blogId"],
  TagsOnBlogsUpdateManyMutationInput: ["id", "createdAt", "updatedAt"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  TechnologyListRelationFilter: ["every", "some", "none"],
  TechnologyOrderByRelationAggregateInput: ["_count"],
  GoalCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "title"],
  GoalMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "title"],
  GoalMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "title"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  TopicListRelationFilter: ["every", "some", "none"],
  GoalNullableRelationFilter: ["is", "isNot"],
  UserInterestListRelationFilter: ["every", "some", "none"],
  SortOrderInput: ["sort", "nulls"],
  TopicOrderByRelationAggregateInput: ["_count"],
  UserInterestOrderByRelationAggregateInput: ["_count"],
  TechnologyCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "title", "goalId"],
  TechnologyMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "title", "goalId"],
  TechnologyMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "title", "goalId"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  TechnologyNullableRelationFilter: ["is", "isNot"],
  BlogListRelationFilter: ["every", "some", "none"],
  TagListRelationFilter: ["every", "some", "none"],
  BlogOrderByRelationAggregateInput: ["_count"],
  TagOrderByRelationAggregateInput: ["_count"],
  TopicCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "title", "technologyId"],
  TopicMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "title", "technologyId"],
  TopicMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "title", "technologyId"],
  TopicNullableRelationFilter: ["is", "isNot"],
  TagsOnBlogsListRelationFilter: ["every", "some", "none"],
  TagsOnBlogsOrderByRelationAggregateInput: ["_count"],
  TagCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "title", "topicId"],
  TagMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "title", "topicId"],
  TagMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "title", "topicId"],
  EnumUserRoleFilter: ["equals", "in", "notIn", "not"],
  UserCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "role", "name", "email", "image"],
  UserMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "role", "name", "email", "image"],
  UserMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "role", "name", "email", "image"],
  EnumUserRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  EnumInterestTypeFilter: ["equals", "in", "notIn", "not"],
  UserRelationFilter: ["is", "isNot"],
  UserInterestCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "userId", "technologyId", "topicId", "interestType"],
  UserInterestMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "userId", "technologyId", "topicId", "interestType"],
  UserInterestMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "userId", "technologyId", "topicId", "interestType"],
  EnumInterestTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  EnumSkillLevelFilter: ["equals", "in", "notIn", "not"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  UserNullableRelationFilter: ["is", "isNot"],
  BlogContentNullableRelationFilter: ["is", "isNot"],
  VideoNullableRelationFilter: ["is", "isNot"],
  BlogTopicIdTitleCompoundUniqueInput: ["topicId", "title"],
  BlogCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "topicId", "skillLevel", "authorId", "description", "title", "slug", "views", "readTimeInMinutes"],
  BlogAvgOrderByAggregateInput: ["views", "readTimeInMinutes"],
  BlogMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "topicId", "skillLevel", "authorId", "description", "title", "slug", "views", "readTimeInMinutes"],
  BlogMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "topicId", "skillLevel", "authorId", "description", "title", "slug", "views", "readTimeInMinutes"],
  BlogSumOrderByAggregateInput: ["views", "readTimeInMinutes"],
  EnumSkillLevelWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  BlogRelationFilter: ["is", "isNot"],
  VideoSectionListRelationFilter: ["every", "some", "none"],
  VideoSectionOrderByRelationAggregateInput: ["_count"],
  VideoCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "blogId", "videoLink", "thumbnailLink"],
  VideoMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "blogId", "videoLink", "thumbnailLink"],
  VideoMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "blogId", "videoLink", "thumbnailLink"],
  EnumBlogPartFilter: ["equals", "in", "notIn", "not"],
  VideoRelationFilter: ["is", "isNot"],
  VideoSectionBlogSectionTitleBlogPartCompoundUniqueInput: ["blogSectionTitle", "blogPart"],
  VideoSectionCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "videoId", "blogSectionTitle", "timestampInSeconds", "blogPart"],
  VideoSectionAvgOrderByAggregateInput: ["timestampInSeconds"],
  VideoSectionMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "videoId", "blogSectionTitle", "timestampInSeconds", "blogPart"],
  VideoSectionMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "videoId", "blogSectionTitle", "timestampInSeconds", "blogPart"],
  VideoSectionSumOrderByAggregateInput: ["timestampInSeconds"],
  EnumBlogPartWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  JsonFilter: ["equals", "path", "string_contains", "string_starts_with", "string_ends_with", "array_contains", "array_starts_with", "array_ends_with", "lt", "lte", "gt", "gte", "not"],
  BlogContentCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "intro", "implementation", "advanced", "blogId"],
  BlogContentMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "blogId"],
  BlogContentMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "blogId"],
  JsonWithAggregatesFilter: ["equals", "path", "string_contains", "string_starts_with", "string_ends_with", "array_contains", "array_starts_with", "array_ends_with", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  TagRelationFilter: ["is", "isNot"],
  TagsOnBlogsBlogIdTagIdCompoundUniqueInput: ["blogId", "tagId"],
  TagsOnBlogsCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "tagId", "blogId"],
  TagsOnBlogsMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "tagId", "blogId"],
  TagsOnBlogsMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "tagId", "blogId"],
  TechnologyCreateNestedManyWithoutGoalInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  TechnologyUpdateManyWithoutGoalNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  TopicCreateNestedManyWithoutTechnologyInput: ["create", "connectOrCreate", "createMany", "connect"],
  GoalCreateNestedOneWithoutTechnologiesInput: ["create", "connectOrCreate", "connect"],
  UserInterestCreateNestedManyWithoutTechnologyInput: ["create", "connectOrCreate", "createMany", "connect"],
  TopicUpdateManyWithoutTechnologyNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  GoalUpdateOneWithoutTechnologiesNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  UserInterestUpdateManyWithoutTechnologyNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  TechnologyCreateNestedOneWithoutTopicsInput: ["create", "connectOrCreate", "connect"],
  BlogCreateNestedManyWithoutTopicInput: ["create", "connectOrCreate", "createMany", "connect"],
  TagCreateNestedManyWithoutTopicInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserInterestCreateNestedManyWithoutTopicInput: ["create", "connectOrCreate", "createMany", "connect"],
  TechnologyUpdateOneWithoutTopicsNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  BlogUpdateManyWithoutTopicNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  TagUpdateManyWithoutTopicNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserInterestUpdateManyWithoutTopicNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  TopicCreateNestedOneWithoutTagsInput: ["create", "connectOrCreate", "connect"],
  TagsOnBlogsCreateNestedManyWithoutTagInput: ["create", "connectOrCreate", "createMany", "connect"],
  TopicUpdateOneWithoutTagsNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  TagsOnBlogsUpdateManyWithoutTagNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  BlogCreateNestedManyWithoutAuthorInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserInterestCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  EnumUserRoleFieldUpdateOperationsInput: ["set"],
  BlogUpdateManyWithoutAuthorNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserInterestUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutInterestsInput: ["create", "connectOrCreate", "connect"],
  TechnologyCreateNestedOneWithoutUserInterestsInput: ["create", "connectOrCreate", "connect"],
  TopicCreateNestedOneWithoutUserInterestsInput: ["create", "connectOrCreate", "connect"],
  EnumInterestTypeFieldUpdateOperationsInput: ["set"],
  UserUpdateOneRequiredWithoutInterestsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  TechnologyUpdateOneWithoutUserInterestsNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  TopicUpdateOneWithoutUserInterestsNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  TopicCreateNestedOneWithoutBlogsInput: ["create", "connectOrCreate", "connect"],
  TagsOnBlogsCreateNestedManyWithoutBlogInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserCreateNestedOneWithoutBlogsInput: ["create", "connectOrCreate", "connect"],
  BlogContentCreateNestedOneWithoutBlogInput: ["create", "connectOrCreate", "connect"],
  VideoCreateNestedOneWithoutBlogInput: ["create", "connectOrCreate", "connect"],
  EnumSkillLevelFieldUpdateOperationsInput: ["set"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  TopicUpdateOneWithoutBlogsNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  TagsOnBlogsUpdateManyWithoutBlogNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserUpdateOneWithoutBlogsNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  BlogContentUpdateOneWithoutBlogNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  VideoUpdateOneWithoutBlogNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  BlogCreateNestedOneWithoutVideoInput: ["create", "connectOrCreate", "connect"],
  VideoSectionCreateNestedManyWithoutVideoInput: ["create", "connectOrCreate", "createMany", "connect"],
  BlogUpdateOneRequiredWithoutVideoNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  VideoSectionUpdateManyWithoutVideoNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  VideoCreateNestedOneWithoutSectionsInput: ["create", "connectOrCreate", "connect"],
  EnumBlogPartFieldUpdateOperationsInput: ["set"],
  VideoUpdateOneRequiredWithoutSectionsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  BlogCreateNestedOneWithoutContentInput: ["create", "connectOrCreate", "connect"],
  BlogUpdateOneRequiredWithoutContentNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  TagCreateNestedOneWithoutBlogsInput: ["create", "connectOrCreate", "connect"],
  BlogCreateNestedOneWithoutTagsInput: ["create", "connectOrCreate", "connect"],
  TagUpdateOneRequiredWithoutBlogsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  BlogUpdateOneRequiredWithoutTagsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumUserRoleFilter: ["equals", "in", "notIn", "not"],
  NestedEnumUserRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedEnumInterestTypeFilter: ["equals", "in", "notIn", "not"],
  NestedEnumInterestTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedEnumSkillLevelFilter: ["equals", "in", "notIn", "not"],
  NestedEnumSkillLevelWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumBlogPartFilter: ["equals", "in", "notIn", "not"],
  NestedEnumBlogPartWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedJsonFilter: ["equals", "path", "string_contains", "string_starts_with", "string_ends_with", "array_contains", "array_starts_with", "array_ends_with", "lt", "lte", "gt", "gte", "not"],
  TechnologyCreateWithoutGoalInput: ["id", "createdAt", "updatedAt", "title", "Topics", "userInterests"],
  TechnologyCreateOrConnectWithoutGoalInput: ["where", "create"],
  TechnologyCreateManyGoalInputEnvelope: ["data", "skipDuplicates"],
  TechnologyUpsertWithWhereUniqueWithoutGoalInput: ["where", "update", "create"],
  TechnologyUpdateWithWhereUniqueWithoutGoalInput: ["where", "data"],
  TechnologyUpdateManyWithWhereWithoutGoalInput: ["where", "data"],
  TechnologyScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "title", "goalId"],
  TopicCreateWithoutTechnologyInput: ["id", "createdAt", "updatedAt", "title", "Blogs", "tags", "userInterests"],
  TopicCreateOrConnectWithoutTechnologyInput: ["where", "create"],
  TopicCreateManyTechnologyInputEnvelope: ["data", "skipDuplicates"],
  GoalCreateWithoutTechnologiesInput: ["id", "createdAt", "updatedAt", "title"],
  GoalCreateOrConnectWithoutTechnologiesInput: ["where", "create"],
  UserInterestCreateWithoutTechnologyInput: ["id", "createdAt", "updatedAt", "interestType", "user", "Topic"],
  UserInterestCreateOrConnectWithoutTechnologyInput: ["where", "create"],
  UserInterestCreateManyTechnologyInputEnvelope: ["data", "skipDuplicates"],
  TopicUpsertWithWhereUniqueWithoutTechnologyInput: ["where", "update", "create"],
  TopicUpdateWithWhereUniqueWithoutTechnologyInput: ["where", "data"],
  TopicUpdateManyWithWhereWithoutTechnologyInput: ["where", "data"],
  TopicScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "title", "technologyId"],
  GoalUpsertWithoutTechnologiesInput: ["update", "create", "where"],
  GoalUpdateToOneWithWhereWithoutTechnologiesInput: ["where", "data"],
  GoalUpdateWithoutTechnologiesInput: ["id", "createdAt", "updatedAt", "title"],
  UserInterestUpsertWithWhereUniqueWithoutTechnologyInput: ["where", "update", "create"],
  UserInterestUpdateWithWhereUniqueWithoutTechnologyInput: ["where", "data"],
  UserInterestUpdateManyWithWhereWithoutTechnologyInput: ["where", "data"],
  UserInterestScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "userId", "technologyId", "topicId", "interestType"],
  TechnologyCreateWithoutTopicsInput: ["id", "createdAt", "updatedAt", "title", "Goal", "userInterests"],
  TechnologyCreateOrConnectWithoutTopicsInput: ["where", "create"],
  BlogCreateWithoutTopicInput: ["id", "createdAt", "updatedAt", "skillLevel", "description", "title", "slug", "views", "readTimeInMinutes", "Tags", "Author", "content", "Video"],
  BlogCreateOrConnectWithoutTopicInput: ["where", "create"],
  BlogCreateManyTopicInputEnvelope: ["data", "skipDuplicates"],
  TagCreateWithoutTopicInput: ["id", "createdAt", "updatedAt", "title", "Blogs"],
  TagCreateOrConnectWithoutTopicInput: ["where", "create"],
  TagCreateManyTopicInputEnvelope: ["data", "skipDuplicates"],
  UserInterestCreateWithoutTopicInput: ["id", "createdAt", "updatedAt", "interestType", "user", "Technology"],
  UserInterestCreateOrConnectWithoutTopicInput: ["where", "create"],
  UserInterestCreateManyTopicInputEnvelope: ["data", "skipDuplicates"],
  TechnologyUpsertWithoutTopicsInput: ["update", "create", "where"],
  TechnologyUpdateToOneWithWhereWithoutTopicsInput: ["where", "data"],
  TechnologyUpdateWithoutTopicsInput: ["id", "createdAt", "updatedAt", "title", "Goal", "userInterests"],
  BlogUpsertWithWhereUniqueWithoutTopicInput: ["where", "update", "create"],
  BlogUpdateWithWhereUniqueWithoutTopicInput: ["where", "data"],
  BlogUpdateManyWithWhereWithoutTopicInput: ["where", "data"],
  BlogScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "topicId", "skillLevel", "authorId", "description", "title", "slug", "views", "readTimeInMinutes"],
  TagUpsertWithWhereUniqueWithoutTopicInput: ["where", "update", "create"],
  TagUpdateWithWhereUniqueWithoutTopicInput: ["where", "data"],
  TagUpdateManyWithWhereWithoutTopicInput: ["where", "data"],
  TagScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "title", "topicId"],
  UserInterestUpsertWithWhereUniqueWithoutTopicInput: ["where", "update", "create"],
  UserInterestUpdateWithWhereUniqueWithoutTopicInput: ["where", "data"],
  UserInterestUpdateManyWithWhereWithoutTopicInput: ["where", "data"],
  TopicCreateWithoutTagsInput: ["id", "createdAt", "updatedAt", "title", "Technology", "Blogs", "userInterests"],
  TopicCreateOrConnectWithoutTagsInput: ["where", "create"],
  TagsOnBlogsCreateWithoutTagInput: ["id", "createdAt", "updatedAt", "Blog"],
  TagsOnBlogsCreateOrConnectWithoutTagInput: ["where", "create"],
  TagsOnBlogsCreateManyTagInputEnvelope: ["data", "skipDuplicates"],
  TopicUpsertWithoutTagsInput: ["update", "create", "where"],
  TopicUpdateToOneWithWhereWithoutTagsInput: ["where", "data"],
  TopicUpdateWithoutTagsInput: ["id", "createdAt", "updatedAt", "title", "Technology", "Blogs", "userInterests"],
  TagsOnBlogsUpsertWithWhereUniqueWithoutTagInput: ["where", "update", "create"],
  TagsOnBlogsUpdateWithWhereUniqueWithoutTagInput: ["where", "data"],
  TagsOnBlogsUpdateManyWithWhereWithoutTagInput: ["where", "data"],
  TagsOnBlogsScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "tagId", "blogId"],
  BlogCreateWithoutAuthorInput: ["id", "createdAt", "updatedAt", "skillLevel", "description", "title", "slug", "views", "readTimeInMinutes", "Topic", "Tags", "content", "Video"],
  BlogCreateOrConnectWithoutAuthorInput: ["where", "create"],
  BlogCreateManyAuthorInputEnvelope: ["data", "skipDuplicates"],
  UserInterestCreateWithoutUserInput: ["id", "createdAt", "updatedAt", "interestType", "Technology", "Topic"],
  UserInterestCreateOrConnectWithoutUserInput: ["where", "create"],
  UserInterestCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  BlogUpsertWithWhereUniqueWithoutAuthorInput: ["where", "update", "create"],
  BlogUpdateWithWhereUniqueWithoutAuthorInput: ["where", "data"],
  BlogUpdateManyWithWhereWithoutAuthorInput: ["where", "data"],
  UserInterestUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  UserInterestUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  UserInterestUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  UserCreateWithoutInterestsInput: ["id", "createdAt", "updatedAt", "role", "name", "email", "image", "Blogs"],
  UserCreateOrConnectWithoutInterestsInput: ["where", "create"],
  TechnologyCreateWithoutUserInterestsInput: ["id", "createdAt", "updatedAt", "title", "Topics", "Goal"],
  TechnologyCreateOrConnectWithoutUserInterestsInput: ["where", "create"],
  TopicCreateWithoutUserInterestsInput: ["id", "createdAt", "updatedAt", "title", "Technology", "Blogs", "tags"],
  TopicCreateOrConnectWithoutUserInterestsInput: ["where", "create"],
  UserUpsertWithoutInterestsInput: ["update", "create", "where"],
  UserUpdateToOneWithWhereWithoutInterestsInput: ["where", "data"],
  UserUpdateWithoutInterestsInput: ["id", "createdAt", "updatedAt", "role", "name", "email", "image", "Blogs"],
  TechnologyUpsertWithoutUserInterestsInput: ["update", "create", "where"],
  TechnologyUpdateToOneWithWhereWithoutUserInterestsInput: ["where", "data"],
  TechnologyUpdateWithoutUserInterestsInput: ["id", "createdAt", "updatedAt", "title", "Topics", "Goal"],
  TopicUpsertWithoutUserInterestsInput: ["update", "create", "where"],
  TopicUpdateToOneWithWhereWithoutUserInterestsInput: ["where", "data"],
  TopicUpdateWithoutUserInterestsInput: ["id", "createdAt", "updatedAt", "title", "Technology", "Blogs", "tags"],
  TopicCreateWithoutBlogsInput: ["id", "createdAt", "updatedAt", "title", "Technology", "tags", "userInterests"],
  TopicCreateOrConnectWithoutBlogsInput: ["where", "create"],
  TagsOnBlogsCreateWithoutBlogInput: ["id", "createdAt", "updatedAt", "Tag"],
  TagsOnBlogsCreateOrConnectWithoutBlogInput: ["where", "create"],
  TagsOnBlogsCreateManyBlogInputEnvelope: ["data", "skipDuplicates"],
  UserCreateWithoutBlogsInput: ["id", "createdAt", "updatedAt", "role", "name", "email", "image", "interests"],
  UserCreateOrConnectWithoutBlogsInput: ["where", "create"],
  BlogContentCreateWithoutBlogInput: ["id", "createdAt", "updatedAt", "intro", "implementation", "advanced"],
  BlogContentCreateOrConnectWithoutBlogInput: ["where", "create"],
  VideoCreateWithoutBlogInput: ["id", "createdAt", "updatedAt", "videoLink", "thumbnailLink", "Sections"],
  VideoCreateOrConnectWithoutBlogInput: ["where", "create"],
  TopicUpsertWithoutBlogsInput: ["update", "create", "where"],
  TopicUpdateToOneWithWhereWithoutBlogsInput: ["where", "data"],
  TopicUpdateWithoutBlogsInput: ["id", "createdAt", "updatedAt", "title", "Technology", "tags", "userInterests"],
  TagsOnBlogsUpsertWithWhereUniqueWithoutBlogInput: ["where", "update", "create"],
  TagsOnBlogsUpdateWithWhereUniqueWithoutBlogInput: ["where", "data"],
  TagsOnBlogsUpdateManyWithWhereWithoutBlogInput: ["where", "data"],
  UserUpsertWithoutBlogsInput: ["update", "create", "where"],
  UserUpdateToOneWithWhereWithoutBlogsInput: ["where", "data"],
  UserUpdateWithoutBlogsInput: ["id", "createdAt", "updatedAt", "role", "name", "email", "image", "interests"],
  BlogContentUpsertWithoutBlogInput: ["update", "create", "where"],
  BlogContentUpdateToOneWithWhereWithoutBlogInput: ["where", "data"],
  BlogContentUpdateWithoutBlogInput: ["id", "createdAt", "updatedAt", "intro", "implementation", "advanced"],
  VideoUpsertWithoutBlogInput: ["update", "create", "where"],
  VideoUpdateToOneWithWhereWithoutBlogInput: ["where", "data"],
  VideoUpdateWithoutBlogInput: ["id", "createdAt", "updatedAt", "videoLink", "thumbnailLink", "Sections"],
  BlogCreateWithoutVideoInput: ["id", "createdAt", "updatedAt", "skillLevel", "description", "title", "slug", "views", "readTimeInMinutes", "Topic", "Tags", "Author", "content"],
  BlogCreateOrConnectWithoutVideoInput: ["where", "create"],
  VideoSectionCreateWithoutVideoInput: ["id", "createdAt", "updatedAt", "blogSectionTitle", "timestampInSeconds", "blogPart"],
  VideoSectionCreateOrConnectWithoutVideoInput: ["where", "create"],
  VideoSectionCreateManyVideoInputEnvelope: ["data", "skipDuplicates"],
  BlogUpsertWithoutVideoInput: ["update", "create", "where"],
  BlogUpdateToOneWithWhereWithoutVideoInput: ["where", "data"],
  BlogUpdateWithoutVideoInput: ["id", "createdAt", "updatedAt", "skillLevel", "description", "title", "slug", "views", "readTimeInMinutes", "Topic", "Tags", "Author", "content"],
  VideoSectionUpsertWithWhereUniqueWithoutVideoInput: ["where", "update", "create"],
  VideoSectionUpdateWithWhereUniqueWithoutVideoInput: ["where", "data"],
  VideoSectionUpdateManyWithWhereWithoutVideoInput: ["where", "data"],
  VideoSectionScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "videoId", "blogSectionTitle", "timestampInSeconds", "blogPart"],
  VideoCreateWithoutSectionsInput: ["id", "createdAt", "updatedAt", "videoLink", "thumbnailLink", "Blog"],
  VideoCreateOrConnectWithoutSectionsInput: ["where", "create"],
  VideoUpsertWithoutSectionsInput: ["update", "create", "where"],
  VideoUpdateToOneWithWhereWithoutSectionsInput: ["where", "data"],
  VideoUpdateWithoutSectionsInput: ["id", "createdAt", "updatedAt", "videoLink", "thumbnailLink", "Blog"],
  BlogCreateWithoutContentInput: ["id", "createdAt", "updatedAt", "skillLevel", "description", "title", "slug", "views", "readTimeInMinutes", "Topic", "Tags", "Author", "Video"],
  BlogCreateOrConnectWithoutContentInput: ["where", "create"],
  BlogUpsertWithoutContentInput: ["update", "create", "where"],
  BlogUpdateToOneWithWhereWithoutContentInput: ["where", "data"],
  BlogUpdateWithoutContentInput: ["id", "createdAt", "updatedAt", "skillLevel", "description", "title", "slug", "views", "readTimeInMinutes", "Topic", "Tags", "Author", "Video"],
  TagCreateWithoutBlogsInput: ["id", "createdAt", "updatedAt", "title", "Topic"],
  TagCreateOrConnectWithoutBlogsInput: ["where", "create"],
  BlogCreateWithoutTagsInput: ["id", "createdAt", "updatedAt", "skillLevel", "description", "title", "slug", "views", "readTimeInMinutes", "Topic", "Author", "content", "Video"],
  BlogCreateOrConnectWithoutTagsInput: ["where", "create"],
  TagUpsertWithoutBlogsInput: ["update", "create", "where"],
  TagUpdateToOneWithWhereWithoutBlogsInput: ["where", "data"],
  TagUpdateWithoutBlogsInput: ["id", "createdAt", "updatedAt", "title", "Topic"],
  BlogUpsertWithoutTagsInput: ["update", "create", "where"],
  BlogUpdateToOneWithWhereWithoutTagsInput: ["where", "data"],
  BlogUpdateWithoutTagsInput: ["id", "createdAt", "updatedAt", "skillLevel", "description", "title", "slug", "views", "readTimeInMinutes", "Topic", "Author", "content", "Video"],
  TechnologyCreateManyGoalInput: ["id", "createdAt", "updatedAt", "title"],
  TechnologyUpdateWithoutGoalInput: ["id", "createdAt", "updatedAt", "title", "Topics", "userInterests"],
  TopicCreateManyTechnologyInput: ["id", "createdAt", "updatedAt", "title"],
  UserInterestCreateManyTechnologyInput: ["id", "createdAt", "updatedAt", "userId", "topicId", "interestType"],
  TopicUpdateWithoutTechnologyInput: ["id", "createdAt", "updatedAt", "title", "Blogs", "tags", "userInterests"],
  UserInterestUpdateWithoutTechnologyInput: ["id", "createdAt", "updatedAt", "interestType", "user", "Topic"],
  BlogCreateManyTopicInput: ["id", "createdAt", "updatedAt", "skillLevel", "authorId", "description", "title", "slug", "views", "readTimeInMinutes"],
  TagCreateManyTopicInput: ["id", "createdAt", "updatedAt", "title"],
  UserInterestCreateManyTopicInput: ["id", "createdAt", "updatedAt", "userId", "technologyId", "interestType"],
  BlogUpdateWithoutTopicInput: ["id", "createdAt", "updatedAt", "skillLevel", "description", "title", "slug", "views", "readTimeInMinutes", "Tags", "Author", "content", "Video"],
  TagUpdateWithoutTopicInput: ["id", "createdAt", "updatedAt", "title", "Blogs"],
  UserInterestUpdateWithoutTopicInput: ["id", "createdAt", "updatedAt", "interestType", "user", "Technology"],
  TagsOnBlogsCreateManyTagInput: ["id", "createdAt", "updatedAt", "blogId"],
  TagsOnBlogsUpdateWithoutTagInput: ["id", "createdAt", "updatedAt", "Blog"],
  BlogCreateManyAuthorInput: ["id", "createdAt", "updatedAt", "topicId", "skillLevel", "description", "title", "slug", "views", "readTimeInMinutes"],
  UserInterestCreateManyUserInput: ["id", "createdAt", "updatedAt", "technologyId", "topicId", "interestType"],
  BlogUpdateWithoutAuthorInput: ["id", "createdAt", "updatedAt", "skillLevel", "description", "title", "slug", "views", "readTimeInMinutes", "Topic", "Tags", "content", "Video"],
  UserInterestUpdateWithoutUserInput: ["id", "createdAt", "updatedAt", "interestType", "Technology", "Topic"],
  TagsOnBlogsCreateManyBlogInput: ["id", "createdAt", "updatedAt", "tagId"],
  TagsOnBlogsUpdateWithoutBlogInput: ["id", "createdAt", "updatedAt", "Tag"],
  VideoSectionCreateManyVideoInput: ["id", "createdAt", "updatedAt", "blogSectionTitle", "timestampInSeconds", "blogPart"],
  VideoSectionUpdateWithoutVideoInput: ["id", "createdAt", "updatedAt", "blogSectionTitle", "timestampInSeconds", "blogPart"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
> = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

