// !warning:eslint-disable
/* eslint-disable @typescript-eslint/no-unsafe-function-type */

import { buildSchema, NonEmptyArray } from "type-graphql";

import { resolvers } from "../../../../generated/type-graphql";
import { existsSync, writeFileSync } from "fs";
import { printSchema } from "graphql";
import prisma from "@/shared/utils/prisma/prismaClient";

import {
  GetUserInterestByIdResolver,
  GetUserInterestsResolver,
  CreateUserInterestResolver,
  UpdateUserInterestResolver,
  DeleteUserInterestResolver,
} from "@/graphql/resolvers/userInterest";

const UserInterestResolvers: NonEmptyArray<Function> = [
  GetUserInterestByIdResolver,
  GetUserInterestsResolver,
  CreateUserInterestResolver,
  UpdateUserInterestResolver,
  DeleteUserInterestResolver,
];

/*

import {
  GetBlogContentByIdResolver,
  GetBlogContentsResolver,
  CreateBlogContentResolver,
  UpdateBlogContentResolver,
  DeleteBlogContentResolver,
} from "@/graphql/resolvers/blogContent";

const BlogContentResolvers: NonEmptyArray<Function> = [
  GetBlogContentByIdResolver,
  GetBlogContentsResolver,
  CreateBlogContentResolver,
  UpdateBlogContentResolver,
  DeleteBlogContentResolver,
];

import {
  GetBlogTagByIdResolver,
  GetBlogTagsResolver,
  CreateBlogTagResolver,
  UpdateBlogTagResolver,
  DeleteBlogTagResolver,
} from "@/graphql/resolvers/blogTag";

const BlogTagResolvers: NonEmptyArray<Function> = [
  GetBlogTagByIdResolver,
  GetBlogTagsResolver,
  CreateBlogTagResolver,
  UpdateBlogTagResolver,
  DeleteBlogTagResolver,
];

import {
  GetGoalByIdResolver,
  GetGoalsResolver,
  CreateGoalResolver,
  UpdateGoalResolver,
  DeleteGoalResolver,
} from "@/graphql/resolvers/goal";

const GoalResolvers: NonEmptyArray<Function> = [
  GetGoalByIdResolver,
  GetGoalsResolver,
  CreateGoalResolver,
  UpdateGoalResolver,
  DeleteGoalResolver,
];

import {
  GetTagByIdResolver,
  GetTagsResolver,
  CreateTagResolver,
  UpdateTagResolver,
  DeleteTagResolver,
} from "@/graphql/resolvers/tag";

const TagResolvers: NonEmptyArray<Function> = [
  GetTagByIdResolver,
  GetTagsResolver,
  CreateTagResolver,
  UpdateTagResolver,
  DeleteTagResolver,
];

import {
  GetTechnologyByIdResolver,
  GetTechnologysResolver,
  CreateTechnologyResolver,
  UpdateTechnologyResolver,
  DeleteTechnologyResolver,
} from "@/graphql/resolvers/technology";

const TechnologyResolvers: NonEmptyArray<Function> = [
  GetTechnologyByIdResolver,
  GetTechnologysResolver,
  CreateTechnologyResolver,
  UpdateTechnologyResolver,
  DeleteTechnologyResolver,
];

import {
  GetTopicByIdResolver,
  GetTopicsResolver,
  CreateTopicResolver,
  UpdateTopicResolver,
  DeleteTopicResolver,
} from "@/graphql/resolvers/topic";

const TopicResolvers: NonEmptyArray<Function> = [
  GetTopicByIdResolver,
  GetTopicsResolver,
  CreateTopicResolver,
  UpdateTopicResolver,
  DeleteTopicResolver,
];

import {
  GetUserByIdResolver,
  GetUsersResolver,
  CreateUserResolver,
  UpdateUserResolver,
  DeleteUserResolver,
} from "@/graphql/resolvers/user";

const UserResolvers: NonEmptyArray<Function> = [
  GetUserByIdResolver,
  GetUsersResolver,
  CreateUserResolver,
  UpdateUserResolver,
  DeleteUserResolver,
];

import {
  GetUserInterestByIdResolver,
  GetUserInterestsResolver,
  CreateUserInterestResolver,
  UpdateUserInterestResolver,
  DeleteUserInterestResolver,
} from "@/graphql/resolvers/userInterest";

const UserInterestResolvers: NonEmptyArray<Function> = [
  GetUserInterestByIdResolver,
  GetUserInterestsResolver,
  CreateUserInterestResolver,
  UpdateUserInterestResolver,
  DeleteUserInterestResolver,
];

import {
  GetVideoByIdResolver,
  GetVideosResolver,
  CreateVideoResolver,
  UpdateVideoResolver,
  DeleteVideoResolver,
} from "@/graphql/resolvers/video";

const VideoResolvers: NonEmptyArray<Function> = [
  GetVideoByIdResolver,
  GetVideosResolver,
  CreateVideoResolver,
  UpdateVideoResolver,
  DeleteVideoResolver,
];

import {
  GetVideoSectionByIdResolver,
  GetVideoSectionsResolver,
  CreateVideoSectionResolver,
  UpdateVideoSectionResolver,
  DeleteVideoSectionResolver,
} from "@/graphql/resolvers/videoSection";

const VideoSectionResolvers: NonEmptyArray<Function> = [
  GetVideoSectionByIdResolver,
  GetVideoSectionsResolver,
  CreateVideoSectionResolver,
  UpdateVideoSectionResolver,
  DeleteVideoSectionResolver,
];

*/

export const schema = await buildSchema({
  // resolvers,
  resolvers: [...UserInterestResolvers],
});

// Convert the schema to GraphQL Schema Definition Language (SDL) format and write it to a fil
const schemaFilePath = "generated/schema.graphql";
if (!existsSync(schemaFilePath)) {
  writeFileSync(schemaFilePath, printSchema(schema));
}
