# Thahrav Backend API Requirements

This document outlines all necessary API endpoints required for the Thahrav e-commerce platform.

## Authentication Endpoints

| Method | Path                      | Purpose                                           | Request Body                                      | Response                                        |
|--------|---------------------------|---------------------------------------------------|---------------------------------------------------|------------------------------------------------|
| POST   | `/api/auth/register`      | Register a new user                               | `{ fullName, email, password }`                   | `{ user, token }`                              |
| POST   | `/api/auth/login`         | Authenticate a user                               | `{ email, password }`                             | `{ user, token }`                              |
| POST   | `/api/auth/forgot-password` | Request password reset                          | `{ email }`                                       | `{ message }`                                  |
| POST   | `/api/auth/reset-password`  | Reset password with token                       | `{ token, password, confirmPassword }`            | `{ message }`                                  |
| GET    | `/api/auth/me`            | Get current user profile                          | -                                                 | `{ user }`                                     |
| POST   | `/api/auth/logout`        | Logout user                                       | -                                                 | `{ message }`                                  |

## Product Endpoints

| Method | Path                      | Purpose                                           | Request Body                                      | Response                                        |
|--------|---------------------------|---------------------------------------------------|---------------------------------------------------|------------------------------------------------|
| GET    | `/api/products`           | Get all products with filtering and pagination    | Query params: `category`, `page`, `limit`, etc.   | `{ products, total, page, limit }`             |
| GET    | `/api/products/:id`       | Get a single product by ID                        | -                                                 | `{ product }`                                  |
| GET    | `/api/products/categories` | Get all product categories                       | -                                                 | `{ categories }`                               |

## Cart Endpoints

| Method | Path                      | Purpose                                           | Request Body                                      | Response                                        |
|--------|---------------------------|---------------------------------------------------|---------------------------------------------------|------------------------------------------------|
| GET    | `/api/cart`               | Get user's cart                                   | -                                                 | `{ items, subtotal, total }`                   |
| POST   | `/api/cart/items`         | Add item to cart                                  | `{ productId, quantity, size }`                   | `{ cart }`                                     |
| PUT    | `/api/cart/items/:itemId` | Update cart item quantity                         | `{ quantity }`                                    | `{ cart }`                                     |
| DELETE | `/api/cart/items/:itemId` | Remove item from cart                             | -                                                 | `{ cart }`                                     |
| DELETE | `/api/cart`               | Clear cart                                        | -                                                 | `{ message }`                                  |

## Order Endpoints

| Method | Path                      | Purpose                                           | Request Body                                      | Response                                        |
|--------|---------------------------|---------------------------------------------------|---------------------------------------------------|------------------------------------------------|
| GET    | `/api/orders`             | Get user's orders                                 | Query params: `status`, `page`, `limit`           | `{ orders, total, page, limit }`               |
| GET    | `/api/orders/:id`         | Get a single order by ID                          | -                                                 | `{ order }`                                    |
| POST   | `/api/orders`             | Create a new order                                | `{ shippingAddress, paymentMethod }`              | `{ order }`                                    |
| GET    | `/api/orders/:id/track`   | Get tracking information for an order             | -                                                 | `{ tracking }`                                 |

## User Profile Endpoints

| Method | Path                      | Purpose                                           | Request Body                                      | Response                                        |
|--------|---------------------------|---------------------------------------------------|---------------------------------------------------|------------------------------------------------|
| PUT    | `/api/profile`            | Update user profile                               | `{ fullName, email, phone, etc. }`                | `{ user }`                                     |
| PUT    | `/api/profile/password`   | Update password                                   | `{ currentPassword, newPassword }`                | `{ message }`                                  |
| GET    | `/api/profile/addresses`  | Get user's saved addresses                        | -                                                 | `{ addresses }`                                |
| POST   | `/api/profile/addresses`  | Add a new address                                 | `{ address details }`                             | `{ address }`                                  |
| PUT    | `/api/profile/addresses/:id` | Update an address                              | `{ address details }`                             | `{ address }`                                  |
| DELETE | `/api/profile/addresses/:id` | Delete an address                              | -                                                 | `{ message }`                                  |

## Checkout Endpoints

| Method | Path                      | Purpose                                           | Request Body                                      | Response                                        |
|--------|---------------------------|---------------------------------------------------|---------------------------------------------------|------------------------------------------------|
| POST   | `/api/checkout/validate`  | Validate cart items and shipping address          | `{ addressId }`                                   | `{ valid, errors }`                            |
| POST   | `/api/checkout/payment`   | Process payment                                   | `{ paymentMethod, paymentDetails }`               | `{ success, orderId }`                         |
| GET    | `/api/checkout/shipping-methods` | Get available shipping methods             | Query params: `addressId`                         | `{ methods }`                                  |

## Notes for Implementation

1. All endpoints should require authentication except:
   - `/api/auth/login`
   - `/api/auth/register`
   - `/api/auth/forgot-password`
   - `/api/auth/reset-password`
   - `/api/products` (GET)
   - `/api/products/:id` (GET)
   - `/api/products/categories` (GET)

2. Authentication should be implemented using JWT tokens:
   - Tokens should be sent in the Authorization header
   - Tokens should expire after a reasonable time (e.g., 24 hours)
   - Refresh token mechanism should be implemented

3. Error handling:
   - All endpoints should return appropriate HTTP status codes
   - Error responses should include a message and, when applicable, validation errors

4. Rate limiting:
   - Implement rate limiting for authentication endpoints to prevent brute force attacks

5. Data validation:
   - All input data should be validated before processing
   - Sanitize user inputs to prevent XSS and injection attacks
\`\`\`

Now, let's create the Flow.md file:
