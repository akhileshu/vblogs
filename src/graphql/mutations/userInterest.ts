import { gql } from '@apollo/client';

export const CREATE_USER_INTEREST = gql`
  mutation CreateUserInterest(
    $createUserInterestInput: UserInterestCreateInput!
  ) {
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

export const UPDATE_USER_INTEREST = gql`
  mutation UpdateUserInterest($where: UserInterestWhereUniqueInput!, $updateUserInterestInput: UserInterestUpdateInput!) {
    updateUserInterest(where: $where, updateUserInterestInput: $updateUserInterestInput) {
      success
      message
      status
      data{
        id
      }
    }
  }
`;

export const DELETE_USER_INTEREST = gql`
  mutation DeleteUserInterest($where: UserInterestWhereUniqueInput!) {
    deleteUserInterest(where: $where) {
      success
      message
      status
      data  
    }
  }
`;
