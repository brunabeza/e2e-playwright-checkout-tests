const { test, expect } = require('@playwright/test')
import { LoginPage } from '../pages-object/login/login.page'
import { ProductPage } from '../pages-object/product/produtc.pages'
import { CheckoutPage } from '../pages-object/checkout/checkout.page'

const { UserCollectionData } = require('../data/users/users.data')

test('Should be able a successful checkout', async ({ page }) => {

  const loginPage = new LoginPage(page)
  const validUser = UserCollectionData.find(user => user.userType === 'valid-user')
  const productPage = new ProductPage(page)
  const checkoutPage = new CheckoutPage(page)
  
  await loginPage.login(validUser.username, validUser.password)
  
  await productPage.addProductsToCart()
  await productPage.goToCart()
  await expect(page.getByText('Your Cart')).toBeVisible()
  
  await checkoutPage.checkout()
  await expect(page.getByText('Checkout: Overview')).toBeVisible()
  await checkoutPage.finish()
  
  await expect(page.getByText('Checkout: Complete!')).toBeVisible()
  await expect(page.getByText('Thank you for your order!')).toBeVisible()
  

})
