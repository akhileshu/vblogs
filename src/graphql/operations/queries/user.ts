import { gql } from "@apollo/client";
import { BASE_RESPONSE_FIELDS } from "../fragments/shared";

export const GET_USERS = gql`
  ${BASE_RESPONSE_FIELDS}

  query GetUsers {
    getUsers {
      ...BaseResponseFields
      data {
        id
        name
        email
      }
    }
  }
`;
