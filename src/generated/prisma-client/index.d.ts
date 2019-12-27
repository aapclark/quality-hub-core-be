// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  user: (where: UserWhereUniqueInput) => UserNullablePromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "first_name_ASC"
  | "first_name_DESC"
  | "last_name_ASC"
  | "last_name_DESC"
  | "email_ASC"
  | "email_DESC"
  | "password_ASC"
  | "password_DESC"
  | "city_ASC"
  | "city_DESC"
  | "state_ASC"
  | "state_DESC"
  | "gender_ASC"
  | "gender_DESC"
  | "bio_ASC"
  | "bio_DESC"
  | "image_url_ASC"
  | "image_url_DESC"
  | "portfolio_url_ASC"
  | "portfolio_url_DESC"
  | "linkedin_url_ASC"
  | "linkedin_url_DESC"
  | "github_url_ASC"
  | "github_url_DESC"
  | "personal_url_ASC"
  | "personal_url_DESC"
  | "blog_url_ASC"
  | "blog_url_DESC"
  | "twitter_url_ASC"
  | "twitter_url_DESC"
  | "activated_stripe_ASC"
  | "activated_stripe_DESC"
  | "fn_lc_ASC"
  | "fn_lc_DESC"
  | "ln_lc_ASC"
  | "ln_lc_DESC"
  | "city_lc_ASC"
  | "city_lc_DESC"
  | "state_lc_ASC"
  | "state_lc_DESC"
  | "stripeCoachCode_ASC"
  | "stripeCoachCode_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface UserCreateInput {
  id?: Maybe<ID_Input>;
  first_name: String;
  last_name: String;
  email: String;
  password: String;
  city: String;
  state: String;
  gender?: Maybe<String>;
  bio?: Maybe<String>;
  image_url?: Maybe<String>;
  portfolio_url?: Maybe<String>;
  linkedin_url?: Maybe<String>;
  github_url?: Maybe<String>;
  personal_url?: Maybe<String>;
  blog_url?: Maybe<String>;
  twitter_url?: Maybe<String>;
  activated_stripe?: Maybe<Boolean>;
  fn_lc: String;
  ln_lc: String;
  city_lc: String;
  state_lc: String;
  stripeCoachCode?: Maybe<String>;
}

export interface UserUpdateInput {
  first_name?: Maybe<String>;
  last_name?: Maybe<String>;
  email?: Maybe<String>;
  password?: Maybe<String>;
  city?: Maybe<String>;
  state?: Maybe<String>;
  gender?: Maybe<String>;
  bio?: Maybe<String>;
  image_url?: Maybe<String>;
  portfolio_url?: Maybe<String>;
  linkedin_url?: Maybe<String>;
  github_url?: Maybe<String>;
  personal_url?: Maybe<String>;
  blog_url?: Maybe<String>;
  twitter_url?: Maybe<String>;
  activated_stripe?: Maybe<Boolean>;
  fn_lc?: Maybe<String>;
  ln_lc?: Maybe<String>;
  city_lc?: Maybe<String>;
  state_lc?: Maybe<String>;
  stripeCoachCode?: Maybe<String>;
}

