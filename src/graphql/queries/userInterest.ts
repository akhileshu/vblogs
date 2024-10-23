// lib/queries/userInterest.ts
import { gql } from '@apollo/client';

export const GET_USER_INTERESTS = gql`
  query GetUserInterests {
    getUserInterests {
      success
      message
      status
      data{
        id
      }
    }
  }
`;

export const GET_USER_INTEREST_BY_ID = gql`
  query GetUserInterestById($where: UserInterestWhereUniqueInput!) {
    getUserInterestById(where: $where) {
      success
      message
      status
      data{
        id
      }      
    }
  }
`;
