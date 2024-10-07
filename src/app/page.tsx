"use client";
import {
  CreateUserMutation,
  CreateUserMutationVariables,
  GetUsersQuery,
} from "@/generated/graphql";
import { CREATE_USER } from "@/graphql/operations/mutations/user";
import { GET_USERS } from "@/graphql/operations/queries/user";
import { useMutation, useQuery } from "@apollo/client";
import { FormEvent, useState } from "react";

export default function Home() {
  const { loading, error, data } = useQuery<GetUsersQuery>(GET_USERS);
  const users = data?.getUsers?.data;
  const getUsersErrorMessage = data?.getUsers.message || error?.message;
  console.log({ getUsersResponse: data?.getUsers });

  const [createUser] = useMutation<
    CreateUserMutation,
    CreateUserMutationVariables
  >(CREATE_USER, {
    refetchQueries: [{ query: GET_USERS }],
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await createUser({ variables: { name, email } });
      const status = data?.createUser.success ? "success" : "failure";
      console.log({ status, message: data?.createUser.message });

      setName("");
      setEmail("");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>
        <h1>List of Users</h1>
        {loading && <p>Loading...</p>}
        {getUsersErrorMessage && <p>Error: {getUsersErrorMessage}</p>}

        {users?.map((user, index) => (
          <div key={index}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <hr />
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          className="text-black"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="text-black"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}
