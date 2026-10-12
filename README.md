# SEG 3502 Lab 4

This Angular application uses a reactive form to collect a user's first name, last name, phone number and email address. It validates the submitted information and displays valid data in a table on a separate result page.

## Run the project

Install a current Node.js LTS release and Git, then run:

```bash
git clone https://github.com/AmaniM05/Lab4.git
cd Lab4
npm install
npm start
```

Open [http://localhost:4200](http://localhost:4200) in a browser.

## Validation rules

- First name and last name are required.
- Phone number is optional. When provided, it must contain 10 digits, and the first and fourth digits cannot be zero.
- Email is optional. When provided, it must be a valid email address.

After a valid submission, the application navigates to `/result` and displays the entered information in a table.

## Build and tests

```bash
npm run build
npm test -- --watch=false --browsers=ChromeHeadless
```
