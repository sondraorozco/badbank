function Deposit() {
  const ctx = React.useContext(UserContext);
  const userId = React.useContext(CurrentUserContext);

  const initialValues = {
    amount: 0,
  };

  let fields = [
    {id:"amount", name:"amount", label:"Deposit Amount", type:"text" },
  ];

  function handleDeposit(values) {
    console.log('Submitting deposit: ' + values.amount);
    console.log();

    // validate form fields and store any errors
    const errors = {};
    if (!values.amount) {
      errors.amount = "Please enter the amount to deposit"
    } else if (isNaN(values.amount)) {
      errors.amount = "Amount must be a number"
    } else if (values.amount < 0) {
      errors.amount = "The deposit amount can not be negative"
    };

    // if no errors found, update user's account balance
    if (Object.keys(errors).length === 0) {
      ctx.users[0].balance = ctx.users[0].balance + Number(values.amount);
      console.log('Depositing: $' + values.amount + '; new balance: $' + ctx.users[0].balance);
    }

    return errors;
  };

  return (
    <>
      <h1 className="mb-3">Account Deposit</h1>

      <BankForm 
        header="Deposit"
        initialValues={initialValues}
        fields={fields}
        handle={handleDeposit}
        showBalance={true}
        submitText="Deposit"
        successMessage="The deposited funds have been added to your account."
        successButton="Make another deposit"
      />
    </>
  );
}