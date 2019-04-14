// Code generated by Prisma (prisma@1.30.0). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from 'graphql';
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model,
} from 'prisma-client-lib';
import { typeDefs } from './prisma-schema';

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  role: (where?: RoleWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
  userAccount: (where?: UserAccountWhereInput) => Promise<boolean>;
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

  role: (where: RoleWhereUniqueInput) => RolePromise;
  roles: (
    args?: {
      where?: RoleWhereInput;
      orderBy?: RoleOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Role>;
  rolesConnection: (
    args?: {
      where?: RoleWhereInput;
      orderBy?: RoleOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => RoleConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserPromise;
  users: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<User>;
  usersConnection: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => UserConnectionPromise;
  userAccount: (where: UserAccountWhereUniqueInput) => UserAccountPromise;
  userAccounts: (
    args?: {
      where?: UserAccountWhereInput;
      orderBy?: UserAccountOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<UserAccount>;
  userAccountsConnection: (
    args?: {
      where?: UserAccountWhereInput;
      orderBy?: UserAccountOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => UserAccountConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createRole: (data: RoleCreateInput) => RolePromise;
  updateRole: (
    args: { data: RoleUpdateInput; where: RoleWhereUniqueInput }
  ) => RolePromise;
  updateManyRoles: (
    args: { data: RoleUpdateManyMutationInput; where?: RoleWhereInput }
  ) => BatchPayloadPromise;
  upsertRole: (
    args: {
      where: RoleWhereUniqueInput;
      create: RoleCreateInput;
      update: RoleUpdateInput;
    }
  ) => RolePromise;
  deleteRole: (where: RoleWhereUniqueInput) => RolePromise;
  deleteManyRoles: (where?: RoleWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (
    args: { data: UserUpdateInput; where: UserWhereUniqueInput }
  ) => UserPromise;
  updateManyUsers: (
    args: { data: UserUpdateManyMutationInput; where?: UserWhereInput }
  ) => BatchPayloadPromise;
  upsertUser: (
    args: {
      where: UserWhereUniqueInput;
      create: UserCreateInput;
      update: UserUpdateInput;
    }
  ) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;
  createUserAccount: (data: UserAccountCreateInput) => UserAccountPromise;
  updateUserAccount: (
    args: { data: UserAccountUpdateInput; where: UserAccountWhereUniqueInput }
  ) => UserAccountPromise;
  updateManyUserAccounts: (
    args: {
      data: UserAccountUpdateManyMutationInput;
      where?: UserAccountWhereInput;
    }
  ) => BatchPayloadPromise;
  upsertUserAccount: (
    args: {
      where: UserAccountWhereUniqueInput;
      create: UserAccountCreateInput;
      update: UserAccountUpdateInput;
    }
  ) => UserAccountPromise;
  deleteUserAccount: (where: UserAccountWhereUniqueInput) => UserAccountPromise;
  deleteManyUserAccounts: (
    where?: UserAccountWhereInput
  ) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  role: (
    where?: RoleSubscriptionWhereInput
  ) => RoleSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
  userAccount: (
    where?: UserAccountSubscriptionWhereInput
  ) => UserAccountSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type MutationType = 'CREATED' | 'UPDATED' | 'DELETED';

export type UserOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'firstName_ASC'
  | 'firstName_DESC'
  | 'lastName_ASC'
  | 'lastName_DESC'
  | 'email_ASC'
  | 'email_DESC'
  | 'password_ASC'
  | 'password_DESC'
  | 'phoneCountryCode_ASC'
  | 'phoneCountryCode_DESC'
  | 'phone_ASC'
  | 'phone_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'deletedAt_ASC'
  | 'deletedAt_DESC';

export type RoleOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC';

export type UserAccountOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'confirmed_ASC'
  | 'confirmed_DESC'
  | 'confirmedToken_ASC'
  | 'confirmedToken_DESC'
  | 'confirmedExpires_ASC'
  | 'confirmedExpires_DESC'
  | 'locked_ASC'
  | 'locked_DESC'
  | 'lockedToken_ASC'
  | 'lockedToken_DESC'
  | 'lockedExpires_ASC'
  | 'lockedExpires_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'deletedAt_ASC'
  | 'deletedAt_DESC';

export type RoleName = 'USER';

export interface UserAccountCreateInput {
  user: UserCreateOneWithoutUserAccountInput;
  confirmed?: Boolean;
  confirmedToken?: String;
  confirmedExpires?: String;
  locked?: Boolean;
  lockedToken?: String;
  lockedExpires?: String;
  deletedAt?: DateTimeInput;
}

export interface UserUpdateInput {
  role?: RoleUpdateOneRequiredInput;
  userAccount?: UserAccountUpdateOneRequiredWithoutUserInput;
  firstName?: String;
  lastName?: String;
  email?: String;
  password?: String;
  phoneCountryCode?: String;
  phone?: String;
  deletedAt?: DateTimeInput;
}

export type UserAccountWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  confirmedToken?: String;
  lockedToken?: String;
}>;

export type RoleWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface RoleWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: RoleName;
  name_not?: RoleName;
  name_in?: RoleName[] | RoleName;
  name_not_in?: RoleName[] | RoleName;
  AND?: RoleWhereInput[] | RoleWhereInput;
  OR?: RoleWhereInput[] | RoleWhereInput;
  NOT?: RoleWhereInput[] | RoleWhereInput;
}

export interface RoleSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: RoleWhereInput;
  AND?: RoleSubscriptionWhereInput[] | RoleSubscriptionWhereInput;
  OR?: RoleSubscriptionWhereInput[] | RoleSubscriptionWhereInput;
  NOT?: RoleSubscriptionWhereInput[] | RoleSubscriptionWhereInput;
}

export interface UserAccountUpdateWithoutUserDataInput {
  confirmed?: Boolean;
  confirmedToken?: String;
  confirmedExpires?: String;
  locked?: Boolean;
  lockedToken?: String;
  lockedExpires?: String;
  deletedAt?: DateTimeInput;
}

export interface UserUpsertWithoutUserAccountInput {
  update: UserUpdateWithoutUserAccountDataInput;
  create: UserCreateWithoutUserAccountInput;
}

export interface UserAccountUpdateOneRequiredWithoutUserInput {
  create?: UserAccountCreateWithoutUserInput;
  update?: UserAccountUpdateWithoutUserDataInput;
  upsert?: UserAccountUpsertWithoutUserInput;
  connect?: UserAccountWhereUniqueInput;
}

export interface UserUpdateOneRequiredWithoutUserAccountInput {
  create?: UserCreateWithoutUserAccountInput;
  update?: UserUpdateWithoutUserAccountDataInput;
  upsert?: UserUpsertWithoutUserAccountInput;
  connect?: UserWhereUniqueInput;
}

export interface RoleUpsertNestedInput {
  update: RoleUpdateDataInput;
  create: RoleCreateInput;
}

export interface UserAccountUpdateInput {
  user?: UserUpdateOneRequiredWithoutUserAccountInput;
  confirmed?: Boolean;
  confirmedToken?: String;
  confirmedExpires?: String;
  locked?: Boolean;
  lockedToken?: String;
  lockedExpires?: String;
  deletedAt?: DateTimeInput;
}

export interface UserCreateOneWithoutUserAccountInput {
  create?: UserCreateWithoutUserAccountInput;
  connect?: UserWhereUniqueInput;
}

export interface UserAccountWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  user?: UserWhereInput;
  confirmed?: Boolean;
  confirmed_not?: Boolean;
  confirmedToken?: String;
  confirmedToken_not?: String;
  confirmedToken_in?: String[] | String;
  confirmedToken_not_in?: String[] | String;
  confirmedToken_lt?: String;
  confirmedToken_lte?: String;
  confirmedToken_gt?: String;
  confirmedToken_gte?: String;
  confirmedToken_contains?: String;
  confirmedToken_not_contains?: String;
  confirmedToken_starts_with?: String;
  confirmedToken_not_starts_with?: String;
  confirmedToken_ends_with?: String;
  confirmedToken_not_ends_with?: String;
  confirmedExpires?: String;
  confirmedExpires_not?: String;
  confirmedExpires_in?: String[] | String;
  confirmedExpires_not_in?: String[] | String;
  confirmedExpires_lt?: String;
  confirmedExpires_lte?: String;
  confirmedExpires_gt?: String;
  confirmedExpires_gte?: String;
  confirmedExpires_contains?: String;
  confirmedExpires_not_contains?: String;
  confirmedExpires_starts_with?: String;
  confirmedExpires_not_starts_with?: String;
  confirmedExpires_ends_with?: String;
  confirmedExpires_not_ends_with?: String;
  locked?: Boolean;
  locked_not?: Boolean;
  lockedToken?: String;
  lockedToken_not?: String;
  lockedToken_in?: String[] | String;
  lockedToken_not_in?: String[] | String;
  lockedToken_lt?: String;
  lockedToken_lte?: String;
  lockedToken_gt?: String;
  lockedToken_gte?: String;
  lockedToken_contains?: String;
  lockedToken_not_contains?: String;
  lockedToken_starts_with?: String;
  lockedToken_not_starts_with?: String;
  lockedToken_ends_with?: String;
  lockedToken_not_ends_with?: String;
  lockedExpires?: String;
  lockedExpires_not?: String;
  lockedExpires_in?: String[] | String;
  lockedExpires_not_in?: String[] | String;
  lockedExpires_lt?: String;
  lockedExpires_lte?: String;
  lockedExpires_gt?: String;
  lockedExpires_gte?: String;
  lockedExpires_contains?: String;
  lockedExpires_not_contains?: String;
  lockedExpires_starts_with?: String;
  lockedExpires_not_starts_with?: String;
  lockedExpires_ends_with?: String;
  lockedExpires_not_ends_with?: String;
  updatedAt?: DateTimeInput;
  updatedAt_not?: DateTimeInput;
  updatedAt_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_not_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_lt?: DateTimeInput;
  updatedAt_lte?: DateTimeInput;
  updatedAt_gt?: DateTimeInput;
  updatedAt_gte?: DateTimeInput;
  createdAt?: DateTimeInput;
  createdAt_not?: DateTimeInput;
  createdAt_in?: DateTimeInput[] | DateTimeInput;
  createdAt_not_in?: DateTimeInput[] | DateTimeInput;
  createdAt_lt?: DateTimeInput;
  createdAt_lte?: DateTimeInput;
  createdAt_gt?: DateTimeInput;
  createdAt_gte?: DateTimeInput;
  deletedAt?: DateTimeInput;
  deletedAt_not?: DateTimeInput;
  deletedAt_in?: DateTimeInput[] | DateTimeInput;
  deletedAt_not_in?: DateTimeInput[] | DateTimeInput;
  deletedAt_lt?: DateTimeInput;
  deletedAt_lte?: DateTimeInput;
  deletedAt_gt?: DateTimeInput;
  deletedAt_gte?: DateTimeInput;
  AND?: UserAccountWhereInput[] | UserAccountWhereInput;
  OR?: UserAccountWhereInput[] | UserAccountWhereInput;
  NOT?: UserAccountWhereInput[] | UserAccountWhereInput;
}

export interface RoleCreateInput {
  name: RoleName;
}

export interface UserAccountSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UserAccountWhereInput;
  AND?: UserAccountSubscriptionWhereInput[] | UserAccountSubscriptionWhereInput;
  OR?: UserAccountSubscriptionWhereInput[] | UserAccountSubscriptionWhereInput;
  NOT?: UserAccountSubscriptionWhereInput[] | UserAccountSubscriptionWhereInput;
}

export interface RoleUpdateInput {
  name?: RoleName;
}

export interface UserAccountUpsertWithoutUserInput {
  update: UserAccountUpdateWithoutUserDataInput;
  create: UserAccountCreateWithoutUserInput;
}

export interface RoleUpdateManyMutationInput {
  name?: RoleName;
}

export interface UserUpdateWithoutUserAccountDataInput {
  role?: RoleUpdateOneRequiredInput;
  firstName?: String;
  lastName?: String;
  email?: String;
  password?: String;
  phoneCountryCode?: String;
  phone?: String;
  deletedAt?: DateTimeInput;
}

export interface RoleUpdateDataInput {
  name?: RoleName;
}

export interface UserCreateWithoutUserAccountInput {
  role: RoleCreateOneInput;
  firstName?: String;
  lastName?: String;
  email: String;
  password: String;
  phoneCountryCode?: String;
  phone?: String;
  deletedAt?: DateTimeInput;
}

export interface RoleUpdateOneRequiredInput {
  create?: RoleCreateInput;
  update?: RoleUpdateDataInput;
  upsert?: RoleUpsertNestedInput;
  connect?: RoleWhereUniqueInput;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UserWhereInput;
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
}

export interface UserAccountCreateWithoutUserInput {
  confirmed?: Boolean;
  confirmedToken?: String;
  confirmedExpires?: String;
  locked?: Boolean;
  lockedToken?: String;
  lockedExpires?: String;
  deletedAt?: DateTimeInput;
}

export interface UserAccountCreateOneWithoutUserInput {
  create?: UserAccountCreateWithoutUserInput;
  connect?: UserAccountWhereUniqueInput;
}

export interface RoleCreateOneInput {
  create?: RoleCreateInput;
  connect?: RoleWhereUniqueInput;
}

export interface UserCreateInput {
  role: RoleCreateOneInput;
  userAccount: UserAccountCreateOneWithoutUserInput;
  firstName?: String;
  lastName?: String;
  email: String;
  password: String;
  phoneCountryCode?: String;
  phone?: String;
  deletedAt?: DateTimeInput;
}

export interface UserUpdateManyMutationInput {
  firstName?: String;
  lastName?: String;
  email?: String;
  password?: String;
  phoneCountryCode?: String;
  phone?: String;
  deletedAt?: DateTimeInput;
}

export interface UserWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  role?: RoleWhereInput;
  userAccount?: UserAccountWhereInput;
  firstName?: String;
  firstName_not?: String;
  firstName_in?: String[] | String;
  firstName_not_in?: String[] | String;
  firstName_lt?: String;
  firstName_lte?: String;
  firstName_gt?: String;
  firstName_gte?: String;
  firstName_contains?: String;
  firstName_not_contains?: String;
  firstName_starts_with?: String;
  firstName_not_starts_with?: String;
  firstName_ends_with?: String;
  firstName_not_ends_with?: String;
  lastName?: String;
  lastName_not?: String;
  lastName_in?: String[] | String;
  lastName_not_in?: String[] | String;
  lastName_lt?: String;
  lastName_lte?: String;
  lastName_gt?: String;
  lastName_gte?: String;
  lastName_contains?: String;
  lastName_not_contains?: String;
  lastName_starts_with?: String;
  lastName_not_starts_with?: String;
  lastName_ends_with?: String;
  lastName_not_ends_with?: String;
  email?: String;
  email_not?: String;
  email_in?: String[] | String;
  email_not_in?: String[] | String;
  email_lt?: String;
  email_lte?: String;
  email_gt?: String;
  email_gte?: String;
  email_contains?: String;
  email_not_contains?: String;
  email_starts_with?: String;
  email_not_starts_with?: String;
  email_ends_with?: String;
  email_not_ends_with?: String;
  password?: String;
  password_not?: String;
  password_in?: String[] | String;
  password_not_in?: String[] | String;
  password_lt?: String;
  password_lte?: String;
  password_gt?: String;
  password_gte?: String;
  password_contains?: String;
  password_not_contains?: String;
  password_starts_with?: String;
  password_not_starts_with?: String;
  password_ends_with?: String;
  password_not_ends_with?: String;
  phoneCountryCode?: String;
  phoneCountryCode_not?: String;
  phoneCountryCode_in?: String[] | String;
  phoneCountryCode_not_in?: String[] | String;
  phoneCountryCode_lt?: String;
  phoneCountryCode_lte?: String;
  phoneCountryCode_gt?: String;
  phoneCountryCode_gte?: String;
  phoneCountryCode_contains?: String;
  phoneCountryCode_not_contains?: String;
  phoneCountryCode_starts_with?: String;
  phoneCountryCode_not_starts_with?: String;
  phoneCountryCode_ends_with?: String;
  phoneCountryCode_not_ends_with?: String;
  phone?: String;
  phone_not?: String;
  phone_in?: String[] | String;
  phone_not_in?: String[] | String;
  phone_lt?: String;
  phone_lte?: String;
  phone_gt?: String;
  phone_gte?: String;
  phone_contains?: String;
  phone_not_contains?: String;
  phone_starts_with?: String;
  phone_not_starts_with?: String;
  phone_ends_with?: String;
  phone_not_ends_with?: String;
  updatedAt?: DateTimeInput;
  updatedAt_not?: DateTimeInput;
  updatedAt_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_not_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_lt?: DateTimeInput;
  updatedAt_lte?: DateTimeInput;
  updatedAt_gt?: DateTimeInput;
  updatedAt_gte?: DateTimeInput;
  createdAt?: DateTimeInput;
  createdAt_not?: DateTimeInput;
  createdAt_in?: DateTimeInput[] | DateTimeInput;
  createdAt_not_in?: DateTimeInput[] | DateTimeInput;
  createdAt_lt?: DateTimeInput;
  createdAt_lte?: DateTimeInput;
  createdAt_gt?: DateTimeInput;
  createdAt_gte?: DateTimeInput;
  deletedAt?: DateTimeInput;
  deletedAt_not?: DateTimeInput;
  deletedAt_in?: DateTimeInput[] | DateTimeInput;
  deletedAt_not_in?: DateTimeInput[] | DateTimeInput;
  deletedAt_lt?: DateTimeInput;
  deletedAt_lte?: DateTimeInput;
  deletedAt_gt?: DateTimeInput;
  deletedAt_gte?: DateTimeInput;
  AND?: UserWhereInput[] | UserWhereInput;
  OR?: UserWhereInput[] | UserWhereInput;
  NOT?: UserWhereInput[] | UserWhereInput;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  email?: String;
}>;

export interface UserAccountUpdateManyMutationInput {
  confirmed?: Boolean;
  confirmedToken?: String;
  confirmedExpires?: String;
  locked?: Boolean;
  lockedToken?: String;
  lockedExpires?: String;
  deletedAt?: DateTimeInput;
}

export interface NodeNode {
  id: ID_Output;
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

export interface RoleEdge {
  node: Role;
  cursor: String;
}

export interface RoleEdgePromise extends Promise<RoleEdge>, Fragmentable {
  node: <T = RolePromise>() => T;
  cursor: () => Promise<String>;
}

export interface RoleEdgeSubscription
  extends Promise<AsyncIterator<RoleEdge>>,
    Fragmentable {
  node: <T = RoleSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface UserAccountPreviousValues {
  id: ID_Output;
  confirmed: Boolean;
  confirmedToken?: String;
  confirmedExpires?: String;
  locked: Boolean;
  lockedToken?: String;
  lockedExpires?: String;
  updatedAt: DateTimeOutput;
  createdAt: DateTimeOutput;
  deletedAt?: DateTimeOutput;
}

export interface UserAccountPreviousValuesPromise
  extends Promise<UserAccountPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  confirmed: () => Promise<Boolean>;
  confirmedToken: () => Promise<String>;
  confirmedExpires: () => Promise<String>;
  locked: () => Promise<Boolean>;
  lockedToken: () => Promise<String>;
  lockedExpires: () => Promise<String>;
  updatedAt: () => Promise<DateTimeOutput>;
  createdAt: () => Promise<DateTimeOutput>;
  deletedAt: () => Promise<DateTimeOutput>;
}

export interface UserAccountPreviousValuesSubscription
  extends Promise<AsyncIterator<UserAccountPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  confirmed: () => Promise<AsyncIterator<Boolean>>;
  confirmedToken: () => Promise<AsyncIterator<String>>;
  confirmedExpires: () => Promise<AsyncIterator<String>>;
  locked: () => Promise<AsyncIterator<Boolean>>;
  lockedToken: () => Promise<AsyncIterator<String>>;
  lockedExpires: () => Promise<AsyncIterator<String>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  deletedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface AggregateRole {
  count: Int;
}

export interface AggregateRolePromise
  extends Promise<AggregateRole>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateRoleSubscription
  extends Promise<AsyncIterator<AggregateRole>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
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

export interface Role {
  id: ID_Output;
  name: RoleName;
}

export interface RolePromise extends Promise<Role>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<RoleName>;
}

export interface RoleSubscription
  extends Promise<AsyncIterator<Role>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<RoleName>>;
}

export interface AggregateUserAccount {
  count: Int;
}

export interface AggregateUserAccountPromise
  extends Promise<AggregateUserAccount>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserAccountSubscription
  extends Promise<AsyncIterator<AggregateUserAccount>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserAccountEdge {
  node: UserAccount;
  cursor: String;
}

export interface UserAccountEdgePromise
  extends Promise<UserAccountEdge>,
    Fragmentable {
  node: <T = UserAccountPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserAccountEdgeSubscription
  extends Promise<AsyncIterator<UserAccountEdge>>,
    Fragmentable {
  node: <T = UserAccountSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
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

export interface UserAccount {
  id: ID_Output;
  confirmed: Boolean;
  confirmedToken?: String;
  confirmedExpires?: String;
  locked: Boolean;
  lockedToken?: String;
  lockedExpires?: String;
  updatedAt: DateTimeOutput;
  createdAt: DateTimeOutput;
  deletedAt?: DateTimeOutput;
}

export interface UserAccountPromise extends Promise<UserAccount>, Fragmentable {
  id: () => Promise<ID_Output>;
  user: <T = UserPromise>() => T;
  confirmed: () => Promise<Boolean>;
  confirmedToken: () => Promise<String>;
  confirmedExpires: () => Promise<String>;
  locked: () => Promise<Boolean>;
  lockedToken: () => Promise<String>;
  lockedExpires: () => Promise<String>;
  updatedAt: () => Promise<DateTimeOutput>;
  createdAt: () => Promise<DateTimeOutput>;
  deletedAt: () => Promise<DateTimeOutput>;
}

export interface UserAccountSubscription
  extends Promise<AsyncIterator<UserAccount>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  user: <T = UserSubscription>() => T;
  confirmed: () => Promise<AsyncIterator<Boolean>>;
  confirmedToken: () => Promise<AsyncIterator<String>>;
  confirmedExpires: () => Promise<AsyncIterator<String>>;
  locked: () => Promise<AsyncIterator<Boolean>>;
  lockedToken: () => Promise<AsyncIterator<String>>;
  lockedExpires: () => Promise<AsyncIterator<String>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  deletedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface RolePreviousValues {
  id: ID_Output;
  name: RoleName;
}

export interface RolePreviousValuesPromise
  extends Promise<RolePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<RoleName>;
}

export interface RolePreviousValuesSubscription
  extends Promise<AsyncIterator<RolePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<RoleName>>;
}

export interface RoleSubscriptionPayload {
  mutation: MutationType;
  node: Role;
  updatedFields: String[];
  previousValues: RolePreviousValues;
}

export interface RoleSubscriptionPayloadPromise
  extends Promise<RoleSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = RolePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = RolePreviousValuesPromise>() => T;
}

export interface RoleSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<RoleSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = RoleSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = RolePreviousValuesSubscription>() => T;
}

export interface UserPreviousValues {
  id: ID_Output;
  firstName?: String;
  lastName?: String;
  email: String;
  password: String;
  phoneCountryCode?: String;
  phone?: String;
  updatedAt: DateTimeOutput;
  createdAt: DateTimeOutput;
  deletedAt?: DateTimeOutput;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  firstName: () => Promise<String>;
  lastName: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  phoneCountryCode: () => Promise<String>;
  phone: () => Promise<String>;
  updatedAt: () => Promise<DateTimeOutput>;
  createdAt: () => Promise<DateTimeOutput>;
  deletedAt: () => Promise<DateTimeOutput>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  firstName: () => Promise<AsyncIterator<String>>;
  lastName: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  phoneCountryCode: () => Promise<AsyncIterator<String>>;
  phone: () => Promise<AsyncIterator<String>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  deletedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface RoleConnection {
  pageInfo: PageInfo;
  edges: RoleEdge[];
}

export interface RoleConnectionPromise
  extends Promise<RoleConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<RoleEdge>>() => T;
  aggregate: <T = AggregateRolePromise>() => T;
}

export interface RoleConnectionSubscription
  extends Promise<AsyncIterator<RoleConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<RoleEdgeSubscription>>>() => T;
  aggregate: <T = AggregateRoleSubscription>() => T;
}

