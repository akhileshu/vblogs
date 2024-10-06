import { gql } from "@apollo/client";
import { BASE_RESPONSE_FIELDS } from "../fragments/shared";

export const CREATE_USER = gql`
  ${BASE_RESPONSE_FIELDS}
  # Include the fragment

  mutation CreateUser($name: String!, $email: String!) {
    createUser(name: $name, email: $email) {
      ...BaseResponseFields # Use the base response fields
      data {
        id
        name
        email
      }
    }
  }
`;
