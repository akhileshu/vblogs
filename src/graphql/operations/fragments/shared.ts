import { gql } from "@apollo/client";

// Fragment for the base response
export const BASE_RESPONSE_FIELDS = gql`
  fragment BaseResponseFields on BaseResponse {
    success
    message
    status
  }
`;
