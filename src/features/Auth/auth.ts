/* 
nextauth flow
User Signs In 
→ Provider Authentication (retrieves raw profile data) 
→ signIn Callback (uses raw profile data , returns boollean) 
→ profile Callback (formats profile data for NextAuth ex: adding role property) 
→ JWT Callback (do db operation here)
→ Session Callback 

→ Redirect Callback (to redirect after a sign-in or sign-out.)
can conditionally redirect on basis of role , on error ,
 */
