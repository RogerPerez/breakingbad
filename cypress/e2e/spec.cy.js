describe("homePage tests", () => {
  it("open homepage", () => {
    cy.visit("http://localhost:3000");
  });
  it("shows menu", () => {
    cy.get(".logo").should("include.text", "Breaking Bad Test");
  });
  it("shows character cards", () => {
    cy.get(":nth-child(1) > .characterImage");
  });
  it("navigate to detail on clcik card", () => {
    cy.get(".charactersContainer > :nth-child(1)").click();
    cy.url().should("include", "/character/");
  });
});

describe("detail tests", () => {
  it("open detail page", () => {
    cy.visit("http://localhost:3000/character/1");
  });
  it("it shows card and text", () => {
    cy.get(".detailCard");
    cy.get(".texts");
  });
  it("navigate to home page", () => {
    cy.get(".text").click();
    cy.url().should("include", "http://localhost:3000");
  });
  it("it should redirect when bad url", () => {
    cy.url().then((url) => {
      cy.visit("http://localhost:3000/character/1654");
      cy.url().should("not.eq", url);
    });
  });
});

describe("change language tests", () => {
  it("open homepage", () => {
    cy.visit("http://localhost:3000/");
  });

  it("it should change language", () => {
    cy.get(".language").click();
    cy.url().should("include", "/es");
  });
});

describe("suggestions input test", () => {
  it("open homepage", () => {
    cy.visit("http://localhost:3000/");
  });

  it("it should show suggestions", () => {
    cy.get(".input").type("wa");
    cy.get(".suggestionsInput > :nth-child(2)");
  });

  it("it should navigate on clcik suggestions", () => {
    cy.wait(3000);
    cy.get(".suggestionsInput > :nth-child(2)").click({ force: true });
    cy.url().should("include", "/character/");
  });
});
