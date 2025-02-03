/// <reference types="cypress" />
// https://github.com/nextauthjs/next-auth/discussions/2053
Cypress.Commands.add("login", () => {
  cy.intercept("/api/auth/session", { fixture: "session.json" }).as("session");
  const token = Cypress.env(
    "NEXT_PUBLIC_CYPRESS_NEXT_AUTH_SESSION_TOKEN_AUTHOR"
  );

  // Set the cookie for cypress.
  // It has to be a valid cookie so next-auth can decrypt it and confirm its validity.
  // This step can probably/hopefully be improved.
  // We are currently unsure about this part.
  // We need to refresh this cookie once in a while.
  // We are unsure if this is true and if true, when it needs to be refreshed.

  // Cypress.Cookies.preserveOnce("next-auth.session-token");
  cy.session("user-session", () => {
    cy.setCookie("next-auth.session-token", token);
  });
});

Cypress.Commands.add("getHeading", (text, options = {}) => {
  return cy.get("h1, h2, h3, h4, h5, h6", options).contains(text, options);
});


// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
