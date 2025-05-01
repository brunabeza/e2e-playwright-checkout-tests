import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages-object/login/login.page'
import { ProductPage } from '../pages-object/product/produtc.pages'
import { CheckoutPage } from '../pages-object/checkout/checkout.page'
import { ProductCollectionData } from '../data/product/product.data.js'

test('Should complete the checkout process successfully', async ({ page }) => {
  
  const loginPage = new LoginPage(page)
  const productPage = new ProductPage(page)
  const checkoutPage = new CheckoutPage(page)

  await loginPage.login()

  await productPage.addProductsToCart()
  await productPage.goToCart()

  for (const product of ProductCollectionData) {
    await expect(page.getByText(product.name)).toBeVisible();
  }

  await checkoutPage.fillCheckoutForm()

  await checkoutPage.completeCheckout()
  
  await expect(page.getByText('Checkout: Complete!')).toBeVisible()
  await expect(page.getByText('Thank you for your order!')).toBeVisible()
})
