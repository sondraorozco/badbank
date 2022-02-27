function Withdraw() {
  const ctx = React.useContext(UserContext);
  const userId = React.useContext(CurrentUserContext);

  const initialValues = {
    amount: '',
  };

  let fields = [
    {id:"amount", name:"amount", label:"Withdrawl Amount", type:"text" },
  ];

  function handleWithdraw(values) {
    // validate form fields and store any errors
    const errors = {};
    if (!values.amount) {
      errors.amount = "Please enter the withdrawl amount"
    } else if (isNaN(values.amount)) {
      errors.amount = "Amount must be a number"
    } else if (values.amount > ctx.users[0].balance) {
      errors.amount = "Insufficient funds"
    };

    // if no errors found, update user's account balance
    if (Object.keys(errors).length === 0) {
      ctx.users[0].balance = ctx.users[0].balance - Number(values.amount);
      console.log('Withdrawing: $' + values.amount + '; new balance: $' + ctx.users[0].balance);
    }

    return errors;
  };

  return (
    <>
      <BankForm 
        header="Withdraw"
        initialValues={initialValues}
        fields={fields}
        handle={handleWithdraw}
        showBalance={true}
        submitText="Withdraw"
        successMessage="The requested funds have been withdrawn from your account."
        successButton="Make another withdrawl"
      />
    </>
  );
}