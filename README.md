# e2eEComerce

E2E EComerce is a full-stack e-commerce application built with Node.js, Express, and MongoDB. It is a simple application that allows users to create an account, log in, and purchase products.

## Features

* Checkout process with payment processing

## Structure

The project is structured as follows:

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

## Requirements

* Node.js 14+
* Playwright

## Installation

1. Clone the repository: `git clone https://github.com/brunabeza/e2eEComerce.git`
2. Install dependencies: `npm install`
3. Start the application: `npm start`

## Running Tests

1. Install Playwright: `npm install playwright`
2. Run tests: `npm test`


## Authors

* Bruna Beza

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
