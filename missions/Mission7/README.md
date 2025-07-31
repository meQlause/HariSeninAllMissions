# API Overview

This application uses Firebase as its backend and implements a simple API to manage product ownership and payment transactions. The API interacts with two main collections in the Firebase database:

## Collections

- **owned_products**: Stores products that have been purchased by users. When a purchase is completed, the product data is added or updated in this collection using the PUT method, reflecting the change in ownership state.
- **pending_txs**: Stores transactions that are currently in progress (i.e., payments that have not yet been completed). Data is added to this collection using the POST method when a payment process starts. Once the payment is completed, the transaction is removed from `pending_txs` (using the DELETE method) and added to `owned_products`.

## HTTP Methods Used

This application demonstrates the use of all four main HTTP methods:

- **GET**: Retrieves static product data, which is served directly from a Firebase serverless function.
- **POST**: Adds a new pending transaction to the `pending_txs` collection when a user initiates a payment.
- **PUT**: Updates the `owned_products` collection to reflect a completed purchase, changing the ownership state of a product.
- **DELETE**: Removes a transaction from the `pending_txs` collection once the payment is complete and the product has been added to `owned_products`.

This design ensures a clear separation between products in progress (pending payment) and products that have been purchased, while also providing a complete example of CRUD (Create, Read, Update, Delete) operations in a Firebase-backed application.
