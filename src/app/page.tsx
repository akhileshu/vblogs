"use client";
import {
  GetUsersQuery,
  CreateUserMutation,
  CreateUserMutationVariables,
} from "@/generated/graphql";
import { CREATE_USER } from "@/graphql/mutations/user";
import { GET_USERS } from "@/graphql/queries/user";
import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";

export default function Home() {
  const { loading, error, data } = useQuery<GetUsersQuery>(GET_USERS);
  const [createUser] = useMutation<
    CreateUserMutation,
    CreateUserMutationVariables
  >(CREATE_USER, {
    refetchQueries: [{ query: GET_USERS }],
  });
  const [name, setName] = useState(1);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser({ variables: { name, email } });
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
        {error && <p>Error: {error.message}</p>}
        {data &&
          data.getUsers.map((user) => (
            <div key={user.id}>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
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
