describe("Cypress login", () => {
  
  it("should provide a valid session", () => {
    cy.login();
    cy.visit("/dashboard");
    cy.wait("@session");
    // cy.get("[data-test-id='authenticated']")
    //   .should("exist")
    //   .then(() => {
    //     cy.log("Cypress login successful");
    //   });
    cy.contains("Dashboard").should("be.visible");
    // cy.contains("Loading your blogs").should("be.visible"); // need to think how wil i test delay of server actions 
    cy.contains("My Blogs").should("be.visible");
    // Wait for blogs to load and validate the content renders
  });
});

// Test each blog item
//   cy.get("[data-test-id^='blog-link-']").each(($el) => {
//     // Get the blog title and URL from the element
//     const blogTitle = $el.text();
//     const blogHref = $el.attr("href");

//     // Click the blog link
//     cy.wrap($el).should("be.visible").click();

//     // Validate the redirection and the blog title on the new page
//     cy.url().should("include", blogHref);
//     cy.contains(blogTitle).should("be.visible");

//     // Navigate back to the blogs list page
//     cy.go("back");
//   });
