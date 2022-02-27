# BadBank

## Project Description
This React app was a portfolio assignment for the MIT xPro Professional Certificate in Coding: Full Stack Development with MERN course. This app simulates a typical banking experience, where a user can make deposits and withdrawals, and can see their account balance. This app is an exercise in building frontend user experiences with React, and no real money is exchanged through this app.

### Project requirements
* Navigation bar using Routing and styled with Bootstrap
* Homepage
* Create Account page with a form that contains name, email, and password fields
* Deposit page which accepts an amount and adds it to the user's balance
* Withdraw page which accepts an amount and deducts it from the user's balance
* All Data page that tracks users added through the Create Account form
* App deployed to AWS

### Additional features
* BankForm component to be used by CreateAccount, Deposit, and Withdraw components
* Used NavBar React Router component instead of Link in nav bar to take advantage of active link styling that is built in
* Tracking of deposit and withdraw transactions from the session in context and displaying transaction list on All Data page
* Additional routing links on homepage (outside of nav)
* Additional form validation (e.g. check for valid email address)
* "Total Bank Holdings" on All Data page displays sum of all user account balances
* Additional styling on homepage and a time-based greeting to the user ("Good morning"/"Good afternoon"/"Good evening")


## How to run
TBD

## Roadmap
A list of things I'd like to improve:
[ ] Use create-react-app instead of standalone app
[ ] Add tests
[ ] Make homepage design responsive
[ ] Add a login page to switch context of the current user

