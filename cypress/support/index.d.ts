// cypress/support/index.d.ts
declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Finds a heading element (h1, h2, h3, h4, h5, h6) containing the specified text.
     * @param text - The text (string or regex) to match in the heading.
     */
    getHeading(text: string | RegExp): Chainable<JQuery<HTMLElement>>;
    login():void
  }
}