export interface UserWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  first_name?: Maybe<String>;
  first_name_not?: Maybe<String>;
  first_name_in?: Maybe<String[] | String>;
  first_name_not_in?: Maybe<String[] | String>;
  first_name_lt?: Maybe<String>;
  first_name_lte?: Maybe<String>;
  first_name_gt?: Maybe<String>;
  first_name_gte?: Maybe<String>;
  first_name_contains?: Maybe<String>;
  first_name_not_contains?: Maybe<String>;
  first_name_starts_with?: Maybe<String>;
  first_name_not_starts_with?: Maybe<String>;
  first_name_ends_with?: Maybe<String>;
  first_name_not_ends_with?: Maybe<String>;
  last_name?: Maybe<String>;
  last_name_not?: Maybe<String>;
  last_name_in?: Maybe<String[] | String>;
  last_name_not_in?: Maybe<String[] | String>;
  last_name_lt?: Maybe<String>;
  last_name_lte?: Maybe<String>;
  last_name_gt?: Maybe<String>;
  last_name_gte?: Maybe<String>;
  last_name_contains?: Maybe<String>;
  last_name_not_contains?: Maybe<String>;
  last_name_starts_with?: Maybe<String>;
  last_name_not_starts_with?: Maybe<String>;
  last_name_ends_with?: Maybe<String>;
  last_name_not_ends_with?: Maybe<String>;
  email?: Maybe<String>;
  email_not?: Maybe<String>;
  email_in?: Maybe<String[] | String>;
  email_not_in?: Maybe<String[] | String>;
  email_lt?: Maybe<String>;
  email_lte?: Maybe<String>;
  email_gt?: Maybe<String>;
  email_gte?: Maybe<String>;
  email_contains?: Maybe<String>;
  email_not_contains?: Maybe<String>;
  email_starts_with?: Maybe<String>;
  email_not_starts_with?: Maybe<String>;
  email_ends_with?: Maybe<String>;
  email_not_ends_with?: Maybe<String>;
  password?: Maybe<String>;
  password_not?: Maybe<String>;
  password_in?: Maybe<String[] | String>;
  password_not_in?: Maybe<String[] | String>;
  password_lt?: Maybe<String>;
  password_lte?: Maybe<String>;
  password_gt?: Maybe<String>;
  password_gte?: Maybe<String>;
  password_contains?: Maybe<String>;
  password_not_contains?: Maybe<String>;
  password_starts_with?: Maybe<String>;
  password_not_starts_with?: Maybe<String>;
  password_ends_with?: Maybe<String>;
  password_not_ends_with?: Maybe<String>;
  city?: Maybe<String>;
  city_not?: Maybe<String>;
  city_in?: Maybe<String[] | String>;
  city_not_in?: Maybe<String[] | String>;
  city_lt?: Maybe<String>;
  city_lte?: Maybe<String>;
  city_gt?: Maybe<String>;
  city_gte?: Maybe<String>;
  city_contains?: Maybe<String>;
  city_not_contains?: Maybe<String>;
  city_starts_with?: Maybe<String>;
  city_not_starts_with?: Maybe<String>;
  city_ends_with?: Maybe<String>;
  city_not_ends_with?: Maybe<String>;
  state?: Maybe<String>;
  state_not?: Maybe<String>;
  state_in?: Maybe<String[] | String>;
  state_not_in?: Maybe<String[] | String>;
  state_lt?: Maybe<String>;
  state_lte?: Maybe<String>;
  state_gt?: Maybe<String>;
  state_gte?: Maybe<String>;
  state_contains?: Maybe<String>;
  state_not_contains?: Maybe<String>;
  state_starts_with?: Maybe<String>;
  state_not_starts_with?: Maybe<String>;
  state_ends_with?: Maybe<String>;
  state_not_ends_with?: Maybe<String>;
  gender?: Maybe<String>;
  gender_not?: Maybe<String>;
  gender_in?: Maybe<String[] | String>;
  gender_not_in?: Maybe<String[] | String>;
  gender_lt?: Maybe<String>;
  gender_lte?: Maybe<String>;
  gender_gt?: Maybe<String>;
  gender_gte?: Maybe<String>;
  gender_contains?: Maybe<String>;
  gender_not_contains?: Maybe<String>;
  gender_starts_with?: Maybe<String>;
  gender_not_starts_with?: Maybe<String>;
  gender_ends_with?: Maybe<String>;
  gender_not_ends_with?: Maybe<String>;
  bio?: Maybe<String>;
  bio_not?: Maybe<String>;
  bio_in?: Maybe<String[] | String>;
  bio_not_in?: Maybe<String[] | String>;
  bio_lt?: Maybe<String>;
  bio_lte?: Maybe<String>;
  bio_gt?: Maybe<String>;
  bio_gte?: Maybe<String>;
  bio_contains?: Maybe<String>;
  bio_not_contains?: Maybe<String>;
  bio_starts_with?: Maybe<String>;
  bio_not_starts_with?: Maybe<String>;
  bio_ends_with?: Maybe<String>;
  bio_not_ends_with?: Maybe<String>;
  image_url?: Maybe<String>;
  image_url_not?: Maybe<String>;
  image_url_in?: Maybe<String[] | String>;
  image_url_not_in?: Maybe<String[] | String>;
  image_url_lt?: Maybe<String>;
  image_url_lte?: Maybe<String>;
  image_url_gt?: Maybe<String>;
  image_url_gte?: Maybe<String>;
  image_url_contains?: Maybe<String>;
  image_url_not_contains?: Maybe<String>;
  image_url_starts_with?: Maybe<String>;
  image_url_not_starts_with?: Maybe<String>;
  image_url_ends_with?: Maybe<String>;
  image_url_not_ends_with?: Maybe<String>;
  portfolio_url?: Maybe<String>;
  portfolio_url_not?: Maybe<String>;
  portfolio_url_in?: Maybe<String[] | String>;
  portfolio_url_not_in?: Maybe<String[] | String>;
  portfolio_url_lt?: Maybe<String>;
  portfolio_url_lte?: Maybe<String>;
  portfolio_url_gt?: Maybe<String>;
  portfolio_url_gte?: Maybe<String>;
  portfolio_url_contains?: Maybe<String>;
  portfolio_url_not_contains?: Maybe<String>;
  portfolio_url_starts_with?: Maybe<String>;
  portfolio_url_not_starts_with?: Maybe<String>;
  portfolio_url_ends_with?: Maybe<String>;
  portfolio_url_not_ends_with?: Maybe<String>;
  linkedin_url?: Maybe<String>;
  linkedin_url_not?: Maybe<String>;
  linkedin_url_in?: Maybe<String[] | String>;
  linkedin_url_not_in?: Maybe<String[] | String>;
  linkedin_url_lt?: Maybe<String>;
  linkedin_url_lte?: Maybe<String>;
  linkedin_url_gt?: Maybe<String>;
  linkedin_url_gte?: Maybe<String>;
  linkedin_url_contains?: Maybe<String>;
  linkedin_url_not_contains?: Maybe<String>;
  linkedin_url_starts_with?: Maybe<String>;
  linkedin_url_not_starts_with?: Maybe<String>;
  linkedin_url_ends_with?: Maybe<String>;
  linkedin_url_not_ends_with?: Maybe<String>;
  github_url?: Maybe<String>;
  github_url_not?: Maybe<String>;
  github_url_in?: Maybe<String[] | String>;
  github_url_not_in?: Maybe<String[] | String>;
  github_url_lt?: Maybe<String>;
  github_url_lte?: Maybe<String>;
  github_url_gt?: Maybe<String>;
  github_url_gte?: Maybe<String>;
  github_url_contains?: Maybe<String>;
  github_url_not_contains?: Maybe<String>;
  github_url_starts_with?: Maybe<String>;
  github_url_not_starts_with?: Maybe<String>;
  github_url_ends_with?: Maybe<String>;
  github_url_not_ends_with?: Maybe<String>;
  personal_url?: Maybe<String>;
  personal_url_not?: Maybe<String>;
  personal_url_in?: Maybe<String[] | String>;
  personal_url_not_in?: Maybe<String[] | String>;
  personal_url_lt?: Maybe<String>;
  personal_url_lte?: Maybe<String>;
  personal_url_gt?: Maybe<String>;
  personal_url_gte?: Maybe<String>;
  personal_url_contains?: Maybe<String>;
  personal_url_not_contains?: Maybe<String>;
  personal_url_starts_with?: Maybe<String>;
  personal_url_not_starts_with?: Maybe<String>;
  personal_url_ends_with?: Maybe<String>;
  personal_url_not_ends_with?: Maybe<String>;
  blog_url?: Maybe<String>;
  blog_url_not?: Maybe<String>;
  blog_url_in?: Maybe<String[] | String>;
  blog_url_not_in?: Maybe<String[] | String>;
  blog_url_lt?: Maybe<String>;
  blog_url_lte?: Maybe<String>;
  blog_url_gt?: Maybe<String>;
  blog_url_gte?: Maybe<String>;
  blog_url_contains?: Maybe<String>;
  blog_url_not_contains?: Maybe<String>;
  blog_url_starts_with?: Maybe<String>;
  blog_url_not_starts_with?: Maybe<String>;
  blog_url_ends_with?: Maybe<String>;
  blog_url_not_ends_with?: Maybe<String>;
  twitter_url?: Maybe<String>;
  twitter_url_not?: Maybe<String>;
  twitter_url_in?: Maybe<String[] | String>;
  twitter_url_not_in?: Maybe<String[] | String>;
  twitter_url_lt?: Maybe<String>;
  twitter_url_lte?: Maybe<String>;
  twitter_url_gt?: Maybe<String>;
  twitter_url_gte?: Maybe<String>;
  twitter_url_contains?: Maybe<String>;
  twitter_url_not_contains?: Maybe<String>;
  twitter_url_starts_with?: Maybe<String>;
  twitter_url_not_starts_with?: Maybe<String>;
  twitter_url_ends_with?: Maybe<String>;
  twitter_url_not_ends_with?: Maybe<String>;
  activated_stripe?: Maybe<Boolean>;
  activated_stripe_not?: Maybe<Boolean>;
  fn_lc?: Maybe<String>;
  fn_lc_not?: Maybe<String>;
  fn_lc_in?: Maybe<String[] | String>;
  fn_lc_not_in?: Maybe<String[] | String>;
  fn_lc_lt?: Maybe<String>;
  fn_lc_lte?: Maybe<String>;
  fn_lc_gt?: Maybe<String>;
  fn_lc_gte?: Maybe<String>;
  fn_lc_contains?: Maybe<String>;
  fn_lc_not_contains?: Maybe<String>;
  fn_lc_starts_with?: Maybe<String>;
  fn_lc_not_starts_with?: Maybe<String>;
  fn_lc_ends_with?: Maybe<String>;
  fn_lc_not_ends_with?: Maybe<String>;
  ln_lc?: Maybe<String>;
  ln_lc_not?: Maybe<String>;
  ln_lc_in?: Maybe<String[] | String>;
  ln_lc_not_in?: Maybe<String[] | String>;
  ln_lc_lt?: Maybe<String>;
  ln_lc_lte?: Maybe<String>;
  ln_lc_gt?: Maybe<String>;
  ln_lc_gte?: Maybe<String>;
  ln_lc_contains?: Maybe<String>;
  ln_lc_not_contains?: Maybe<String>;
  ln_lc_starts_with?: Maybe<String>;
  ln_lc_not_starts_with?: Maybe<String>;
  ln_lc_ends_with?: Maybe<String>;
  ln_lc_not_ends_with?: Maybe<String>;
  city_lc?: Maybe<String>;
  city_lc_not?: Maybe<String>;
  city_lc_in?: Maybe<String[] | String>;
  city_lc_not_in?: Maybe<String[] | String>;
  city_lc_lt?: Maybe<String>;
  city_lc_lte?: Maybe<String>;
  city_lc_gt?: Maybe<String>;
  city_lc_gte?: Maybe<String>;
  city_lc_contains?: Maybe<String>;
  city_lc_not_contains?: Maybe<String>;
  city_lc_starts_with?: Maybe<String>;
  city_lc_not_starts_with?: Maybe<String>;
  city_lc_ends_with?: Maybe<String>;
  city_lc_not_ends_with?: Maybe<String>;
  state_lc?: Maybe<String>;
  state_lc_not?: Maybe<String>;
  state_lc_in?: Maybe<String[] | String>;
  state_lc_not_in?: Maybe<String[] | String>;
  state_lc_lt?: Maybe<String>;
  state_lc_lte?: Maybe<String>;
  state_lc_gt?: Maybe<String>;
  state_lc_gte?: Maybe<String>;
  state_lc_contains?: Maybe<String>;
  state_lc_not_contains?: Maybe<String>;
  state_lc_starts_with?: Maybe<String>;
  state_lc_not_starts_with?: Maybe<String>;
  state_lc_ends_with?: Maybe<String>;
  state_lc_not_ends_with?: Maybe<String>;
  stripeCoachCode?: Maybe<String>;
  stripeCoachCode_not?: Maybe<String>;
  stripeCoachCode_in?: Maybe<String[] | String>;
  stripeCoachCode_not_in?: Maybe<String[] | String>;
  stripeCoachCode_lt?: Maybe<String>;
  stripeCoachCode_lte?: Maybe<String>;
  stripeCoachCode_gt?: Maybe<String>;
  stripeCoachCode_gte?: Maybe<String>;
  stripeCoachCode_contains?: Maybe<String>;
  stripeCoachCode_not_contains?: Maybe<String>;
  stripeCoachCode_starts_with?: Maybe<String>;
  stripeCoachCode_not_starts_with?: Maybe<String>;
  stripeCoachCode_ends_with?: Maybe<String>;
  stripeCoachCode_not_ends_with?: Maybe<String>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
  OR?: Maybe<UserWhereInput[] | UserWhereInput>;
  NOT?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export interface UserUpdateManyMutationInput {
  first_name?: Maybe<String>;
  last_name?: Maybe<String>;
  email?: Maybe<String>;
  password?: Maybe<String>;
  city?: Maybe<String>;
  state?: Maybe<String>;
  gender?: Maybe<String>;
  bio?: Maybe<String>;
  image_url?: Maybe<String>;
  portfolio_url?: Maybe<String>;
  linkedin_url?: Maybe<String>;
  github_url?: Maybe<String>;
  personal_url?: Maybe<String>;
  blog_url?: Maybe<String>;
  twitter_url?: Maybe<String>;
  activated_stripe?: Maybe<Boolean>;
  fn_lc?: Maybe<String>;
  ln_lc?: Maybe<String>;
  city_lc?: Maybe<String>;
  state_lc?: Maybe<String>;
  stripeCoachCode?: Maybe<String>;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  OR?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  NOT?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  email?: Maybe<String>;
  stripeCoachCode?: Maybe<String>;
}>;

