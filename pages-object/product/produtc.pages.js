import { productMappings } from './product.mappings.js'
export class ProductPage {
  constructor(page) {
    this.page = page
    this.addBackPackCartButton = page.locator(productMappings.addBackPackCartButton)
    this.addTShirtCartButton = page.locator(productMappings.addTShirtCartButton)
  }

  async addProductsToCart() {
    await this.addBackPackCartButton.click()
    await this.addTShirtCartButton.click()
  }

  async goToCart() {
    await this.page.locator(productMappings.cartButton).click()
  }
}
  
 
  