export interface User {
  id: ID_Output;
  firstName?: String;
  lastName?: String;
  email: String;
  password: String;
  phoneCountryCode?: String;
  phone?: String;
  updatedAt: DateTimeOutput;
  createdAt: DateTimeOutput;
  deletedAt?: DateTimeOutput;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  role: <T = RolePromise>() => T;
  userAccount: <T = UserAccountPromise>() => T;
  firstName: () => Promise<String>;
  lastName: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  phoneCountryCode: () => Promise<String>;
  phone: () => Promise<String>;
  updatedAt: () => Promise<DateTimeOutput>;
  createdAt: () => Promise<DateTimeOutput>;
  deletedAt: () => Promise<DateTimeOutput>;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  role: <T = RoleSubscription>() => T;
  userAccount: <T = UserAccountSubscription>() => T;
  firstName: () => Promise<AsyncIterator<String>>;
  lastName: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  phoneCountryCode: () => Promise<AsyncIterator<String>>;
  phone: () => Promise<AsyncIterator<String>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  deletedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface UserAccountSubscriptionPayload {
  mutation: MutationType;
  node: UserAccount;
  updatedFields: String[];
  previousValues: UserAccountPreviousValues;
}

export interface UserAccountSubscriptionPayloadPromise
  extends Promise<UserAccountSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserAccountPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserAccountPreviousValuesPromise>() => T;
}

export interface UserAccountSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserAccountSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserAccountSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserAccountPreviousValuesSubscription>() => T;
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

export interface UserAccountConnection {
  pageInfo: PageInfo;
  edges: UserAccountEdge[];
}

export interface UserAccountConnectionPromise
  extends Promise<UserAccountConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserAccountEdge>>() => T;
  aggregate: <T = AggregateUserAccountPromise>() => T;
}

export interface UserAccountConnectionSubscription
  extends Promise<AsyncIterator<UserAccountConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserAccountEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserAccountSubscription>() => T;
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: 'Role',
    embedded: false,
  },
  {
    name: 'RoleName',
    embedded: false,
  },
  {
    name: 'User',
    embedded: false,
  },
  {
    name: 'UserAccount',
    embedded: false,
  },
];

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  models,
  endpoint: `http://localhost:4466`,
});
export const prisma = new Prisma();