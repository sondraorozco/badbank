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
      ctx[0].balance = ctx[0].balance + values.amount;
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <h1 className="mb-3">Account Deposit</h1>

      <BankForm 
        title="Deposit"
        initialValue={initialValues}
        fields={fields}
        handle={handleDeposit}
        hideBalance={false}
        submitText="Deposit"
        successMessage="The deposited funds have been added to your account."
        successButton="Make another deposit"
      />
    </>
  );
}