import { IFipeInfo } from "./../../src/types/fipe";
describe("template spec", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://parallelum.com.br/fipe/api/v2/**/brands").as(
      "getBrands"
    );

    cy.intercept(
      "GET",
      "https://parallelum.com.br/fipe/api/v2/**/brands/**/models"
    ).as("getModels");

    cy.intercept(
      "GET",
      "https://parallelum.com.br/fipe/api/v2/**/brands/**/models/**/years"
    ).as("getYears");

    cy.intercept(
      "GET",
      "https://parallelum.com.br/fipe/api/v2/**/brands/**/models/**/years/**"
    ).as("getFullData");
  });

  it("Test main workflow", () => {
    cy.visit("/search?vehicleType=cars");
    cy.wait("@getBrands").then((interception) => {
      const responseData = interception.response.body;
      cy.get('[data-testid="select-jest-test"]:first').click();
      cy.get('[data-testid="label-name-1"]').click();
    });

    cy.wait("@getModels").then((interception) => {
      cy.get('[data-testid="select-jest-test"]:eq(1)').click();
      cy.get('[data-testid="label-name-1"]').click();
    });

    cy.wait("@getYears").then((interception) => {
      const responseData = interception.response.body;
      cy.get('[data-testid="select-jest-test"]:eq(2)').click();
      cy.get(`[data-testid="label-name-${responseData[0].code}"]`).click();
      cy.get(`[data-testid="buttonEnter"]`).click();
    });

    cy.wait("@getFullData").then((interception) => {
      const responseData: IFipeInfo = interception.response.body;
      cy.log("Intercepted Data Brands:", responseData.price);
    });
  });

  it("Must fail and redirect", () => {
    cy.visit("/search?vehicleType=caxzzzzzzzzzzzzzz");

    cy.wait("@getBrands").then((interception) => {
      const statusCode = interception.response.statusCode;
      cy.log("Intercepted Data:", statusCode);
      cy.expect(statusCode).not.to.equal(200);
      cy.get(".MuiAlert-message").contains("invalid vehicle type");
    });
  });
});
