function AllData() {
  const ctx = React.useContext(UserContext);
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
      <h1>Admin Console: All Data</h1>
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
