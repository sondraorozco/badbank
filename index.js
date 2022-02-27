function Spa() {
  return (
      <HashRouter>
        <NavBar/>
        <div className="container">
          <UserContext.Provider value={{users:[{name:'Jane',email:'jane@email.com',password:'secret123',balance:100}]}}>
          <TransactionContext.Provider value={{transactions:[{email:'jane@email.com',type:"opening deposit", amount:100, balance:100}]}}>
            <Route path="/" exact component={Home} />
            <Route path="/createaccount" component={CreateAccount} />
            <Route path="/deposit" component={Deposit} />
            <Route path="/withdraw" component={Withdraw} />
            <Route path="/alldata" component={AllData} />
          </TransactionContext.Provider>
          </UserContext.Provider>
        </div>
      </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);