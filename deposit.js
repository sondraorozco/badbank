function Deposit() {
  const ctx = React.useContext(UserContext);
  const userId = React.useContext(CurrentUserContext);

  const initialValues = {
    amount: '',
  };

  let fields = [
    {id:"amount", name:"amount", label:"Deposit Amount", type:"number" },
  ];

  function handleDeposit(values) {
    if (values.amount > 0) {
      ctx.users[0].balance = ctx.users[0].balance + Number(values.amount);
      return true;
    } else {
      return false;
    }
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