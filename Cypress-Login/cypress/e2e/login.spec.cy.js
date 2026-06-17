describe('template spec', () => {
  beforeEach(()=> {
    cy.visit('https://front.serverest.dev/login')
  })
  it('login correto', () => {
    for(let i=0; i<3; i++){
    cy.get('[data-testid="email"]').type('samueldjt2018@gmail.com');
    cy.get('[data-testid="senha"]').type('@1234');
    cy.get('[data-testid="entrar"]').click();
    
    cy.wait(10000)
    cy.get('[data-testid="logout"]')
      .should('be.visible')
      .click()
      cy.log('Login correto. Encerrando teste')
    }
  })
  it.only('login com senha errada', () => {
    cy.get('[data-testid="email"]').type('samueldjt2018@gmail.com');
    cy.get('[data-testid="senha"]').type('@12345');
    cy.get('[data-testid="entrar"]').click();
    var tempo = false
    cy.get('body', { timeout: 15000 }).then(($body) => {
      if($body.find('[data-testeid="logout"').length > 0){
        cy.get('[data-testid="logout"]').click()
      }
      else{
        cy.log('Login não incorreto. Encerrando teste')
        return;
      }
    })
  })
})