export interface NodeNode {
  id: ID_Output;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface UserPreviousValues {
  id: ID_Output;
  first_name: String;
  last_name: String;
  email: String;
  password: String;
  city: String;
  state: String;
  gender?: String;
  bio?: String;
  image_url?: String;
  portfolio_url?: String;
  linkedin_url?: String;
  github_url?: String;
  personal_url?: String;
  blog_url?: String;
  twitter_url?: String;
  activated_stripe?: Boolean;
  fn_lc: String;
  ln_lc: String;
  city_lc: String;
  state_lc: String;
  stripeCoachCode?: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  first_name: () => Promise<String>;
  last_name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  city: () => Promise<String>;
  state: () => Promise<String>;
  gender: () => Promise<String>;
  bio: () => Promise<String>;
  image_url: () => Promise<String>;
  portfolio_url: () => Promise<String>;
  linkedin_url: () => Promise<String>;
  github_url: () => Promise<String>;
  personal_url: () => Promise<String>;
  blog_url: () => Promise<String>;
  twitter_url: () => Promise<String>;
  activated_stripe: () => Promise<Boolean>;
  fn_lc: () => Promise<String>;
  ln_lc: () => Promise<String>;
  city_lc: () => Promise<String>;
  state_lc: () => Promise<String>;
  stripeCoachCode: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  first_name: () => Promise<AsyncIterator<String>>;
  last_name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  city: () => Promise<AsyncIterator<String>>;
  state: () => Promise<AsyncIterator<String>>;
  gender: () => Promise<AsyncIterator<String>>;
  bio: () => Promise<AsyncIterator<String>>;
  image_url: () => Promise<AsyncIterator<String>>;
  portfolio_url: () => Promise<AsyncIterator<String>>;
  linkedin_url: () => Promise<AsyncIterator<String>>;
  github_url: () => Promise<AsyncIterator<String>>;
  personal_url: () => Promise<AsyncIterator<String>>;
  blog_url: () => Promise<AsyncIterator<String>>;
  twitter_url: () => Promise<AsyncIterator<String>>;
  activated_stripe: () => Promise<AsyncIterator<Boolean>>;
  fn_lc: () => Promise<AsyncIterator<String>>;
  ln_lc: () => Promise<AsyncIterator<String>>;
  city_lc: () => Promise<AsyncIterator<String>>;
  state_lc: () => Promise<AsyncIterator<String>>;
  stripeCoachCode: () => Promise<AsyncIterator<String>>;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface User {
  id: ID_Output;
  first_name: String;
  last_name: String;
  email: String;
  password: String;
  city: String;
  state: String;
  gender?: String;
  bio?: String;
  image_url?: String;
  portfolio_url?: String;
  linkedin_url?: String;
  github_url?: String;
  personal_url?: String;
  blog_url?: String;
  twitter_url?: String;
  activated_stripe?: Boolean;
  fn_lc: String;
  ln_lc: String;
  city_lc: String;
  state_lc: String;
  stripeCoachCode?: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  first_name: () => Promise<String>;
  last_name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  city: () => Promise<String>;
  state: () => Promise<String>;
  gender: () => Promise<String>;
  bio: () => Promise<String>;
  image_url: () => Promise<String>;
  portfolio_url: () => Promise<String>;
  linkedin_url: () => Promise<String>;
  github_url: () => Promise<String>;
  personal_url: () => Promise<String>;
  blog_url: () => Promise<String>;
  twitter_url: () => Promise<String>;
  activated_stripe: () => Promise<Boolean>;
  fn_lc: () => Promise<String>;
  ln_lc: () => Promise<String>;
  city_lc: () => Promise<String>;
  state_lc: () => Promise<String>;
  stripeCoachCode: () => Promise<String>;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  first_name: () => Promise<AsyncIterator<String>>;
  last_name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  city: () => Promise<AsyncIterator<String>>;
  state: () => Promise<AsyncIterator<String>>;
  gender: () => Promise<AsyncIterator<String>>;
  bio: () => Promise<AsyncIterator<String>>;
  image_url: () => Promise<AsyncIterator<String>>;
  portfolio_url: () => Promise<AsyncIterator<String>>;
  linkedin_url: () => Promise<AsyncIterator<String>>;
  github_url: () => Promise<AsyncIterator<String>>;
  personal_url: () => Promise<AsyncIterator<String>>;
  blog_url: () => Promise<AsyncIterator<String>>;
  twitter_url: () => Promise<AsyncIterator<String>>;
  activated_stripe: () => Promise<AsyncIterator<Boolean>>;
  fn_lc: () => Promise<AsyncIterator<String>>;
  ln_lc: () => Promise<AsyncIterator<String>>;
  city_lc: () => Promise<AsyncIterator<String>>;
  state_lc: () => Promise<AsyncIterator<String>>;
  stripeCoachCode: () => Promise<AsyncIterator<String>>;
}

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  first_name: () => Promise<String>;
  last_name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  city: () => Promise<String>;
  state: () => Promise<String>;
  gender: () => Promise<String>;
  bio: () => Promise<String>;
  image_url: () => Promise<String>;
  portfolio_url: () => Promise<String>;
  linkedin_url: () => Promise<String>;
  github_url: () => Promise<String>;
  personal_url: () => Promise<String>;
  blog_url: () => Promise<String>;
  twitter_url: () => Promise<String>;
  activated_stripe: () => Promise<Boolean>;
  fn_lc: () => Promise<String>;
  ln_lc: () => Promise<String>;
  city_lc: () => Promise<String>;
  state_lc: () => Promise<String>;
  stripeCoachCode: () => Promise<String>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "User",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
