describe('Login Page - happy path', () => {
    const email = 'testuser@example.com'; // Replace with a valid test user email
    const password = 'testpassword'; // Replace with the test user's password

    beforeEach(() => {
      cy.visit('/login');
    });

    it('renders the login page', () => {
      cy.get('form')
        .should('be.visible')
        .within(() => {
          cy.get('input[type="email"]').should('be.visible');
          cy.get('input[type="password"]').should('be.visible');
          cy.get('button[type="submit"]').should('be.visible');
        });
    });

    it('logs in successfully', () => {
      cy.get('input[type="email"]').type(email);
      cy.get('input[type="password"]').type(password);
      cy.get('button[type="submit"]').click();

      // Adjust the assertion below based on the route you expect the user to be redirected to after a successful login
      cy.url().should('include', '/');
    });
  });
  describe('Login Page - validation', () => {
    const invalidEmail = 'invaliduser@example.com';
    const invalidPassword = 'invalidpassword';
    beforeEach(() => {
      cy.visit('/login');
    });

    it('fails validation 5 times and disables login button, flash warning alert present for 5 minutes', () => {
      const failLoginAttempt = () => {
        cy.get('input[type="email"]').clear().type(invalidEmail);
        cy.get('input[type="password"]').clear().type(invalidPassword);
        cy.get('button[type="submit"]').click();
      };

      for (let i = 0; i < 5; i++) {
        failLoginAttempt();
      }

      cy.get('.alert-danger').should('not.exist');
      cy.get('.alert-warning')
        .should('be.visible')
        .and('contain', 'Login disabled for 3 minutes after unsuccessful attempts.');

      cy.get('button[type="submit"]').should('be.disabled');


    });
  });

