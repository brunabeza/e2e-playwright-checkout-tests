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

```bash
git clone https://github.com/your-username/e2eecomerce.git
cd e2eecomerce
```

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

Evidence from the test report:
![image](https://github.com/user-attachments/assets/5e9e1cb2-a1d4-46f3-af95-2f69ae5dbdec)

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

Evidence from github action:
![image](https://github.com/user-attachments/assets/14178d55-209c-4746-86e6-943342c19403)
![image](https://github.com/user-attachments/assets/b64261f5-f3c5-4ffa-affc-0187f98497d9)
![image](https://github.com/user-attachments/assets/ffec3450-1f0d-4c2f-b48b-78bc10c71af9)

## 👩‍💻 Author

Bruna Beza da Silva Gonçalves

## 📄 License

This project is licensed under the ISC License.
