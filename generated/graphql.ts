import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTimeISO: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

export type BlogContentCreateNestedOneWithoutBlogInput = {
  connect?: InputMaybe<BlogContentWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BlogContentCreateOrConnectWithoutBlogInput>;
  create?: InputMaybe<BlogContentCreateWithoutBlogInput>;
};

export type BlogContentCreateOrConnectWithoutBlogInput = {
  create: BlogContentCreateWithoutBlogInput;
  where: BlogContentWhereUniqueInput;
};

export type BlogContentCreateWithoutBlogInput = {
  advanced: Scalars['JSON']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  implementation: Scalars['JSON']['input'];
  intro: Scalars['JSON']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type BlogContentNullableRelationFilter = {
  is?: InputMaybe<BlogContentWhereInput>;
  isNot?: InputMaybe<BlogContentWhereInput>;
};

export type BlogContentUpdateOneWithoutBlogNestedInput = {
  connect?: InputMaybe<BlogContentWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BlogContentCreateOrConnectWithoutBlogInput>;
  create?: InputMaybe<BlogContentCreateWithoutBlogInput>;
  delete?: InputMaybe<BlogContentWhereInput>;
  disconnect?: InputMaybe<BlogContentWhereInput>;
  update?: InputMaybe<BlogContentUpdateToOneWithWhereWithoutBlogInput>;
  upsert?: InputMaybe<BlogContentUpsertWithoutBlogInput>;
};

export type BlogContentUpdateToOneWithWhereWithoutBlogInput = {
  data: BlogContentUpdateWithoutBlogInput;
  where?: InputMaybe<BlogContentWhereInput>;
};

export type BlogContentUpdateWithoutBlogInput = {
  advanced?: InputMaybe<Scalars['JSON']['input']>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  implementation?: InputMaybe<Scalars['JSON']['input']>;
  intro?: InputMaybe<Scalars['JSON']['input']>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BlogContentUpsertWithoutBlogInput = {
  create: BlogContentCreateWithoutBlogInput;
  update: BlogContentUpdateWithoutBlogInput;
  where?: InputMaybe<BlogContentWhereInput>;
};

export type BlogContentWhereInput = {
  AND?: InputMaybe<Array<BlogContentWhereInput>>;
  Blog?: InputMaybe<BlogRelationFilter>;
  NOT?: InputMaybe<Array<BlogContentWhereInput>>;
  OR?: InputMaybe<Array<BlogContentWhereInput>>;
  advanced?: InputMaybe<JsonFilter>;
  blogId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  implementation?: InputMaybe<JsonFilter>;
  intro?: InputMaybe<JsonFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type BlogContentWhereUniqueInput = {
  AND?: InputMaybe<Array<BlogContentWhereInput>>;
  Blog?: InputMaybe<BlogRelationFilter>;
  NOT?: InputMaybe<Array<BlogContentWhereInput>>;
  OR?: InputMaybe<Array<BlogContentWhereInput>>;
  advanced?: InputMaybe<JsonFilter>;
  blogId?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  implementation?: InputMaybe<JsonFilter>;
  intro?: InputMaybe<JsonFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type BlogCreateManyAuthorInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  readTimeInMinutes: Scalars['Int']['input'];
  skillLevel?: InputMaybe<SkillLevel>;
  slug: Scalars['String']['input'];
  title: Scalars['String']['input'];
  topicId?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  views?: InputMaybe<Scalars['Int']['input']>;
};

export type BlogCreateManyAuthorInputEnvelope = {
  data: Array<BlogCreateManyAuthorInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlogCreateManyTopicInput = {
  authorId?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  readTimeInMinutes: Scalars['Int']['input'];
  skillLevel?: InputMaybe<SkillLevel>;
  slug: Scalars['String']['input'];
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  views?: InputMaybe<Scalars['Int']['input']>;
};

export type BlogCreateManyTopicInputEnvelope = {
  data: Array<BlogCreateManyTopicInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlogCreateNestedManyWithoutAuthorInput = {
  connect?: InputMaybe<Array<BlogWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BlogCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<BlogCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<BlogCreateManyAuthorInputEnvelope>;
};

export type BlogCreateNestedManyWithoutTopicInput = {
  connect?: InputMaybe<Array<BlogWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BlogCreateOrConnectWithoutTopicInput>>;
  create?: InputMaybe<Array<BlogCreateWithoutTopicInput>>;
  createMany?: InputMaybe<BlogCreateManyTopicInputEnvelope>;
};

export type BlogCreateNestedOneWithoutTagsInput = {
  connect?: InputMaybe<BlogWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BlogCreateOrConnectWithoutTagsInput>;
  create?: InputMaybe<BlogCreateWithoutTagsInput>;
};

export type BlogCreateOrConnectWithoutAuthorInput = {
  create: BlogCreateWithoutAuthorInput;
  where: BlogWhereUniqueInput;
};

export type BlogCreateOrConnectWithoutTagsInput = {
  create: BlogCreateWithoutTagsInput;
  where: BlogWhereUniqueInput;
};

export type BlogCreateOrConnectWithoutTopicInput = {
  create: BlogCreateWithoutTopicInput;
  where: BlogWhereUniqueInput;
};

export type BlogCreateWithoutAuthorInput = {
  Tags?: InputMaybe<TagsOnBlogsCreateNestedManyWithoutBlogInput>;
  Topic?: InputMaybe<TopicCreateNestedOneWithoutBlogsInput>;
  Video?: InputMaybe<VideoCreateNestedOneWithoutBlogInput>;
  content?: InputMaybe<BlogContentCreateNestedOneWithoutBlogInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  description: Scalars['String']['input'];
  readTimeInMinutes: Scalars['Int']['input'];
  skillLevel?: InputMaybe<SkillLevel>;
  slug: Scalars['String']['input'];
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  views?: InputMaybe<Scalars['Int']['input']>;
};

export type BlogCreateWithoutTagsInput = {
  Author?: InputMaybe<UserCreateNestedOneWithoutBlogsInput>;
  Topic?: InputMaybe<TopicCreateNestedOneWithoutBlogsInput>;
  Video?: InputMaybe<VideoCreateNestedOneWithoutBlogInput>;
  content?: InputMaybe<BlogContentCreateNestedOneWithoutBlogInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  description: Scalars['String']['input'];
  readTimeInMinutes: Scalars['Int']['input'];
  skillLevel?: InputMaybe<SkillLevel>;
  slug: Scalars['String']['input'];
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  views?: InputMaybe<Scalars['Int']['input']>;
};

export type BlogCreateWithoutTopicInput = {
  Author?: InputMaybe<UserCreateNestedOneWithoutBlogsInput>;
  Tags?: InputMaybe<TagsOnBlogsCreateNestedManyWithoutBlogInput>;
  Video?: InputMaybe<VideoCreateNestedOneWithoutBlogInput>;
  content?: InputMaybe<BlogContentCreateNestedOneWithoutBlogInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  description: Scalars['String']['input'];
  readTimeInMinutes: Scalars['Int']['input'];
  skillLevel?: InputMaybe<SkillLevel>;
  slug: Scalars['String']['input'];
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  views?: InputMaybe<Scalars['Int']['input']>;
};

export type BlogListRelationFilter = {
  every?: InputMaybe<BlogWhereInput>;
  none?: InputMaybe<BlogWhereInput>;
  some?: InputMaybe<BlogWhereInput>;
};

export enum BlogPart {
  Advanced = 'ADVANCED',
  Implementation = 'IMPLEMENTATION',
  Intro = 'INTRO'
}

export type BlogRelationFilter = {
  is?: InputMaybe<BlogWhereInput>;
  isNot?: InputMaybe<BlogWhereInput>;
};

export type BlogScalarWhereInput = {
  AND?: InputMaybe<Array<BlogScalarWhereInput>>;
  NOT?: InputMaybe<Array<BlogScalarWhereInput>>;
  OR?: InputMaybe<Array<BlogScalarWhereInput>>;
  authorId?: InputMaybe<IntNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  readTimeInMinutes?: InputMaybe<IntFilter>;
  skillLevel?: InputMaybe<EnumSkillLevelFilter>;
  slug?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  topicId?: InputMaybe<IntNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  views?: InputMaybe<IntFilter>;
};

export type BlogTopicIdTitleCompoundUniqueInput = {
  title: Scalars['String']['input'];
  topicId: Scalars['Int']['input'];
};

export type BlogUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  readTimeInMinutes?: InputMaybe<IntFieldUpdateOperationsInput>;
  skillLevel?: InputMaybe<EnumSkillLevelFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  views?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type BlogUpdateManyWithWhereWithoutAuthorInput = {
  data: BlogUpdateManyMutationInput;
  where: BlogScalarWhereInput;
};

export type BlogUpdateManyWithWhereWithoutTopicInput = {
  data: BlogUpdateManyMutationInput;
  where: BlogScalarWhereInput;
};

export type BlogUpdateManyWithoutAuthorNestedInput = {
  connect?: InputMaybe<Array<BlogWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BlogCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<BlogCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<BlogCreateManyAuthorInputEnvelope>;
  delete?: InputMaybe<Array<BlogWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<BlogScalarWhereInput>>;
  disconnect?: InputMaybe<Array<BlogWhereUniqueInput>>;
  set?: InputMaybe<Array<BlogWhereUniqueInput>>;
  update?: InputMaybe<Array<BlogUpdateWithWhereUniqueWithoutAuthorInput>>;
  updateMany?: InputMaybe<Array<BlogUpdateManyWithWhereWithoutAuthorInput>>;
  upsert?: InputMaybe<Array<BlogUpsertWithWhereUniqueWithoutAuthorInput>>;
};

export type BlogUpdateManyWithoutTopicNestedInput = {
  connect?: InputMaybe<Array<BlogWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BlogCreateOrConnectWithoutTopicInput>>;
  create?: InputMaybe<Array<BlogCreateWithoutTopicInput>>;
  createMany?: InputMaybe<BlogCreateManyTopicInputEnvelope>;
  delete?: InputMaybe<Array<BlogWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<BlogScalarWhereInput>>;
  disconnect?: InputMaybe<Array<BlogWhereUniqueInput>>;
  set?: InputMaybe<Array<BlogWhereUniqueInput>>;
  update?: InputMaybe<Array<BlogUpdateWithWhereUniqueWithoutTopicInput>>;
  updateMany?: InputMaybe<Array<BlogUpdateManyWithWhereWithoutTopicInput>>;
  upsert?: InputMaybe<Array<BlogUpsertWithWhereUniqueWithoutTopicInput>>;
};

export type BlogUpdateOneRequiredWithoutTagsNestedInput = {
  connect?: InputMaybe<BlogWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BlogCreateOrConnectWithoutTagsInput>;
  create?: InputMaybe<BlogCreateWithoutTagsInput>;
  update?: InputMaybe<BlogUpdateToOneWithWhereWithoutTagsInput>;
  upsert?: InputMaybe<BlogUpsertWithoutTagsInput>;
};

export type BlogUpdateToOneWithWhereWithoutTagsInput = {
  data: BlogUpdateWithoutTagsInput;
  where?: InputMaybe<BlogWhereInput>;
};

export type BlogUpdateWithWhereUniqueWithoutAuthorInput = {
  data: BlogUpdateWithoutAuthorInput;
  where: BlogWhereUniqueInput;
};

export type BlogUpdateWithWhereUniqueWithoutTopicInput = {
  data: BlogUpdateWithoutTopicInput;
  where: BlogWhereUniqueInput;
};

export type BlogUpdateWithoutAuthorInput = {
  Tags?: InputMaybe<TagsOnBlogsUpdateManyWithoutBlogNestedInput>;
  Topic?: InputMaybe<TopicUpdateOneWithoutBlogsNestedInput>;
  Video?: InputMaybe<VideoUpdateOneWithoutBlogNestedInput>;
  content?: InputMaybe<BlogContentUpdateOneWithoutBlogNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  readTimeInMinutes?: InputMaybe<IntFieldUpdateOperationsInput>;
  skillLevel?: InputMaybe<EnumSkillLevelFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  views?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type BlogUpdateWithoutTagsInput = {
  Author?: InputMaybe<UserUpdateOneWithoutBlogsNestedInput>;
  Topic?: InputMaybe<TopicUpdateOneWithoutBlogsNestedInput>;
  Video?: InputMaybe<VideoUpdateOneWithoutBlogNestedInput>;
  content?: InputMaybe<BlogContentUpdateOneWithoutBlogNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  readTimeInMinutes?: InputMaybe<IntFieldUpdateOperationsInput>;
  skillLevel?: InputMaybe<EnumSkillLevelFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  views?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type BlogUpdateWithoutTopicInput = {
  Author?: InputMaybe<UserUpdateOneWithoutBlogsNestedInput>;
  Tags?: InputMaybe<TagsOnBlogsUpdateManyWithoutBlogNestedInput>;
  Video?: InputMaybe<VideoUpdateOneWithoutBlogNestedInput>;
  content?: InputMaybe<BlogContentUpdateOneWithoutBlogNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  readTimeInMinutes?: InputMaybe<IntFieldUpdateOperationsInput>;
  skillLevel?: InputMaybe<EnumSkillLevelFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  views?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type BlogUpsertWithWhereUniqueWithoutAuthorInput = {
  create: BlogCreateWithoutAuthorInput;
  update: BlogUpdateWithoutAuthorInput;
  where: BlogWhereUniqueInput;
};

export type BlogUpsertWithWhereUniqueWithoutTopicInput = {
  create: BlogCreateWithoutTopicInput;
  update: BlogUpdateWithoutTopicInput;
  where: BlogWhereUniqueInput;
};

export type BlogUpsertWithoutTagsInput = {
  create: BlogCreateWithoutTagsInput;
  update: BlogUpdateWithoutTagsInput;
  where?: InputMaybe<BlogWhereInput>;
};

export type BlogWhereInput = {
  AND?: InputMaybe<Array<BlogWhereInput>>;
  Author?: InputMaybe<UserNullableRelationFilter>;
  NOT?: InputMaybe<Array<BlogWhereInput>>;
  OR?: InputMaybe<Array<BlogWhereInput>>;
  Tags?: InputMaybe<TagsOnBlogsListRelationFilter>;
  Topic?: InputMaybe<TopicNullableRelationFilter>;
  Video?: InputMaybe<VideoNullableRelationFilter>;
  authorId?: InputMaybe<IntNullableFilter>;
  content?: InputMaybe<BlogContentNullableRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  readTimeInMinutes?: InputMaybe<IntFilter>;
  skillLevel?: InputMaybe<EnumSkillLevelFilter>;
  slug?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  topicId?: InputMaybe<IntNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  views?: InputMaybe<IntFilter>;
};

export type BlogWhereUniqueInput = {
  AND?: InputMaybe<Array<BlogWhereInput>>;
  Author?: InputMaybe<UserNullableRelationFilter>;
  NOT?: InputMaybe<Array<BlogWhereInput>>;
  OR?: InputMaybe<Array<BlogWhereInput>>;
  Tags?: InputMaybe<TagsOnBlogsListRelationFilter>;
  Topic?: InputMaybe<TopicNullableRelationFilter>;
  Video?: InputMaybe<VideoNullableRelationFilter>;
  authorId?: InputMaybe<IntNullableFilter>;
  content?: InputMaybe<BlogContentNullableRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  readTimeInMinutes?: InputMaybe<IntFilter>;
  skillLevel?: InputMaybe<EnumSkillLevelFilter>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<StringFilter>;
  topicId?: InputMaybe<IntNullableFilter>;
  topicId_title?: InputMaybe<BlogTopicIdTitleCompoundUniqueInput>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  views?: InputMaybe<IntFilter>;
};

export type CreateUserInterestResponse = {
  __typename?: 'CreateUserInterestResponse';
  data?: Maybe<UserInterest>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type DeleteUserInterestResponse = {
  __typename?: 'DeleteUserInterestResponse';
  data?: Maybe<Scalars['Boolean']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type EnumBlogPartFieldUpdateOperationsInput = {
  set?: InputMaybe<BlogPart>;
};

export type EnumBlogPartFilter = {
  equals?: InputMaybe<BlogPart>;
  in?: InputMaybe<Array<BlogPart>>;
  not?: InputMaybe<NestedEnumBlogPartFilter>;
  notIn?: InputMaybe<Array<BlogPart>>;
};

export type EnumInterestTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<InterestType>;
};

export type EnumInterestTypeFilter = {
  equals?: InputMaybe<InterestType>;
  in?: InputMaybe<Array<InterestType>>;
  not?: InputMaybe<NestedEnumInterestTypeFilter>;
  notIn?: InputMaybe<Array<InterestType>>;
};

export type EnumSkillLevelFieldUpdateOperationsInput = {
  set?: InputMaybe<SkillLevel>;
};

export type EnumSkillLevelFilter = {
  equals?: InputMaybe<SkillLevel>;
  in?: InputMaybe<Array<SkillLevel>>;
  not?: InputMaybe<NestedEnumSkillLevelFilter>;
  notIn?: InputMaybe<Array<SkillLevel>>;
};

export type GetUserInterestByIdResponse = {
  __typename?: 'GetUserInterestByIdResponse';
  data?: Maybe<UserInterest>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type GetUserInterestsResponse = {
  __typename?: 'GetUserInterestsResponse';
  data?: Maybe<Array<UserInterest>>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type GoalCreateNestedOneWithoutTechnologiesInput = {
  connect?: InputMaybe<GoalWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GoalCreateOrConnectWithoutTechnologiesInput>;
  create?: InputMaybe<GoalCreateWithoutTechnologiesInput>;
};

export type GoalCreateOrConnectWithoutTechnologiesInput = {
  create: GoalCreateWithoutTechnologiesInput;
  where: GoalWhereUniqueInput;
};

export type GoalCreateWithoutTechnologiesInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type GoalNullableRelationFilter = {
  is?: InputMaybe<GoalWhereInput>;
  isNot?: InputMaybe<GoalWhereInput>;
};

export type GoalUpdateOneWithoutTechnologiesNestedInput = {
  connect?: InputMaybe<GoalWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GoalCreateOrConnectWithoutTechnologiesInput>;
  create?: InputMaybe<GoalCreateWithoutTechnologiesInput>;
  delete?: InputMaybe<GoalWhereInput>;
  disconnect?: InputMaybe<GoalWhereInput>;
  update?: InputMaybe<GoalUpdateToOneWithWhereWithoutTechnologiesInput>;
  upsert?: InputMaybe<GoalUpsertWithoutTechnologiesInput>;
};

export type GoalUpdateToOneWithWhereWithoutTechnologiesInput = {
  data: GoalUpdateWithoutTechnologiesInput;
  where?: InputMaybe<GoalWhereInput>;
};

export type GoalUpdateWithoutTechnologiesInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type GoalUpsertWithoutTechnologiesInput = {
  create: GoalCreateWithoutTechnologiesInput;
  update: GoalUpdateWithoutTechnologiesInput;
  where?: InputMaybe<GoalWhereInput>;
};

export type GoalWhereInput = {
  AND?: InputMaybe<Array<GoalWhereInput>>;
  NOT?: InputMaybe<Array<GoalWhereInput>>;
  OR?: InputMaybe<Array<GoalWhereInput>>;
  Technologies?: InputMaybe<TechnologyListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type GoalWhereUniqueInput = {
  AND?: InputMaybe<Array<GoalWhereInput>>;
  NOT?: InputMaybe<Array<GoalWhereInput>>;
  OR?: InputMaybe<Array<GoalWhereInput>>;
  Technologies?: InputMaybe<TechnologyListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  divide?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  multiply?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export enum InterestType {
  Technology = 'TECHNOLOGY',
  Topic = 'TOPIC'
}

export type JsonFilter = {
  array_contains?: InputMaybe<Scalars['JSON']['input']>;
  array_ends_with?: InputMaybe<Scalars['JSON']['input']>;
  array_starts_with?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<Scalars['JSON']['input']>;
  path?: InputMaybe<Array<Scalars['String']['input']>>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUserInterest: CreateUserInterestResponse;
  deleteUserInterest: DeleteUserInterestResponse;
  updateUserInterest: UpdateUserInterestResponse;
};


export type MutationCreateUserInterestArgs = {
  createUserInterestInput: UserInterestCreateInput;
};


export type MutationDeleteUserInterestArgs = {
  where: UserInterestWhereUniqueInput;
};


export type MutationUpdateUserInterestArgs = {
  updateUserInterestInput: UserInterestUpdateInput;
  where: UserInterestWhereUniqueInput;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type NestedEnumBlogPartFilter = {
  equals?: InputMaybe<BlogPart>;
  in?: InputMaybe<Array<BlogPart>>;
  not?: InputMaybe<NestedEnumBlogPartFilter>;
  notIn?: InputMaybe<Array<BlogPart>>;
};

export type NestedEnumInterestTypeFilter = {
  equals?: InputMaybe<InterestType>;
  in?: InputMaybe<Array<InterestType>>;
  not?: InputMaybe<NestedEnumInterestTypeFilter>;
  notIn?: InputMaybe<Array<InterestType>>;
};

export type NestedEnumSkillLevelFilter = {
  equals?: InputMaybe<SkillLevel>;
  in?: InputMaybe<Array<SkillLevel>>;
  not?: InputMaybe<NestedEnumSkillLevelFilter>;
  notIn?: InputMaybe<Array<SkillLevel>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  getUserInterestById: GetUserInterestByIdResponse;
  getUserInterests: GetUserInterestsResponse;
};


export type QueryGetUserInterestByIdArgs = {
  where: UserInterestWhereUniqueInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum SkillLevel {
  Advanced = 'ADVANCED',
  Basic = 'BASIC',
  Intermediate = 'INTERMEDIATE'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type TagCreateManyTopicInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type TagCreateManyTopicInputEnvelope = {
  data: Array<TagCreateManyTopicInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TagCreateNestedManyWithoutTopicInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TagCreateOrConnectWithoutTopicInput>>;
  create?: InputMaybe<Array<TagCreateWithoutTopicInput>>;
  createMany?: InputMaybe<TagCreateManyTopicInputEnvelope>;
};

export type TagCreateNestedOneWithoutBlogsInput = {
  connect?: InputMaybe<TagWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TagCreateOrConnectWithoutBlogsInput>;
  create?: InputMaybe<TagCreateWithoutBlogsInput>;
};

export type TagCreateOrConnectWithoutBlogsInput = {
  create: TagCreateWithoutBlogsInput;
  where: TagWhereUniqueInput;
};

export type TagCreateOrConnectWithoutTopicInput = {
  create: TagCreateWithoutTopicInput;
  where: TagWhereUniqueInput;
};

export type TagCreateWithoutBlogsInput = {
  Topic?: InputMaybe<TopicCreateNestedOneWithoutTagsInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type TagCreateWithoutTopicInput = {
  Blogs?: InputMaybe<TagsOnBlogsCreateNestedManyWithoutTagInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type TagListRelationFilter = {
  every?: InputMaybe<TagWhereInput>;
  none?: InputMaybe<TagWhereInput>;
  some?: InputMaybe<TagWhereInput>;
};

export type TagRelationFilter = {
  is?: InputMaybe<TagWhereInput>;
  isNot?: InputMaybe<TagWhereInput>;
};

export type TagScalarWhereInput = {
  AND?: InputMaybe<Array<TagScalarWhereInput>>;
  NOT?: InputMaybe<Array<TagScalarWhereInput>>;
  OR?: InputMaybe<Array<TagScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  title?: InputMaybe<StringFilter>;
  topicId?: InputMaybe<IntNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TagUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TagUpdateManyWithWhereWithoutTopicInput = {
  data: TagUpdateManyMutationInput;
  where: TagScalarWhereInput;
};

export type TagUpdateManyWithoutTopicNestedInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TagCreateOrConnectWithoutTopicInput>>;
  create?: InputMaybe<Array<TagCreateWithoutTopicInput>>;
  createMany?: InputMaybe<TagCreateManyTopicInputEnvelope>;
  delete?: InputMaybe<Array<TagWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TagScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TagWhereUniqueInput>>;
  set?: InputMaybe<Array<TagWhereUniqueInput>>;
  update?: InputMaybe<Array<TagUpdateWithWhereUniqueWithoutTopicInput>>;
  updateMany?: InputMaybe<Array<TagUpdateManyWithWhereWithoutTopicInput>>;
  upsert?: InputMaybe<Array<TagUpsertWithWhereUniqueWithoutTopicInput>>;
};

export type TagUpdateOneRequiredWithoutBlogsNestedInput = {
  connect?: InputMaybe<TagWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TagCreateOrConnectWithoutBlogsInput>;
  create?: InputMaybe<TagCreateWithoutBlogsInput>;
  update?: InputMaybe<TagUpdateToOneWithWhereWithoutBlogsInput>;
  upsert?: InputMaybe<TagUpsertWithoutBlogsInput>;
};

export type TagUpdateToOneWithWhereWithoutBlogsInput = {
  data: TagUpdateWithoutBlogsInput;
  where?: InputMaybe<TagWhereInput>;
};

export type TagUpdateWithWhereUniqueWithoutTopicInput = {
  data: TagUpdateWithoutTopicInput;
  where: TagWhereUniqueInput;
};

export type TagUpdateWithoutBlogsInput = {
  Topic?: InputMaybe<TopicUpdateOneWithoutTagsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TagUpdateWithoutTopicInput = {
  Blogs?: InputMaybe<TagsOnBlogsUpdateManyWithoutTagNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TagUpsertWithWhereUniqueWithoutTopicInput = {
  create: TagCreateWithoutTopicInput;
  update: TagUpdateWithoutTopicInput;
  where: TagWhereUniqueInput;
};

export type TagUpsertWithoutBlogsInput = {
  create: TagCreateWithoutBlogsInput;
  update: TagUpdateWithoutBlogsInput;
  where?: InputMaybe<TagWhereInput>;
};

export type TagWhereInput = {
  AND?: InputMaybe<Array<TagWhereInput>>;
  Blogs?: InputMaybe<TagsOnBlogsListRelationFilter>;
  NOT?: InputMaybe<Array<TagWhereInput>>;
  OR?: InputMaybe<Array<TagWhereInput>>;
  Topic?: InputMaybe<TopicNullableRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  title?: InputMaybe<StringFilter>;
  topicId?: InputMaybe<IntNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TagWhereUniqueInput = {
  AND?: InputMaybe<Array<TagWhereInput>>;
  Blogs?: InputMaybe<TagsOnBlogsListRelationFilter>;
  NOT?: InputMaybe<Array<TagWhereInput>>;
  OR?: InputMaybe<Array<TagWhereInput>>;
  Topic?: InputMaybe<TopicNullableRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<StringFilter>;
  topicId?: InputMaybe<IntNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TagsOnBlogsBlogIdTagIdCompoundUniqueInput = {
  blogId: Scalars['Int']['input'];
  tagId: Scalars['Int']['input'];
};

export type TagsOnBlogsCreateManyBlogInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  tagId: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type TagsOnBlogsCreateManyBlogInputEnvelope = {
  data: Array<TagsOnBlogsCreateManyBlogInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TagsOnBlogsCreateManyTagInput = {
  blogId: Scalars['Int']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type TagsOnBlogsCreateManyTagInputEnvelope = {
  data: Array<TagsOnBlogsCreateManyTagInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TagsOnBlogsCreateNestedManyWithoutBlogInput = {
  connect?: InputMaybe<Array<TagsOnBlogsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TagsOnBlogsCreateOrConnectWithoutBlogInput>>;
  create?: InputMaybe<Array<TagsOnBlogsCreateWithoutBlogInput>>;
  createMany?: InputMaybe<TagsOnBlogsCreateManyBlogInputEnvelope>;
};

export type TagsOnBlogsCreateNestedManyWithoutTagInput = {
  connect?: InputMaybe<Array<TagsOnBlogsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TagsOnBlogsCreateOrConnectWithoutTagInput>>;
  create?: InputMaybe<Array<TagsOnBlogsCreateWithoutTagInput>>;
  createMany?: InputMaybe<TagsOnBlogsCreateManyTagInputEnvelope>;
};

export type TagsOnBlogsCreateOrConnectWithoutBlogInput = {
  create: TagsOnBlogsCreateWithoutBlogInput;
  where: TagsOnBlogsWhereUniqueInput;
};

export type TagsOnBlogsCreateOrConnectWithoutTagInput = {
  create: TagsOnBlogsCreateWithoutTagInput;
  where: TagsOnBlogsWhereUniqueInput;
};

export type TagsOnBlogsCreateWithoutBlogInput = {
  Tag: TagCreateNestedOneWithoutBlogsInput;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type TagsOnBlogsCreateWithoutTagInput = {
  Blog: BlogCreateNestedOneWithoutTagsInput;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type TagsOnBlogsListRelationFilter = {
  every?: InputMaybe<TagsOnBlogsWhereInput>;
  none?: InputMaybe<TagsOnBlogsWhereInput>;
  some?: InputMaybe<TagsOnBlogsWhereInput>;
};

export type TagsOnBlogsScalarWhereInput = {
  AND?: InputMaybe<Array<TagsOnBlogsScalarWhereInput>>;
  NOT?: InputMaybe<Array<TagsOnBlogsScalarWhereInput>>;
  OR?: InputMaybe<Array<TagsOnBlogsScalarWhereInput>>;
  blogId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  tagId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TagsOnBlogsUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TagsOnBlogsUpdateManyWithWhereWithoutBlogInput = {
  data: TagsOnBlogsUpdateManyMutationInput;
  where: TagsOnBlogsScalarWhereInput;
};

export type TagsOnBlogsUpdateManyWithWhereWithoutTagInput = {
  data: TagsOnBlogsUpdateManyMutationInput;
  where: TagsOnBlogsScalarWhereInput;
};

export type TagsOnBlogsUpdateManyWithoutBlogNestedInput = {
  connect?: InputMaybe<Array<TagsOnBlogsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TagsOnBlogsCreateOrConnectWithoutBlogInput>>;
  create?: InputMaybe<Array<TagsOnBlogsCreateWithoutBlogInput>>;
  createMany?: InputMaybe<TagsOnBlogsCreateManyBlogInputEnvelope>;
  delete?: InputMaybe<Array<TagsOnBlogsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TagsOnBlogsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TagsOnBlogsWhereUniqueInput>>;
  set?: InputMaybe<Array<TagsOnBlogsWhereUniqueInput>>;
  update?: InputMaybe<Array<TagsOnBlogsUpdateWithWhereUniqueWithoutBlogInput>>;
  updateMany?: InputMaybe<Array<TagsOnBlogsUpdateManyWithWhereWithoutBlogInput>>;
  upsert?: InputMaybe<Array<TagsOnBlogsUpsertWithWhereUniqueWithoutBlogInput>>;
};

export type TagsOnBlogsUpdateManyWithoutTagNestedInput = {
  connect?: InputMaybe<Array<TagsOnBlogsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TagsOnBlogsCreateOrConnectWithoutTagInput>>;
  create?: InputMaybe<Array<TagsOnBlogsCreateWithoutTagInput>>;
  createMany?: InputMaybe<TagsOnBlogsCreateManyTagInputEnvelope>;
  delete?: InputMaybe<Array<TagsOnBlogsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TagsOnBlogsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TagsOnBlogsWhereUniqueInput>>;
  set?: InputMaybe<Array<TagsOnBlogsWhereUniqueInput>>;
  update?: InputMaybe<Array<TagsOnBlogsUpdateWithWhereUniqueWithoutTagInput>>;
  updateMany?: InputMaybe<Array<TagsOnBlogsUpdateManyWithWhereWithoutTagInput>>;
  upsert?: InputMaybe<Array<TagsOnBlogsUpsertWithWhereUniqueWithoutTagInput>>;
};

export type TagsOnBlogsUpdateWithWhereUniqueWithoutBlogInput = {
  data: TagsOnBlogsUpdateWithoutBlogInput;
  where: TagsOnBlogsWhereUniqueInput;
};

export type TagsOnBlogsUpdateWithWhereUniqueWithoutTagInput = {
  data: TagsOnBlogsUpdateWithoutTagInput;
  where: TagsOnBlogsWhereUniqueInput;
};

export type TagsOnBlogsUpdateWithoutBlogInput = {
  Tag?: InputMaybe<TagUpdateOneRequiredWithoutBlogsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TagsOnBlogsUpdateWithoutTagInput = {
  Blog?: InputMaybe<BlogUpdateOneRequiredWithoutTagsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TagsOnBlogsUpsertWithWhereUniqueWithoutBlogInput = {
  create: TagsOnBlogsCreateWithoutBlogInput;
  update: TagsOnBlogsUpdateWithoutBlogInput;
  where: TagsOnBlogsWhereUniqueInput;
};

export type TagsOnBlogsUpsertWithWhereUniqueWithoutTagInput = {
  create: TagsOnBlogsCreateWithoutTagInput;
  update: TagsOnBlogsUpdateWithoutTagInput;
  where: TagsOnBlogsWhereUniqueInput;
};

export type TagsOnBlogsWhereInput = {
  AND?: InputMaybe<Array<TagsOnBlogsWhereInput>>;
  Blog?: InputMaybe<BlogRelationFilter>;
  NOT?: InputMaybe<Array<TagsOnBlogsWhereInput>>;
  OR?: InputMaybe<Array<TagsOnBlogsWhereInput>>;
  Tag?: InputMaybe<TagRelationFilter>;
  blogId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  tagId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TagsOnBlogsWhereUniqueInput = {
  AND?: InputMaybe<Array<TagsOnBlogsWhereInput>>;
  Blog?: InputMaybe<BlogRelationFilter>;
  NOT?: InputMaybe<Array<TagsOnBlogsWhereInput>>;
  OR?: InputMaybe<Array<TagsOnBlogsWhereInput>>;
  Tag?: InputMaybe<TagRelationFilter>;
  blogId?: InputMaybe<IntFilter>;
  blogId_tagId?: InputMaybe<TagsOnBlogsBlogIdTagIdCompoundUniqueInput>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  tagId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TechnologyCreateNestedOneWithoutTopicsInput = {
  connect?: InputMaybe<TechnologyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TechnologyCreateOrConnectWithoutTopicsInput>;
  create?: InputMaybe<TechnologyCreateWithoutTopicsInput>;
};

export type TechnologyCreateNestedOneWithoutUserInterestsInput = {
  connect?: InputMaybe<TechnologyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TechnologyCreateOrConnectWithoutUserInterestsInput>;
  create?: InputMaybe<TechnologyCreateWithoutUserInterestsInput>;
};

export type TechnologyCreateOrConnectWithoutTopicsInput = {
  create: TechnologyCreateWithoutTopicsInput;
  where: TechnologyWhereUniqueInput;
};

export type TechnologyCreateOrConnectWithoutUserInterestsInput = {
  create: TechnologyCreateWithoutUserInterestsInput;
  where: TechnologyWhereUniqueInput;
};

export type TechnologyCreateWithoutTopicsInput = {
  Goal?: InputMaybe<GoalCreateNestedOneWithoutTechnologiesInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userInterests?: InputMaybe<UserInterestCreateNestedManyWithoutTechnologyInput>;
};

export type TechnologyCreateWithoutUserInterestsInput = {
  Goal?: InputMaybe<GoalCreateNestedOneWithoutTechnologiesInput>;
  Topics?: InputMaybe<TopicCreateNestedManyWithoutTechnologyInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type TechnologyListRelationFilter = {
  every?: InputMaybe<TechnologyWhereInput>;
  none?: InputMaybe<TechnologyWhereInput>;
  some?: InputMaybe<TechnologyWhereInput>;
};

export type TechnologyNullableRelationFilter = {
  is?: InputMaybe<TechnologyWhereInput>;
  isNot?: InputMaybe<TechnologyWhereInput>;
};

export type TechnologyUpdateOneWithoutTopicsNestedInput = {
  connect?: InputMaybe<TechnologyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TechnologyCreateOrConnectWithoutTopicsInput>;
  create?: InputMaybe<TechnologyCreateWithoutTopicsInput>;
  delete?: InputMaybe<TechnologyWhereInput>;
  disconnect?: InputMaybe<TechnologyWhereInput>;
  update?: InputMaybe<TechnologyUpdateToOneWithWhereWithoutTopicsInput>;
  upsert?: InputMaybe<TechnologyUpsertWithoutTopicsInput>;
};

export type TechnologyUpdateOneWithoutUserInterestsNestedInput = {
  connect?: InputMaybe<TechnologyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TechnologyCreateOrConnectWithoutUserInterestsInput>;
  create?: InputMaybe<TechnologyCreateWithoutUserInterestsInput>;
  delete?: InputMaybe<TechnologyWhereInput>;
  disconnect?: InputMaybe<TechnologyWhereInput>;
  update?: InputMaybe<TechnologyUpdateToOneWithWhereWithoutUserInterestsInput>;
  upsert?: InputMaybe<TechnologyUpsertWithoutUserInterestsInput>;
};

export type TechnologyUpdateToOneWithWhereWithoutTopicsInput = {
  data: TechnologyUpdateWithoutTopicsInput;
  where?: InputMaybe<TechnologyWhereInput>;
};

export type TechnologyUpdateToOneWithWhereWithoutUserInterestsInput = {
  data: TechnologyUpdateWithoutUserInterestsInput;
  where?: InputMaybe<TechnologyWhereInput>;
};

export type TechnologyUpdateWithoutTopicsInput = {
  Goal?: InputMaybe<GoalUpdateOneWithoutTechnologiesNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userInterests?: InputMaybe<UserInterestUpdateManyWithoutTechnologyNestedInput>;
};

export type TechnologyUpdateWithoutUserInterestsInput = {
  Goal?: InputMaybe<GoalUpdateOneWithoutTechnologiesNestedInput>;
  Topics?: InputMaybe<TopicUpdateManyWithoutTechnologyNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TechnologyUpsertWithoutTopicsInput = {
  create: TechnologyCreateWithoutTopicsInput;
  update: TechnologyUpdateWithoutTopicsInput;
  where?: InputMaybe<TechnologyWhereInput>;
};

export type TechnologyUpsertWithoutUserInterestsInput = {
  create: TechnologyCreateWithoutUserInterestsInput;
  update: TechnologyUpdateWithoutUserInterestsInput;
  where?: InputMaybe<TechnologyWhereInput>;
};

export type TechnologyWhereInput = {
  AND?: InputMaybe<Array<TechnologyWhereInput>>;
  Goal?: InputMaybe<GoalNullableRelationFilter>;
  NOT?: InputMaybe<Array<TechnologyWhereInput>>;
  OR?: InputMaybe<Array<TechnologyWhereInput>>;
  Topics?: InputMaybe<TopicListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  goalId?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IntFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userInterests?: InputMaybe<UserInterestListRelationFilter>;
};

export type TechnologyWhereUniqueInput = {
  AND?: InputMaybe<Array<TechnologyWhereInput>>;
  Goal?: InputMaybe<GoalNullableRelationFilter>;
  NOT?: InputMaybe<Array<TechnologyWhereInput>>;
  OR?: InputMaybe<Array<TechnologyWhereInput>>;
  Topics?: InputMaybe<TopicListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  goalId?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userInterests?: InputMaybe<UserInterestListRelationFilter>;
};

export type TopicCreateManyTechnologyInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type TopicCreateManyTechnologyInputEnvelope = {
  data: Array<TopicCreateManyTechnologyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TopicCreateNestedManyWithoutTechnologyInput = {
  connect?: InputMaybe<Array<TopicWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TopicCreateOrConnectWithoutTechnologyInput>>;
  create?: InputMaybe<Array<TopicCreateWithoutTechnologyInput>>;
  createMany?: InputMaybe<TopicCreateManyTechnologyInputEnvelope>;
};

export type TopicCreateNestedOneWithoutBlogsInput = {
  connect?: InputMaybe<TopicWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TopicCreateOrConnectWithoutBlogsInput>;
  create?: InputMaybe<TopicCreateWithoutBlogsInput>;
};

export type TopicCreateNestedOneWithoutTagsInput = {
  connect?: InputMaybe<TopicWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TopicCreateOrConnectWithoutTagsInput>;
  create?: InputMaybe<TopicCreateWithoutTagsInput>;
};

export type TopicCreateNestedOneWithoutUserInterestsInput = {
  connect?: InputMaybe<TopicWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TopicCreateOrConnectWithoutUserInterestsInput>;
  create?: InputMaybe<TopicCreateWithoutUserInterestsInput>;
};

export type TopicCreateOrConnectWithoutBlogsInput = {
  create: TopicCreateWithoutBlogsInput;
  where: TopicWhereUniqueInput;
};

export type TopicCreateOrConnectWithoutTagsInput = {
  create: TopicCreateWithoutTagsInput;
  where: TopicWhereUniqueInput;
};

export type TopicCreateOrConnectWithoutTechnologyInput = {
  create: TopicCreateWithoutTechnologyInput;
  where: TopicWhereUniqueInput;
};

export type TopicCreateOrConnectWithoutUserInterestsInput = {
  create: TopicCreateWithoutUserInterestsInput;
  where: TopicWhereUniqueInput;
};

export type TopicCreateWithoutBlogsInput = {
  Technology?: InputMaybe<TechnologyCreateNestedOneWithoutTopicsInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  tags?: InputMaybe<TagCreateNestedManyWithoutTopicInput>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userInterests?: InputMaybe<UserInterestCreateNestedManyWithoutTopicInput>;
};

export type TopicCreateWithoutTagsInput = {
  Blogs?: InputMaybe<BlogCreateNestedManyWithoutTopicInput>;
  Technology?: InputMaybe<TechnologyCreateNestedOneWithoutTopicsInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userInterests?: InputMaybe<UserInterestCreateNestedManyWithoutTopicInput>;
};

export type TopicCreateWithoutTechnologyInput = {
  Blogs?: InputMaybe<BlogCreateNestedManyWithoutTopicInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  tags?: InputMaybe<TagCreateNestedManyWithoutTopicInput>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userInterests?: InputMaybe<UserInterestCreateNestedManyWithoutTopicInput>;
};

export type TopicCreateWithoutUserInterestsInput = {
  Blogs?: InputMaybe<BlogCreateNestedManyWithoutTopicInput>;
  Technology?: InputMaybe<TechnologyCreateNestedOneWithoutTopicsInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  tags?: InputMaybe<TagCreateNestedManyWithoutTopicInput>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type TopicListRelationFilter = {
  every?: InputMaybe<TopicWhereInput>;
  none?: InputMaybe<TopicWhereInput>;
  some?: InputMaybe<TopicWhereInput>;
};

export type TopicNullableRelationFilter = {
  is?: InputMaybe<TopicWhereInput>;
  isNot?: InputMaybe<TopicWhereInput>;
};

export type TopicScalarWhereInput = {
  AND?: InputMaybe<Array<TopicScalarWhereInput>>;
  NOT?: InputMaybe<Array<TopicScalarWhereInput>>;
  OR?: InputMaybe<Array<TopicScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  technologyId?: InputMaybe<IntNullableFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TopicUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TopicUpdateManyWithWhereWithoutTechnologyInput = {
  data: TopicUpdateManyMutationInput;
  where: TopicScalarWhereInput;
};

export type TopicUpdateManyWithoutTechnologyNestedInput = {
  connect?: InputMaybe<Array<TopicWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TopicCreateOrConnectWithoutTechnologyInput>>;
  create?: InputMaybe<Array<TopicCreateWithoutTechnologyInput>>;
  createMany?: InputMaybe<TopicCreateManyTechnologyInputEnvelope>;
  delete?: InputMaybe<Array<TopicWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TopicScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TopicWhereUniqueInput>>;
  set?: InputMaybe<Array<TopicWhereUniqueInput>>;
  update?: InputMaybe<Array<TopicUpdateWithWhereUniqueWithoutTechnologyInput>>;
  updateMany?: InputMaybe<Array<TopicUpdateManyWithWhereWithoutTechnologyInput>>;
  upsert?: InputMaybe<Array<TopicUpsertWithWhereUniqueWithoutTechnologyInput>>;
};

export type TopicUpdateOneWithoutBlogsNestedInput = {
  connect?: InputMaybe<TopicWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TopicCreateOrConnectWithoutBlogsInput>;
  create?: InputMaybe<TopicCreateWithoutBlogsInput>;
  delete?: InputMaybe<TopicWhereInput>;
  disconnect?: InputMaybe<TopicWhereInput>;
  update?: InputMaybe<TopicUpdateToOneWithWhereWithoutBlogsInput>;
  upsert?: InputMaybe<TopicUpsertWithoutBlogsInput>;
};

export type TopicUpdateOneWithoutTagsNestedInput = {
  connect?: InputMaybe<TopicWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TopicCreateOrConnectWithoutTagsInput>;
  create?: InputMaybe<TopicCreateWithoutTagsInput>;
  delete?: InputMaybe<TopicWhereInput>;
  disconnect?: InputMaybe<TopicWhereInput>;
  update?: InputMaybe<TopicUpdateToOneWithWhereWithoutTagsInput>;
  upsert?: InputMaybe<TopicUpsertWithoutTagsInput>;
};

export type TopicUpdateOneWithoutUserInterestsNestedInput = {
  connect?: InputMaybe<TopicWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TopicCreateOrConnectWithoutUserInterestsInput>;
  create?: InputMaybe<TopicCreateWithoutUserInterestsInput>;
  delete?: InputMaybe<TopicWhereInput>;
  disconnect?: InputMaybe<TopicWhereInput>;
  update?: InputMaybe<TopicUpdateToOneWithWhereWithoutUserInterestsInput>;
  upsert?: InputMaybe<TopicUpsertWithoutUserInterestsInput>;
};

export type TopicUpdateToOneWithWhereWithoutBlogsInput = {
  data: TopicUpdateWithoutBlogsInput;
  where?: InputMaybe<TopicWhereInput>;
};

export type TopicUpdateToOneWithWhereWithoutTagsInput = {
  data: TopicUpdateWithoutTagsInput;
  where?: InputMaybe<TopicWhereInput>;
};

export type TopicUpdateToOneWithWhereWithoutUserInterestsInput = {
  data: TopicUpdateWithoutUserInterestsInput;
  where?: InputMaybe<TopicWhereInput>;
};

export type TopicUpdateWithWhereUniqueWithoutTechnologyInput = {
  data: TopicUpdateWithoutTechnologyInput;
  where: TopicWhereUniqueInput;
};

export type TopicUpdateWithoutBlogsInput = {
  Technology?: InputMaybe<TechnologyUpdateOneWithoutTopicsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  tags?: InputMaybe<TagUpdateManyWithoutTopicNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userInterests?: InputMaybe<UserInterestUpdateManyWithoutTopicNestedInput>;
};

export type TopicUpdateWithoutTagsInput = {
  Blogs?: InputMaybe<BlogUpdateManyWithoutTopicNestedInput>;
  Technology?: InputMaybe<TechnologyUpdateOneWithoutTopicsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userInterests?: InputMaybe<UserInterestUpdateManyWithoutTopicNestedInput>;
};

export type TopicUpdateWithoutTechnologyInput = {
  Blogs?: InputMaybe<BlogUpdateManyWithoutTopicNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  tags?: InputMaybe<TagUpdateManyWithoutTopicNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userInterests?: InputMaybe<UserInterestUpdateManyWithoutTopicNestedInput>;
};

export type TopicUpdateWithoutUserInterestsInput = {
  Blogs?: InputMaybe<BlogUpdateManyWithoutTopicNestedInput>;
  Technology?: InputMaybe<TechnologyUpdateOneWithoutTopicsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  tags?: InputMaybe<TagUpdateManyWithoutTopicNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TopicUpsertWithWhereUniqueWithoutTechnologyInput = {
  create: TopicCreateWithoutTechnologyInput;
  update: TopicUpdateWithoutTechnologyInput;
  where: TopicWhereUniqueInput;
};

export type TopicUpsertWithoutBlogsInput = {
  create: TopicCreateWithoutBlogsInput;
  update: TopicUpdateWithoutBlogsInput;
  where?: InputMaybe<TopicWhereInput>;
};

export type TopicUpsertWithoutTagsInput = {
  create: TopicCreateWithoutTagsInput;
  update: TopicUpdateWithoutTagsInput;
  where?: InputMaybe<TopicWhereInput>;
};

export type TopicUpsertWithoutUserInterestsInput = {
  create: TopicCreateWithoutUserInterestsInput;
  update: TopicUpdateWithoutUserInterestsInput;
  where?: InputMaybe<TopicWhereInput>;
};

export type TopicWhereInput = {
  AND?: InputMaybe<Array<TopicWhereInput>>;
  Blogs?: InputMaybe<BlogListRelationFilter>;
  NOT?: InputMaybe<Array<TopicWhereInput>>;
  OR?: InputMaybe<Array<TopicWhereInput>>;
  Technology?: InputMaybe<TechnologyNullableRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  tags?: InputMaybe<TagListRelationFilter>;
  technologyId?: InputMaybe<IntNullableFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userInterests?: InputMaybe<UserInterestListRelationFilter>;
};

export type TopicWhereUniqueInput = {
  AND?: InputMaybe<Array<TopicWhereInput>>;
  Blogs?: InputMaybe<BlogListRelationFilter>;
  NOT?: InputMaybe<Array<TopicWhereInput>>;
  OR?: InputMaybe<Array<TopicWhereInput>>;
  Technology?: InputMaybe<TechnologyNullableRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  tags?: InputMaybe<TagListRelationFilter>;
  technologyId?: InputMaybe<IntNullableFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userInterests?: InputMaybe<UserInterestListRelationFilter>;
};

export type UpdateUserInterestResponse = {
  __typename?: 'UpdateUserInterestResponse';
  data?: Maybe<UserInterest>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type UserCreateNestedOneWithoutBlogsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutBlogsInput>;
  create?: InputMaybe<UserCreateWithoutBlogsInput>;
};

export type UserCreateNestedOneWithoutInterestsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutInterestsInput>;
  create?: InputMaybe<UserCreateWithoutInterestsInput>;
};

export type UserCreateOrConnectWithoutBlogsInput = {
  create: UserCreateWithoutBlogsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutInterestsInput = {
  create: UserCreateWithoutInterestsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutBlogsInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  emailId: Scalars['String']['input'];
  interests?: InputMaybe<UserInterestCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  username: Scalars['String']['input'];
};

export type UserCreateWithoutInterestsInput = {
  Blogs?: InputMaybe<BlogCreateNestedManyWithoutAuthorInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  emailId: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  username: Scalars['String']['input'];
};

export type UserInterest = {
  __typename?: 'UserInterest';
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['Int']['output'];
  interestType: InterestType;
  technologyId?: Maybe<Scalars['Int']['output']>;
  topicId?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['DateTimeISO']['output'];
  userId: Scalars['Int']['output'];
};

export type UserInterestCreateInput = {
  Technology?: InputMaybe<TechnologyCreateNestedOneWithoutUserInterestsInput>;
  Topic?: InputMaybe<TopicCreateNestedOneWithoutUserInterestsInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  interestType: InterestType;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user: UserCreateNestedOneWithoutInterestsInput;
};

export type UserInterestCreateManyTechnologyInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  interestType: InterestType;
  topicId?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userId: Scalars['Int']['input'];
};

export type UserInterestCreateManyTechnologyInputEnvelope = {
  data: Array<UserInterestCreateManyTechnologyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserInterestCreateManyTopicInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  interestType: InterestType;
  technologyId?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userId: Scalars['Int']['input'];
};

export type UserInterestCreateManyTopicInputEnvelope = {
  data: Array<UserInterestCreateManyTopicInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserInterestCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  interestType: InterestType;
  technologyId?: InputMaybe<Scalars['Int']['input']>;
  topicId?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type UserInterestCreateManyUserInputEnvelope = {
  data: Array<UserInterestCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserInterestCreateNestedManyWithoutTechnologyInput = {
  connect?: InputMaybe<Array<UserInterestWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserInterestCreateOrConnectWithoutTechnologyInput>>;
  create?: InputMaybe<Array<UserInterestCreateWithoutTechnologyInput>>;
  createMany?: InputMaybe<UserInterestCreateManyTechnologyInputEnvelope>;
};

export type UserInterestCreateNestedManyWithoutTopicInput = {
  connect?: InputMaybe<Array<UserInterestWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserInterestCreateOrConnectWithoutTopicInput>>;
  create?: InputMaybe<Array<UserInterestCreateWithoutTopicInput>>;
  createMany?: InputMaybe<UserInterestCreateManyTopicInputEnvelope>;
};

export type UserInterestCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<UserInterestWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserInterestCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserInterestCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserInterestCreateManyUserInputEnvelope>;
};

export type UserInterestCreateOrConnectWithoutTechnologyInput = {
  create: UserInterestCreateWithoutTechnologyInput;
  where: UserInterestWhereUniqueInput;
};

export type UserInterestCreateOrConnectWithoutTopicInput = {
  create: UserInterestCreateWithoutTopicInput;
  where: UserInterestWhereUniqueInput;
};

export type UserInterestCreateOrConnectWithoutUserInput = {
  create: UserInterestCreateWithoutUserInput;
  where: UserInterestWhereUniqueInput;
};

export type UserInterestCreateWithoutTechnologyInput = {
  Topic?: InputMaybe<TopicCreateNestedOneWithoutUserInterestsInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  interestType: InterestType;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user: UserCreateNestedOneWithoutInterestsInput;
};

export type UserInterestCreateWithoutTopicInput = {
  Technology?: InputMaybe<TechnologyCreateNestedOneWithoutUserInterestsInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  interestType: InterestType;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user: UserCreateNestedOneWithoutInterestsInput;
};

export type UserInterestCreateWithoutUserInput = {
  Technology?: InputMaybe<TechnologyCreateNestedOneWithoutUserInterestsInput>;
  Topic?: InputMaybe<TopicCreateNestedOneWithoutUserInterestsInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  interestType: InterestType;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type UserInterestListRelationFilter = {
  every?: InputMaybe<UserInterestWhereInput>;
  none?: InputMaybe<UserInterestWhereInput>;
  some?: InputMaybe<UserInterestWhereInput>;
};

export type UserInterestScalarWhereInput = {
  AND?: InputMaybe<Array<UserInterestScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserInterestScalarWhereInput>>;
  OR?: InputMaybe<Array<UserInterestScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  interestType?: InputMaybe<EnumInterestTypeFilter>;
  technologyId?: InputMaybe<IntNullableFilter>;
  topicId?: InputMaybe<IntNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type UserInterestUpdateInput = {
  Technology?: InputMaybe<TechnologyUpdateOneWithoutUserInterestsNestedInput>;
  Topic?: InputMaybe<TopicUpdateOneWithoutUserInterestsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  interestType?: InputMaybe<EnumInterestTypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutInterestsNestedInput>;
};

export type UserInterestUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  interestType?: InputMaybe<EnumInterestTypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserInterestUpdateManyWithWhereWithoutTechnologyInput = {
  data: UserInterestUpdateManyMutationInput;
  where: UserInterestScalarWhereInput;
};

export type UserInterestUpdateManyWithWhereWithoutTopicInput = {
  data: UserInterestUpdateManyMutationInput;
  where: UserInterestScalarWhereInput;
};

export type UserInterestUpdateManyWithWhereWithoutUserInput = {
  data: UserInterestUpdateManyMutationInput;
  where: UserInterestScalarWhereInput;
};

export type UserInterestUpdateManyWithoutTechnologyNestedInput = {
  connect?: InputMaybe<Array<UserInterestWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserInterestCreateOrConnectWithoutTechnologyInput>>;
  create?: InputMaybe<Array<UserInterestCreateWithoutTechnologyInput>>;
  createMany?: InputMaybe<UserInterestCreateManyTechnologyInputEnvelope>;
  delete?: InputMaybe<Array<UserInterestWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserInterestScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserInterestWhereUniqueInput>>;
  set?: InputMaybe<Array<UserInterestWhereUniqueInput>>;
  update?: InputMaybe<Array<UserInterestUpdateWithWhereUniqueWithoutTechnologyInput>>;
  updateMany?: InputMaybe<Array<UserInterestUpdateManyWithWhereWithoutTechnologyInput>>;
  upsert?: InputMaybe<Array<UserInterestUpsertWithWhereUniqueWithoutTechnologyInput>>;
};

export type UserInterestUpdateManyWithoutTopicNestedInput = {
  connect?: InputMaybe<Array<UserInterestWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserInterestCreateOrConnectWithoutTopicInput>>;
  create?: InputMaybe<Array<UserInterestCreateWithoutTopicInput>>;
  createMany?: InputMaybe<UserInterestCreateManyTopicInputEnvelope>;
  delete?: InputMaybe<Array<UserInterestWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserInterestScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserInterestWhereUniqueInput>>;
  set?: InputMaybe<Array<UserInterestWhereUniqueInput>>;
  update?: InputMaybe<Array<UserInterestUpdateWithWhereUniqueWithoutTopicInput>>;
  updateMany?: InputMaybe<Array<UserInterestUpdateManyWithWhereWithoutTopicInput>>;
  upsert?: InputMaybe<Array<UserInterestUpsertWithWhereUniqueWithoutTopicInput>>;
};

export type UserInterestUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<UserInterestWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserInterestCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserInterestCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserInterestCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<UserInterestWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserInterestScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserInterestWhereUniqueInput>>;
  set?: InputMaybe<Array<UserInterestWhereUniqueInput>>;
  update?: InputMaybe<Array<UserInterestUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<UserInterestUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<UserInterestUpsertWithWhereUniqueWithoutUserInput>>;
};

export type UserInterestUpdateWithWhereUniqueWithoutTechnologyInput = {
  data: UserInterestUpdateWithoutTechnologyInput;
  where: UserInterestWhereUniqueInput;
};

export type UserInterestUpdateWithWhereUniqueWithoutTopicInput = {
  data: UserInterestUpdateWithoutTopicInput;
  where: UserInterestWhereUniqueInput;
};

export type UserInterestUpdateWithWhereUniqueWithoutUserInput = {
  data: UserInterestUpdateWithoutUserInput;
  where: UserInterestWhereUniqueInput;
};

export type UserInterestUpdateWithoutTechnologyInput = {
  Topic?: InputMaybe<TopicUpdateOneWithoutUserInterestsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  interestType?: InputMaybe<EnumInterestTypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutInterestsNestedInput>;
};

export type UserInterestUpdateWithoutTopicInput = {
  Technology?: InputMaybe<TechnologyUpdateOneWithoutUserInterestsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  interestType?: InputMaybe<EnumInterestTypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutInterestsNestedInput>;
};

export type UserInterestUpdateWithoutUserInput = {
  Technology?: InputMaybe<TechnologyUpdateOneWithoutUserInterestsNestedInput>;
  Topic?: InputMaybe<TopicUpdateOneWithoutUserInterestsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  interestType?: InputMaybe<EnumInterestTypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserInterestUpsertWithWhereUniqueWithoutTechnologyInput = {
  create: UserInterestCreateWithoutTechnologyInput;
  update: UserInterestUpdateWithoutTechnologyInput;
  where: UserInterestWhereUniqueInput;
};

export type UserInterestUpsertWithWhereUniqueWithoutTopicInput = {
  create: UserInterestCreateWithoutTopicInput;
  update: UserInterestUpdateWithoutTopicInput;
  where: UserInterestWhereUniqueInput;
};

export type UserInterestUpsertWithWhereUniqueWithoutUserInput = {
  create: UserInterestCreateWithoutUserInput;
  update: UserInterestUpdateWithoutUserInput;
  where: UserInterestWhereUniqueInput;
};

export type UserInterestWhereInput = {
  AND?: InputMaybe<Array<UserInterestWhereInput>>;
  NOT?: InputMaybe<Array<UserInterestWhereInput>>;
  OR?: InputMaybe<Array<UserInterestWhereInput>>;
  Technology?: InputMaybe<TechnologyNullableRelationFilter>;
  Topic?: InputMaybe<TopicNullableRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  interestType?: InputMaybe<EnumInterestTypeFilter>;
  technologyId?: InputMaybe<IntNullableFilter>;
  topicId?: InputMaybe<IntNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type UserInterestWhereUniqueInput = {
  AND?: InputMaybe<Array<UserInterestWhereInput>>;
  NOT?: InputMaybe<Array<UserInterestWhereInput>>;
  OR?: InputMaybe<Array<UserInterestWhereInput>>;
  Technology?: InputMaybe<TechnologyNullableRelationFilter>;
  Topic?: InputMaybe<TopicNullableRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  interestType?: InputMaybe<EnumInterestTypeFilter>;
  technologyId?: InputMaybe<IntNullableFilter>;
  topicId?: InputMaybe<IntNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type UserNullableRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserUpdateOneRequiredWithoutInterestsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutInterestsInput>;
  create?: InputMaybe<UserCreateWithoutInterestsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutInterestsInput>;
  upsert?: InputMaybe<UserUpsertWithoutInterestsInput>;
};

export type UserUpdateOneWithoutBlogsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutBlogsInput>;
  create?: InputMaybe<UserCreateWithoutBlogsInput>;
  delete?: InputMaybe<UserWhereInput>;
  disconnect?: InputMaybe<UserWhereInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutBlogsInput>;
  upsert?: InputMaybe<UserUpsertWithoutBlogsInput>;
};

export type UserUpdateToOneWithWhereWithoutBlogsInput = {
  data: UserUpdateWithoutBlogsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutInterestsInput = {
  data: UserUpdateWithoutInterestsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateWithoutBlogsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  emailId?: InputMaybe<StringFieldUpdateOperationsInput>;
  interests?: InputMaybe<UserInterestUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutInterestsInput = {
  Blogs?: InputMaybe<BlogUpdateManyWithoutAuthorNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  emailId?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutBlogsInput = {
  create: UserCreateWithoutBlogsInput;
  update: UserUpdateWithoutBlogsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutInterestsInput = {
  create: UserCreateWithoutInterestsInput;
  update: UserUpdateWithoutInterestsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  Blogs?: InputMaybe<BlogListRelationFilter>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  emailId?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  interests?: InputMaybe<UserInterestListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  username?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  Blogs?: InputMaybe<BlogListRelationFilter>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  emailId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  interests?: InputMaybe<UserInterestListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type VideoCreateNestedOneWithoutBlogInput = {
  connect?: InputMaybe<VideoWhereUniqueInput>;
  connectOrCreate?: InputMaybe<VideoCreateOrConnectWithoutBlogInput>;
  create?: InputMaybe<VideoCreateWithoutBlogInput>;
};

export type VideoCreateOrConnectWithoutBlogInput = {
  create: VideoCreateWithoutBlogInput;
  where: VideoWhereUniqueInput;
};

export type VideoCreateWithoutBlogInput = {
  Sections?: InputMaybe<VideoSectionCreateNestedManyWithoutVideoInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  thumbnailLink: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  videoLink: Scalars['String']['input'];
};

export type VideoNullableRelationFilter = {
  is?: InputMaybe<VideoWhereInput>;
  isNot?: InputMaybe<VideoWhereInput>;
};

export type VideoRelationFilter = {
  is?: InputMaybe<VideoWhereInput>;
  isNot?: InputMaybe<VideoWhereInput>;
};

export type VideoSectionBlogSectionTitleBlogPartCompoundUniqueInput = {
  blogPart: BlogPart;
  blogSectionTitle: Scalars['String']['input'];
};

export type VideoSectionCreateManyVideoInput = {
  blogPart: BlogPart;
  blogSectionTitle: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  timestampInSeconds: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type VideoSectionCreateManyVideoInputEnvelope = {
  data: Array<VideoSectionCreateManyVideoInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VideoSectionCreateNestedManyWithoutVideoInput = {
  connect?: InputMaybe<Array<VideoSectionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<VideoSectionCreateOrConnectWithoutVideoInput>>;
  create?: InputMaybe<Array<VideoSectionCreateWithoutVideoInput>>;
  createMany?: InputMaybe<VideoSectionCreateManyVideoInputEnvelope>;
};

export type VideoSectionCreateOrConnectWithoutVideoInput = {
  create: VideoSectionCreateWithoutVideoInput;
  where: VideoSectionWhereUniqueInput;
};

export type VideoSectionCreateWithoutVideoInput = {
  blogPart: BlogPart;
  blogSectionTitle: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  timestampInSeconds: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type VideoSectionListRelationFilter = {
  every?: InputMaybe<VideoSectionWhereInput>;
  none?: InputMaybe<VideoSectionWhereInput>;
  some?: InputMaybe<VideoSectionWhereInput>;
};

export type VideoSectionScalarWhereInput = {
  AND?: InputMaybe<Array<VideoSectionScalarWhereInput>>;
  NOT?: InputMaybe<Array<VideoSectionScalarWhereInput>>;
  OR?: InputMaybe<Array<VideoSectionScalarWhereInput>>;
  blogPart?: InputMaybe<EnumBlogPartFilter>;
  blogSectionTitle?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  timestampInSeconds?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  videoId?: InputMaybe<IntFilter>;
};

export type VideoSectionUpdateManyMutationInput = {
  blogPart?: InputMaybe<EnumBlogPartFieldUpdateOperationsInput>;
  blogSectionTitle?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  timestampInSeconds?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type VideoSectionUpdateManyWithWhereWithoutVideoInput = {
  data: VideoSectionUpdateManyMutationInput;
  where: VideoSectionScalarWhereInput;
};

export type VideoSectionUpdateManyWithoutVideoNestedInput = {
  connect?: InputMaybe<Array<VideoSectionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<VideoSectionCreateOrConnectWithoutVideoInput>>;
  create?: InputMaybe<Array<VideoSectionCreateWithoutVideoInput>>;
  createMany?: InputMaybe<VideoSectionCreateManyVideoInputEnvelope>;
  delete?: InputMaybe<Array<VideoSectionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<VideoSectionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<VideoSectionWhereUniqueInput>>;
  set?: InputMaybe<Array<VideoSectionWhereUniqueInput>>;
  update?: InputMaybe<Array<VideoSectionUpdateWithWhereUniqueWithoutVideoInput>>;
  updateMany?: InputMaybe<Array<VideoSectionUpdateManyWithWhereWithoutVideoInput>>;
  upsert?: InputMaybe<Array<VideoSectionUpsertWithWhereUniqueWithoutVideoInput>>;
};

export type VideoSectionUpdateWithWhereUniqueWithoutVideoInput = {
  data: VideoSectionUpdateWithoutVideoInput;
  where: VideoSectionWhereUniqueInput;
};

export type VideoSectionUpdateWithoutVideoInput = {
  blogPart?: InputMaybe<EnumBlogPartFieldUpdateOperationsInput>;
  blogSectionTitle?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  timestampInSeconds?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type VideoSectionUpsertWithWhereUniqueWithoutVideoInput = {
  create: VideoSectionCreateWithoutVideoInput;
  update: VideoSectionUpdateWithoutVideoInput;
  where: VideoSectionWhereUniqueInput;
};

export type VideoSectionWhereInput = {
  AND?: InputMaybe<Array<VideoSectionWhereInput>>;
  NOT?: InputMaybe<Array<VideoSectionWhereInput>>;
  OR?: InputMaybe<Array<VideoSectionWhereInput>>;
  Video?: InputMaybe<VideoRelationFilter>;
  blogPart?: InputMaybe<EnumBlogPartFilter>;
  blogSectionTitle?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  timestampInSeconds?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  videoId?: InputMaybe<IntFilter>;
};

export type VideoSectionWhereUniqueInput = {
  AND?: InputMaybe<Array<VideoSectionWhereInput>>;
  NOT?: InputMaybe<Array<VideoSectionWhereInput>>;
  OR?: InputMaybe<Array<VideoSectionWhereInput>>;
  Video?: InputMaybe<VideoRelationFilter>;
  blogPart?: InputMaybe<EnumBlogPartFilter>;
  blogSectionTitle?: InputMaybe<StringFilter>;
  blogSectionTitle_blogPart?: InputMaybe<VideoSectionBlogSectionTitleBlogPartCompoundUniqueInput>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  timestampInSeconds?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  videoId?: InputMaybe<IntFilter>;
};

export type VideoUpdateOneWithoutBlogNestedInput = {
  connect?: InputMaybe<VideoWhereUniqueInput>;
  connectOrCreate?: InputMaybe<VideoCreateOrConnectWithoutBlogInput>;
  create?: InputMaybe<VideoCreateWithoutBlogInput>;
  delete?: InputMaybe<VideoWhereInput>;
  disconnect?: InputMaybe<VideoWhereInput>;
  update?: InputMaybe<VideoUpdateToOneWithWhereWithoutBlogInput>;
  upsert?: InputMaybe<VideoUpsertWithoutBlogInput>;
};

export type VideoUpdateToOneWithWhereWithoutBlogInput = {
  data: VideoUpdateWithoutBlogInput;
  where?: InputMaybe<VideoWhereInput>;
};

export type VideoUpdateWithoutBlogInput = {
  Sections?: InputMaybe<VideoSectionUpdateManyWithoutVideoNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  thumbnailLink?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  videoLink?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type VideoUpsertWithoutBlogInput = {
  create: VideoCreateWithoutBlogInput;
  update: VideoUpdateWithoutBlogInput;
  where?: InputMaybe<VideoWhereInput>;
};

export type VideoWhereInput = {
  AND?: InputMaybe<Array<VideoWhereInput>>;
  Blog?: InputMaybe<BlogRelationFilter>;
  NOT?: InputMaybe<Array<VideoWhereInput>>;
  OR?: InputMaybe<Array<VideoWhereInput>>;
  Sections?: InputMaybe<VideoSectionListRelationFilter>;
  blogId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  thumbnailLink?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  videoLink?: InputMaybe<StringFilter>;
};

export type VideoWhereUniqueInput = {
  AND?: InputMaybe<Array<VideoWhereInput>>;
  Blog?: InputMaybe<BlogRelationFilter>;
  NOT?: InputMaybe<Array<VideoWhereInput>>;
  OR?: InputMaybe<Array<VideoWhereInput>>;
  Sections?: InputMaybe<VideoSectionListRelationFilter>;
  blogId?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  thumbnailLink?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  videoLink?: InputMaybe<StringFilter>;
};

export type CreateUserInterestMutationVariables = Exact<{
  createUserInterestInput: UserInterestCreateInput;
}>;


export type CreateUserInterestMutation = { __typename?: 'Mutation', createUserInterest: { __typename?: 'CreateUserInterestResponse', success: boolean, message?: string | null, status?: string | null, data?: { __typename?: 'UserInterest', id: number } | null } };

export type UpdateUserInterestMutationVariables = Exact<{
  where: UserInterestWhereUniqueInput;
  updateUserInterestInput: UserInterestUpdateInput;
}>;


export type UpdateUserInterestMutation = { __typename?: 'Mutation', updateUserInterest: { __typename?: 'UpdateUserInterestResponse', success: boolean, message?: string | null, status?: string | null, data?: { __typename?: 'UserInterest', id: number } | null } };

export type DeleteUserInterestMutationVariables = Exact<{
  where: UserInterestWhereUniqueInput;
}>;


export type DeleteUserInterestMutation = { __typename?: 'Mutation', deleteUserInterest: { __typename?: 'DeleteUserInterestResponse', success: boolean, message?: string | null, status?: string | null, data?: boolean | null } };

export type GetUserInterestsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserInterestsQuery = { __typename?: 'Query', getUserInterests: { __typename?: 'GetUserInterestsResponse', success: boolean, message?: string | null, status?: string | null, data?: Array<{ __typename?: 'UserInterest', id: number }> | null } };

export type GetUserInterestByIdQueryVariables = Exact<{
  where: UserInterestWhereUniqueInput;
}>;


export type GetUserInterestByIdQuery = { __typename?: 'Query', getUserInterestById: { __typename?: 'GetUserInterestByIdResponse', success: boolean, message?: string | null, status?: string | null, data?: { __typename?: 'UserInterest', id: number } | null } };


export const CreateUserInterestDocument = gql`
    mutation CreateUserInterest($createUserInterestInput: UserInterestCreateInput!) {
  createUserInterest(createUserInterestInput: $createUserInterestInput) {
    success
    message
    status
    data {
      id
    }
  }
}
    `;
export type CreateUserInterestMutationFn = Apollo.MutationFunction<CreateUserInterestMutation, CreateUserInterestMutationVariables>;

/**
 * __useCreateUserInterestMutation__
 *
 * To run a mutation, you first call `useCreateUserInterestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserInterestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserInterestMutation, { data, loading, error }] = useCreateUserInterestMutation({
 *   variables: {
 *      createUserInterestInput: // value for 'createUserInterestInput'
 *   },
 * });
 */
export function useCreateUserInterestMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserInterestMutation, CreateUserInterestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserInterestMutation, CreateUserInterestMutationVariables>(CreateUserInterestDocument, options);
      }
export type CreateUserInterestMutationHookResult = ReturnType<typeof useCreateUserInterestMutation>;
export type CreateUserInterestMutationResult = Apollo.MutationResult<CreateUserInterestMutation>;
export type CreateUserInterestMutationOptions = Apollo.BaseMutationOptions<CreateUserInterestMutation, CreateUserInterestMutationVariables>;
export const UpdateUserInterestDocument = gql`
    mutation UpdateUserInterest($where: UserInterestWhereUniqueInput!, $updateUserInterestInput: UserInterestUpdateInput!) {
  updateUserInterest(
    where: $where
    updateUserInterestInput: $updateUserInterestInput
  ) {
    success
    message
    status
    data {
      id
    }
  }
}
    `;
export type UpdateUserInterestMutationFn = Apollo.MutationFunction<UpdateUserInterestMutation, UpdateUserInterestMutationVariables>;

/**
 * __useUpdateUserInterestMutation__
 *
 * To run a mutation, you first call `useUpdateUserInterestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserInterestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserInterestMutation, { data, loading, error }] = useUpdateUserInterestMutation({
 *   variables: {
 *      where: // value for 'where'
 *      updateUserInterestInput: // value for 'updateUserInterestInput'
 *   },
 * });
 */
export function useUpdateUserInterestMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserInterestMutation, UpdateUserInterestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserInterestMutation, UpdateUserInterestMutationVariables>(UpdateUserInterestDocument, options);
      }
export type UpdateUserInterestMutationHookResult = ReturnType<typeof useUpdateUserInterestMutation>;
export type UpdateUserInterestMutationResult = Apollo.MutationResult<UpdateUserInterestMutation>;
export type UpdateUserInterestMutationOptions = Apollo.BaseMutationOptions<UpdateUserInterestMutation, UpdateUserInterestMutationVariables>;
export const DeleteUserInterestDocument = gql`
    mutation DeleteUserInterest($where: UserInterestWhereUniqueInput!) {
  deleteUserInterest(where: $where) {
    success
    message
    status
    data
  }
}
    `;
export type DeleteUserInterestMutationFn = Apollo.MutationFunction<DeleteUserInterestMutation, DeleteUserInterestMutationVariables>;

/**
 * __useDeleteUserInterestMutation__
 *
 * To run a mutation, you first call `useDeleteUserInterestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserInterestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserInterestMutation, { data, loading, error }] = useDeleteUserInterestMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteUserInterestMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserInterestMutation, DeleteUserInterestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserInterestMutation, DeleteUserInterestMutationVariables>(DeleteUserInterestDocument, options);
      }
export type DeleteUserInterestMutationHookResult = ReturnType<typeof useDeleteUserInterestMutation>;
export type DeleteUserInterestMutationResult = Apollo.MutationResult<DeleteUserInterestMutation>;
export type DeleteUserInterestMutationOptions = Apollo.BaseMutationOptions<DeleteUserInterestMutation, DeleteUserInterestMutationVariables>;
export const GetUserInterestsDocument = gql`
    query GetUserInterests {
  getUserInterests {
    success
    message
    status
    data {
      id
    }
  }
}
    `;

/**
 * __useGetUserInterestsQuery__
 *
 * To run a query within a React component, call `useGetUserInterestsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserInterestsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserInterestsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserInterestsQuery(baseOptions?: Apollo.QueryHookOptions<GetUserInterestsQuery, GetUserInterestsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserInterestsQuery, GetUserInterestsQueryVariables>(GetUserInterestsDocument, options);
      }
export function useGetUserInterestsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserInterestsQuery, GetUserInterestsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserInterestsQuery, GetUserInterestsQueryVariables>(GetUserInterestsDocument, options);
        }
export function useGetUserInterestsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUserInterestsQuery, GetUserInterestsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserInterestsQuery, GetUserInterestsQueryVariables>(GetUserInterestsDocument, options);
        }
export type GetUserInterestsQueryHookResult = ReturnType<typeof useGetUserInterestsQuery>;
export type GetUserInterestsLazyQueryHookResult = ReturnType<typeof useGetUserInterestsLazyQuery>;
export type GetUserInterestsSuspenseQueryHookResult = ReturnType<typeof useGetUserInterestsSuspenseQuery>;
export type GetUserInterestsQueryResult = Apollo.QueryResult<GetUserInterestsQuery, GetUserInterestsQueryVariables>;
export const GetUserInterestByIdDocument = gql`
    query GetUserInterestById($where: UserInterestWhereUniqueInput!) {
  getUserInterestById(where: $where) {
    success
    message
    status
    data {
      id
    }
  }
}
    `;

/**
 * __useGetUserInterestByIdQuery__
 *
 * To run a query within a React component, call `useGetUserInterestByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserInterestByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserInterestByIdQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetUserInterestByIdQuery(baseOptions: Apollo.QueryHookOptions<GetUserInterestByIdQuery, GetUserInterestByIdQueryVariables> & ({ variables: GetUserInterestByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserInterestByIdQuery, GetUserInterestByIdQueryVariables>(GetUserInterestByIdDocument, options);
      }
export function useGetUserInterestByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserInterestByIdQuery, GetUserInterestByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserInterestByIdQuery, GetUserInterestByIdQueryVariables>(GetUserInterestByIdDocument, options);
        }
export function useGetUserInterestByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUserInterestByIdQuery, GetUserInterestByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserInterestByIdQuery, GetUserInterestByIdQueryVariables>(GetUserInterestByIdDocument, options);
        }
export type GetUserInterestByIdQueryHookResult = ReturnType<typeof useGetUserInterestByIdQuery>;
export type GetUserInterestByIdLazyQueryHookResult = ReturnType<typeof useGetUserInterestByIdLazyQuery>;
export type GetUserInterestByIdSuspenseQueryHookResult = ReturnType<typeof useGetUserInterestByIdSuspenseQuery>;
export type GetUserInterestByIdQueryResult = Apollo.QueryResult<GetUserInterestByIdQuery, GetUserInterestByIdQueryVariables>;