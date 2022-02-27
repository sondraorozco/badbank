function CreateAccount() {
  const ctx = React.useContext(UserContext);

  const initialValues = {
    name: '',
    balance: '',
    email: '',
    password: ''
  };

  let fields = [
    {id:"name", name:"name", label:"Name", type:"text", placeholder: "Michael Scott" },
    {id:"balance", name:"balance", label:"Initial Deposit", type:"text", placeholder:"100"},
    {id:"email", name:"email", label:"Email", type:"email", placeholder: "michael@dundermifflin.net" },
    {id:"password", name:"password", label:"Password", type:"password", placeholder: "Enter a password" },
  ];

  function handleCreateAccount(values) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // validate form fields and store any errors
    const errors = {};
    if (!values.name) {
      errors.name = "Name is a required field"
    };

    if (!values.balance) {
      errors.balance = "An initial deposit is required"
    } else if (isNaN(values.balance)) {
      errors.balance = "Amount must be a number"
    } else if (values.balance < 100) {
      errors.balance = "A minimum initial deposit of $100 is required"
    };

    if (!values.email) {
      errors.email = "Email is a required field"
    } else if (!regex.test(values.email)) {
      errors.email = "Must be a valid email address"
    };

    if (!values.password) {
      errors.password = "Password is a required field"
    } else if (values.password.length < 8) {
      errors.password = "Your password must be at least 8 characters"
    };

    // if no errors found, update user's account balance
    if (Object.keys(errors).length === 0) {
      ctx.users.push({...values});
    }

    return errors;
  };

  return (
    <>
      <BankForm 
        header="Create Account"
        initialValues={initialValues}
        fields={fields}
        handle={handleCreateAccount}
        showBalance={false}
        submitText="Create account"
        successMessage="Your account has been created."
        successButton="Add another account"
      />
    </>
  );
}