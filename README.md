# Payoo Money Management App

This is a simple money management app built using **JavaScript**, **HTML**, and **Tailwind CSS**. The app allows users to **add money** to their balance and **cash out** using basic form inputs, while ensuring functionality through event handling and DOM manipulation.

## Features
- **Add Money Functionality**: Users can input the amount they want to add to their balance.
- **Pin Verification**: Users need to enter the correct pin to successfully add money. Incorrect pin entries will fail.
- **Cashout Functionality**: Users can cash out by subtracting money from their balance.
- **UI Updates**: The app dynamically updates the balance on the screen after adding or cashing out money.

## Technologies Used
- **JavaScript**: Handles event listeners, form submission, and DOM manipulation.
- **HTML**: Basic structure and form elements.
- **Tailwind CSS**: For styling the UI.

## How It Works
1. The app adds an event listener to the "Add Money" button, which listens for form submissions.
2. The form submission is handled without reloading the page by using `preventDefault`.
3. The app verifies the **pin number** entered by the user. If the pin is incorrect, the balance is not updated, and a failure message is displayed.
4. Upon entering the correct pin, the app retrieves the user's **current balance**, adds the new amount, and updates the balance in the UI.

## Setup & Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/Shams-Saniat/Payoo-mobile-bank.git
