import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages-object/login/login.page'
import { ProductPage } from '../pages-object/product/produtc.pages'
import { CheckoutPage } from '../pages-object/checkout/checkout.page'
import { ProductCollectionData } from '../data/product/product.data.js'
import { productMappings } from '../pages-object/product/product.mappings.js'

test('Should complete the checkout process successfully', async ({ page }) => {
  
  const loginPage = new LoginPage(page)
  const productPage = new ProductPage(page)
  const checkoutPage = new CheckoutPage(page)

  await loginPage.login()

  await productPage.addProductsToCart()
  await productPage.goToCart()

  
  for (let i = 0; i < ProductCollectionData.length; i++) {
    const product = ProductCollectionData[i];
  
    await expect(page.getByText(product.name)).toBeVisible()
  
    await expect(
      page.locator(productMappings.quantityLocator).nth(i)
    ).toHaveText(String(product.quantity))
  
    await expect(
      page.locator(productMappings.priceLocator).nth(i)
    ).toHaveText(`$${product.price.toFixed(2)}`)
  }

  await checkoutPage.fillCheckoutForm()
  await checkoutPage.completeCheckout()
  
  await expect(page.getByText('Checkout: Complete!')).toBeVisible()
  await expect(page.getByText('Thank you for your order!')).toBeVisible()
})

test('Should display error when trying to checkout with empty form fields', async ({ page }) => {

  const loginPage = new LoginPage(page)
  const productPage = new ProductPage(page)
  const checkoutPage = new CheckoutPage(page)

  await loginPage.login()

  await productPage.addProductsToCart()
  await productPage.goToCart()

  await checkoutPage.checkoutButton.click()

  await checkoutPage.continueButton.click()

  await expect(page.getByText('Error: First Name is required')).toBeVisible()
})