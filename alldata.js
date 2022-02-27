function AllData() {
  const ctx = React.useContext(UserContext);
  const trx = React.useContext(TransactionContext);


  function UsersList() {
    let balanceSum = 0;

    const usersList = ctx.users.map((user, index) => {
      const { name, email, password, balance } = user;
      balanceSum = balanceSum + Number(balance);
  
      return (
        <tr key={index}>
          <th scope="row">{index + 1}</th>
          <td>{name}</td>
          <td>{email}</td>
          <td>{password}</td>
          <td className="text-end">{Number(balance).toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</td>
        </tr>      
      );
    });

    return (
      <>
        <Card
          header="View All User Accounts"
          customStyle={{ maxWidth: "100%" }}
          body={ 
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Password</th>
                  <th scope="col" className="text-end">Balance</th>
                </tr>
              </thead>
              <tbody>
                {usersList}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="5" className="text-end"><strong>Total Bank Holdings: {Number(balanceSum).toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</strong></td>
                </tr>
              </tfoot>
            </table>
          }  
        />
      </>
    );
  }
  
  function TransactionList() {
    const transactionList = trx.transactions.map((item, index) => {
      const { email, amount, type, balance } = item;
  
      return (
        <tr key={index}>
          <th scope="row">{index + 1}</th>
          <td>{type}</td>
          <td className="text-end">{Number(amount).toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</td>
          <td className="text-end">{Number(balance).toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</td>
        </tr>      
      );
    });

    return (
      <>
        <Card
          header={`View Session Transactions (for user: ${ctx.users[0].email})`}
          customStyle={{ maxWidth: "100%" }}
          body={ 
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Type</th>
                  <th scope="col" className="text-end">Amount</th>
                  <th scope="col" className="text-end">Balance</th>
                </tr>
              </thead>
              <tbody>
                {transactionList}
              </tbody>
            </table>
          }  
        />
      </>
    );
  }
  
  return (
    <>
      <h1>Admin Console: All Data</h1>
      <UsersList />
      <TransactionList />
    </>
  );

}
