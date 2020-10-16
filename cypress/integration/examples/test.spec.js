describe('Pizza App', () => {

    beforeEach(() => { 
        cy.visit('http://localhost:3000')
    })

    const nameInput = () => cy.get('input[name="name"]')
    const sizeInput = () => cy.get('select[name="size"]')
    const pepperoniInput = () => cy.get('input[name="pepperoni"]')
    const bellpepperInput = () => cy.get('input[name="bellpepper"]')
    const sausageInput = () => cy.get('input[name="sausage"]')
    const mushroomInput = () => cy.get('input[name="mushroom"]')
    const onionInput = () => cy.get('input[name="onion"]')
    const instructionsInput = () => cy.get('input[name="instructions"]')
    const submitForm = () => cy.get('button[id="submit"]')

    describe('Filling out text inputs & then testing', () => {
        it('can type inside the name input', () => {
            nameInput()
            .should('have.value', '')
            .type('Jose Canseco')
            .should('have.value', 'Jose Canseco')
        })

        it('can type inside the instructions input', () => {
            instructionsInput()
            .should('have.value', '')
            .type('show me the money')
            .should('have.value', 'show me the money')
        })
    })

    describe('Clicking the checkboxes', () => {
        it('can click the checkboxes', () => {
            pepperoniInput().click().should('be.checked')
            bellpepperInput().click().should('be.checked')
            sausageInput().click().should('be.checked')
            mushroomInput().click().should('be.checked')
            onionInput().click().should('be.checked')
        })
    })

    describe('Can fill out the form & submit', () => {
        it('can fill out the form', () => {
            nameInput().type('Alex Rodriguez')
            sizeInput().select('medium')
            pepperoniInput().click()
            bellpepperInput().click()
            sausageInput().click()
            mushroomInput().click()
            onionInput().click()
            submitForm().click()

            cy.contains(/Alex Rodriguez/).should('exist')
            cy.contains(/medium/).should('exist')
            cy.contains(/pepperoni/).should('exist')
            cy.contains(/bellpepper/).should('exist')
            cy.contains(/sausage/).should('exist')
            cy.contains(/mushroom/).should('exist')
            cy.contains(/onion/).should('exist')
        })
    })



})