import { productMappings } from './product.mappings.js'
import { ProductCollectionData } from '../../data/product/product.data.js'

export class ProductPage {
  constructor(page) {
    this.page = page
    this.addBackPackCartButton = page.locator(productMappings.addBackPackCartButton)
    this.addJacketCartButton = page.locator(productMappings.addJacketCartButton)
  }

  async addProductsToCart() {
    for (const product of ProductCollectionData) {
      await this.page.locator(product.selector).click()
    }
  }

  async goToCart() {
    await this.page.locator(productMappings.cartButton).click()
  }
}
  
 
  
