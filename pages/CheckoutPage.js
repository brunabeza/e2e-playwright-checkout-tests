class CheckoutPage {
    constructor(page) {
      this.page = page;
      this.firstNameInput = page.locator('input[data-test="firstName"]');
      this.lastNameInput = page.locator('input[data-test="lastName"]');
      this.postalCodeInput = page.locator('input[data-test="postalCode"]');
      this.continueButton = page.locator('input[data-test="continue"]');
      this.finishButton = page.locator('button[data-test="finish"]');
    }
  
    async fillCheckoutForm(firstName, lastName, postalCode) {
      await this.firstNameInput.fill(firstName);
      await this.lastNameInput.fill(lastName);
      await this.postalCodeInput.fill(postalCode);
      await this.continueButton.click();
    }
  
    async finishPurchase() {
      await this.finishButton.click();
    }
  }
  
  module.exports = { CheckoutPage };
  