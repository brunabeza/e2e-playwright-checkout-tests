# E2E Ecommerce Checkout Tests with Playwright

This project implements end-to-end (E2E) tests using [Playwright](https://playwright.dev/) to automate a complete checkout process on an ecommerce platform (https://www.saucedemo.com). It follows the Page Object Model (POM) to promote code reuse and maintainability.

## 📁 Project Structure

```
├── .github/workflows/        # GitHub Actions CI configuration
├── data/                     # Test data
│   ├── checkout/             # Checkout form data
│   ├── product/              # Product information
│   └── users/                # Login credentials
├── pages-object/            # Page Objects organized by domain
│   ├── checkout/            # Checkout page elements and actions
│   ├── login/               # Login page elements and actions
│   └── product/             # Product listing/cart interactions
├── playwright-report/       # Playwright HTML reports
├── test-results/            # Raw test result data
├── tests/                   # Test specifications
│   └── checkout.spec.js     # Main test case for checkout flow
├── .gitignore               # Files ignored by Git
├── playwright.config.js     # Playwright configuration
├── package.json             # Project metadata and scripts
├── package-lock.json        # Dependency lock file
└── README.md                # Project documentation
```

## 🚀 Getting Started

### 1. Clone the repository

<<<<<<< HEAD
```bash
git clone https://github.com/your-username/e2eecomerce.git
cd e2eecomerce
```
=======
* `data/`: Directory containing data files for different parts of the application.
	+ `users.data.js`: Data file for the user schema.
	+ `products.data.js`: Data file for the product schema.
* `pages-object/`: Directory containing page object files for different parts of the application.
	+ `login/`: Directory containing page object files for the login feature.
		- `login.mappings.js`: Page object file for the login mappings.
		- `login.page.js`: Page object file for the login page.
	+ `product/`: Directory containing page object files for the product feature.
		- `product.mappings.js`: Page object file for the product mappings.
		- `product.page.js`: Page object file for the product page.
	+ `checkout/`: Directory containing page object files for the checkout feature.
		- `checkout.mappings.js`: Page object file for the checkout mappings.
		- `checkout.page.js`: Page object file for the checkout page.
* `tests/`: Directory containing test files for different parts of the application.
	+ `checkout.spec.js`: Test file for the checkout feature.
>>>>>>> 25493c81e95dcbb19ebf4ff4b9b62b5a68ccc56e

### 2. Install dependencies

```bash
npm install
```

### 3. Run the tests (headless)

```bash
npm test
```

### 4. Run tests with browser UI (headed mode)

```bash
npm run test:headed
```

### 5. Open the last test report

```bash
npm run test:report
```

### 6. Debug mode

```bash
npm run test:debug
```

## 🧪 Scripts

| Command              | Description                            |
|---------------------|----------------------------------------|
| `npm test`          | Executes all tests in headless mode    |
| `npm run test:headed` | Runs tests with browser UI           |
| `npm run test:report` | Opens the HTML test report           |
| `npm run test:debug`  | Runs tests in debug mode             |

## 📦 Features Covered

- Completing the checkout process successfully

## 🛠 Technologies Used

- [Playwright](https://playwright.dev/)
- [Node.js](https://nodejs.org/)
- Page Object Model (POM) design pattern

## ✅ CI Integration

Tests are automatically triggered by GitHub Actions via `.github/workflows/e2e.yml`.

## 👩‍💻 Author

Bruna Beza da Silva Gonçalves

## 📄 License

This project is licensed under the ISC License.
