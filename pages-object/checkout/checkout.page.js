import { checkoutMappings } from './checkout.mappings'
  export class CheckoutPage {
    constructor(page) {
      this.page = page
      this.firstNameInput = page.locator(checkoutMappings.firstNameInput)
      this.lastNameInput = page.locator(checkoutMappings.lastNameInput)
      this.postalCodeInput = page.locator(checkoutMappings.postalCodeInput)
      this.continueButton = page.locator(checkoutMappings.continueButton)
      this.checkoutButton = page.locator(checkoutMappings.checkoutButton)
      this.finishButton = page.locator(checkoutMappings.finishButton)
    }
  
    async checkout() {
        await this.checkoutButton.click()
        await this.firstNameInput.fill('John')
        await this.lastNameInput.fill('Doe')
        await this.postalCodeInput.fill('12345')
        await this.continueButton.click()
      }
  
    async finish() {
        await this.finishButton.click()
    }
  }

