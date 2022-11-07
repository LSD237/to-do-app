describe('Base functionality test', () => {
  it('App is running', () => {
    cy.visit('/')
    cy.get('h1').should('have.text', 'Приложение "Список дел"').should('be.visible');
    cy.get('h2').should('have.text', 'To-Do List').should('be.visible');
    cy.get('input[type=text]').should('exist').should('have.value', '').and('be.visible');
    cy.get('ul').should('exist').and('be.visible');
    cy.get('li').should('have.length', 4);
    cy.get('li span').should('have.length', 4).eq(0).should('have.text', 'Проснулись');
    cy.get('span[class*=panel__counter]').should('exist').should('have.text', '2 items left');
    cy.get('button[class*=panel__btn]').should('exist').should('have.length', 4);
  });

  it('Should correctly add items to list', () => {
    cy.get('form button').should('not.exist');
    cy.get('input[type=text]').type('Сходить в магазин');
    cy.get('form button').should('exist').click();
    cy.get('input[type=text]').should('have.value', '');
    cy.get('form button').should('not.exist');

    cy.get('input[type=text]').type('Поиграть с котом');
    cy.get('form button').should('exist').click();
    cy.get('input[type=text]').type('Написать тесты для приложения');
    cy.get('form button').should('exist').click();
  });

  it('Should correctly render counter of active todos', () => {
    cy.get('input[type=checkbox]').should('have.length', 7);
    cy.get('input[type=checkbox]:checked').should('have.length', 2);
    cy.get('span[class*=panel__counter]').should('have.text', '5 items left');
    cy.get('input[type=checkbox]').eq(2).should('not.be.checked').click().should('be.checked');
    cy.get('input[type=checkbox]').eq(3).should('not.be.checked').click().should('be.checked');
    cy.get('input[type=checkbox]:checked').should('have.length', 4);
    cy.get('span[class*=panel__counter]').should('have.text', '3 items left');
  });

  it('Should correctly filter todos', () => {
    cy.get('input[type=checkbox]').should('have.length', 7);
    cy.get('input[type=checkbox]:checked').should('have.length', 4);
    cy.get('button[class*=panel__btn]').eq(1).click();
    cy.get('input[type=checkbox]').should('have.length', 3);
    cy.get('button[class*=panel__btn]').eq(2).click();
    cy.get('input[type=checkbox]').should('have.length', 4);
    cy.get('button[class*=panel__btn]').eq(0).click();
    cy.get('input[type=checkbox]').should('have.length', 7);
  })

  it('Should correctly change active btn class', () => {
    cy.get('button[class*=panel__btn]')
      .eq(0)
      .should('have.css', 'color', 'rgb(0, 0, 0)')
      .and('have.css', 'background-color', 'rgb(245, 216, 180)')
    cy.get('button[class*=panel__btn]')
      .eq(1)
      .click()
      .should('have.css', 'color', 'rgb(0, 0, 0)')
      .and('have.css', 'background-color', 'rgb(245, 216, 180)');
    cy.get('button[class*=panel__btn]')
      .eq(2)
      .click()
      .should('have.css', 'color', 'rgb(0, 0, 0)')
      .and('have.css', 'background-color', 'rgb(245, 216, 180)');
    cy.get('button[class*=panel__btn]')
      .eq(0)
      .should('have.css', 'color', 'rgb(255, 255, 255)')
      .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
      .click();
  });

  it('Should correctly clear completed', () => {
    cy.get('input[type=checkbox]:checked').should('have.length', 4);
    cy.get('button[class*=panel__btn]').eq(3).click();
    cy.get('input[type=checkbox]:checked').should('not.exist');
  });

  it('Should correctly remove items', () => {
    cy.get('li > button').eq(0).contains('X').click();
    cy.get('li > button').eq(0).contains('X').click();
    cy.get('input[type=checkbox]').click();
  });

});
