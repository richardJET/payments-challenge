# Payments Challenge

## Objective

Design and implement a user interface for a simplified payment processing application using React. Your UI should be able to conceptually integrate with a mock payment service and include a design for a plugin system that facilitates the easy addition of new payment methods or services.

## Requirements:

### Frontend:
- Create a user-friendly interface using React that enables users to select from multiple payment methods.
- The UI should feature at least:
  - A menu for selecting different payment methods.
  - A dynamic payment form that adjusts according to the selected payment method.
  - A confirmation page displayed after a simulated payment process.

### Plugin System Concept:
- Develop a conceptual framework for a plugin system within your application that allows for the straightforward integration of new payment methods without needing to alter the core codebase. Your submission should detail:
- How the plugin system would function.
- A mock-up or comprehensive description of integrating a new payment method plugin.

## Setup
To run the payment processing application, follow these steps:

### Prerequisites
- Node.js installed on your machine. You can download it from [here](https://nodejs.org/).

To run this application locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/richardJET/payments-challenge

2. **Navigate to the Project Directory**:
    ```npm
    cd payments-challenge

3. **Install dependencies**:
    ```npm
    npm install

4. **Start the Development Server**:
    ```npm
    npm install

## Project Overview

1. **User Interface**:
- This project uses React to build a Single Page Application (SPA) that dynamically renders based on user input.
- Each page or feature is held in their own component for organization and maintainability.

2. **Plugin System**:
- To achieve a plugin system where new methods can be easily added I made the form and navigation modular depending on the fields required and details of the payment method.
  - Form inputs are broken down to individual components.
  - paymentsPlugins.json contains the payment methods and you can use this file to add or remove payment methods.

## Plugin System
The paymentsPlugin.json file provides the payment method information to the application, making it easy to add, edit, or remove payment methods without altering the codebase.

The information provided for each payment method includes:
- the name of the payment method as the object key.
- the information on the fields used for the payment method depending on the user infomation needed to process payment.
- API endpoints to provide the user information to process the payment. (Note: the API endpoints in the plugin file aren't valid and are for testing purposes only)
- Image details

To add a new plugin simply edit the paymentPlugins.json file by adding an object with the following format:

```
[Payment Method Name]: {
    "fields":{
        [field]: {
            "label": [input label that appears on form],
            "required": [true if input information is required]
        },
        [Repeat as necessary]
    },
    "icon":{
        "src": [image URL],
        "alt": [Image description for accessibility purposes]
    },
    "apiUrl": [API endpoint to send user data to payment processors]
}

```





