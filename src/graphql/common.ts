import { gql } from "@apollo/client";

// Fragment for the base response
export const BASE_RESPONSE_FIELDS = gql`
  fragment BaseResponseFields on BaseResponse {
    success
    message
    status
  }
`;

export interface GraphQLContext {
  isAuthenticated: boolean;
  userId: string;
  role: string;
} 

import { z } from "zod";

// Define Zod schema for input validation
export const createUserSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
});


