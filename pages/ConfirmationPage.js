const { expect } = require('@playwright/test');

class ConfirmationPage {
  constructor(page) {
    this.page = page;
    this.completeHeader = page.locator('.complete-header');
  }

  async assertOrderComplete() {
    await expect(this.completeHeader).toHaveText('Thank you for your order!');
  }
}

module.exports = { ConfirmationPage };
