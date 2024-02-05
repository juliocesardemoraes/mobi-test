describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");
    // cy.get("#Tipo de veículo-select").click();
    cy.get('[data-testid="select-jest-test"]').click();
    cy.get('[data-testid="label-name-cars"]').click();
    cy.get(".MuiButtonBase-root").contains("Ir para aba de pesquisa").click();
  });
});
