import { loginMappings } from './login.mappings.js'
import { UserCollectionData } from '../../data/users/users.data.js'

export class LoginPage {
  constructor(page) {
    this.page = page
    this.usernameInput = page.locator(loginMappings.usernameInput)
    this.passwordInput = page.locator(loginMappings.passwordInput)
    this.loginButton = page.locator(loginMappings.loginButton)
  }
  async login() {
    const validUser = UserCollectionData.find(user => user.userType === 'valid-user') 

    await this.page.goto('/') 
    await this.usernameInput.fill(validUser.username)  
    await this.passwordInput.fill(validUser.password) 
    await this.loginButton.click() 
  }
}
