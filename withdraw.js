function Withdraw() {
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [amount, setAmount]     = React.useState(0);
  const ctx = React.useContext(UserContext);

  function validate(field, label){
    if (!field) {
      setStatus('Error: ' + label + ' is a required field');
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
  }

  function handleWithdraw() {
    console.log(`Withdrawl request: $ ${amount}`);
    if (!validate(amount, 'amount')) return;
    ctx.users[0].balance = ctx.users[0].balance - amount;
    setShow(false);
  }

  function clearForm() {
    setAmount(0);
    setShow(true);
  }

  return (
    <Card
      header="Withdraw"
      status={status}
      body={show ? (
          <>
            <p>Balance: ${ctx.users[0].balance}</p>
            Amount<br/>
            <input type="number" className="form-control" id="amount"  value={amount} onChange={e => setAmount(e.currentTarget.value)} /><br/>
            <button type="submit" className="btn btn-light" onClick={handleWithdraw}>Withdraw</button>
          </>
        ) : (
          <>
            <h5>Success!</h5>
            <p>Your funds have been withdrawn from your account.</p>
            <p>New balance: ${ctx.users[0].balance}</p>
            <button type="submit" className="btn btn-light" onClick={clearForm}>Make another withdrawl</button>
          </>
        )}
    />
  );
}