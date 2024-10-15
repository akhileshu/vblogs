// !warning:eslint-disable
/* eslint-disable @typescript-eslint/no-unsafe-function-type */

import { GetUserResolver, GetUsersResolver } from "@/graphql/resolvers/user";
import { buildSchema, NonEmptyArray } from "type-graphql";

const UserResolvers: NonEmptyArray<Function> = [
  GetUserResolver,
  GetUsersResolver,
];
export const schema = await buildSchema({
  resolvers: [...UserResolvers],
});
