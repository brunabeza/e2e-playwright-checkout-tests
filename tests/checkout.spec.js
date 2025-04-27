const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductPage } = require('../pages/ProductPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');
const { ConfirmationPage } = require('../pages/ConfirmationPage');

test('deve completar um fluxo de compra com sucesso', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const confirmationPage = new ConfirmationPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await productPage.addProductToCart();
  await productPage.goToCart();
  await cartPage.checkout();
  await checkoutPage.fillCheckoutForm('João', 'Silva', '12345');
  await checkoutPage.finishPurchase();
  await confirmationPage.assertOrderComplete();
});
