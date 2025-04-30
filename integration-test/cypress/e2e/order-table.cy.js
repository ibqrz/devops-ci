describe('Ordenação da Tabela de Cursos', () => {
    beforeEach(() => {
        cy.visit('https://ibqrz-devops-ci-2402805.azurewebsites.net/cursos.html');
    });

    it('Deve ordenar cursos em ordem alfabética', () => {
        cy.get('th').contains('Curso').click();
        cy.get('th').contains('Curso').click();
        cy.get('table tbody tr:first-child td:first-child')
          .should('contain', 'Administração');
    });
});