describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should render the home page", () => {
    cy.contains("hello").should("exist");
  });
});

export {}