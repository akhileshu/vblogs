describe("Author dashboard route features", () => {
  before(() => {
    Cypress.on("uncaught:exception", () => {
      // returning false here prevents Cypress from failing the test
      return false;
    });
  });
  beforeEach(() => {
    // Log in and set up the session as each test has its own state
    cy.login();
    cy.visit("/dashboard");
    cy.wait("@session");
    cy.getHeading(/dashboard/i).should("be.visible");
  });

  describe("My blogs", () => {
    beforeEach(() => {
      cy.getHeading(/my blogs/i).should("be.visible");
    });
    it("navigates to the first two blogs and verifies their titles", () => {
      cy.get("[data-test-id^='blog-item-']").should("have.length.at.least", 2);
      testBlogNavigation(0);
      testBlogNavigation(1);
    });
  });
});

function testBlogNavigation(index: number) {
  cy.get("[data-test-id^='blog-link-']")
    .should("be.visible")
    .should("have.length.greaterThan", index)
    .eq(index)
    .then(($blogLink) => {
      // const blogTitle = $blogLink.text();
      const blogHref = $blogLink.attr("href");

      cy.wrap($blogLink).click();
      cy.url({ timeout: 20000 }).should("include", blogHref);
      cy.contains(/index/i, { timeout: 20000 }).should("be.visible");

      cy.go("back");
    });
}

/* 
use should - when it may take time to proceed - netwrok delay before rendering content on ui
pass timeout - whenever something takes too long , avoid passing timeout inside should()
*/
