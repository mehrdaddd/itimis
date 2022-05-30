import {mount} from 'cypress-react-unit-test'
// # we can do unit test with mount also

describe( "test the whole application" , function () {
        beforeEach(() => {
           // #todo salesTax change to the real URL
            cy.visit("http://localhost:3000/")
        })

        it("test the Header component", function () {
            cy.contains('Sales Tax')
        })

        context('test the  AddProduct component ', () => {
            it("test the inputs in AddProduct component", function () {
                cy.get("input[name='productName']").type("books")
                    .should("have.value", "books")

                cy.get("input[name='number']").type("4")
                    .should("have.value", "4")

                cy.get("input[name='price']").type("25")
                    .should("have.value", "25")

                cy.get("input[name='imported']").click()
                    .should("have.value", "on")

                cy.get("select").select("10")
                    .should("have.value", "10")

                cy.contains('Goods')
                cy.contains('Books')
                cy.contains('Food')
                cy.contains('Medical Products')
        })

            it("test the contains in AddProduct component", function () {
                cy.contains('Add Product')
                cy.contains('Is the product imported ?')
                cy.contains('Add to Basket')
                cy.contains('Reset')
        })
    })

        it("test the Baskets component, contains", function () {
            cy.contains('Baskets')
        })

        it("test the Receipts component, contains", function () {
             cy.contains('Receipts')
        })
    }
)