import { checkoutMappings } from './checkout.mappings'
import { CheckoutCollectionData } from '../../data/checkout/checkout.data.js'
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
  
    async fillCheckoutForm() {
      const checkoutData = CheckoutCollectionData[0]
  
      await this.checkoutButton.click()
      await this.firstNameInput.fill(checkoutData.firstName)
      await this.lastNameInput.fill(checkoutData.lastName)
      await this.postalCodeInput.fill(checkoutData.postalCode)
      await this.continueButton.click()
    }
  
    async completeCheckout() {
        await this.finishButton.click()
    }
  }

