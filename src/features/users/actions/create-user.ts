"use server";

import { createResponse } from "@/shared/lib/response";
import { catchErrorTyped } from "@/shared/lib/errors/catchErrorTyped";

export async function createUser() {
  const response = createResponse();
  return await catchErrorTyped(updateUser());
}

export async function updateUser() {
  return "updateUser";
}

const obj = {
  success: false,
  message: "msg",
  status: "validation failed",
  error: null,
  data: null,
};

/* 
export async function fetchUserByIdAction(
  userId: string
): Promise<[undefined, { id: string; name: string; email: string }] | [Error]> {
  return await catchErrorTyped(
    (async () => {
      ...
      return user;
    })(),
    [NotFoundError, ValidationError]
  );
}
  
use in client
const [error, user] = await fetchUserByIdAction(params.id);

*/
