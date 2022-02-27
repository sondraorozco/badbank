function Spa() {
  return (
      <HashRouter>
        <NavBar/>
        <div className="container">
          <UserContext.Provider value={{users:[{name:'Jane',email:'jane@email.com',password:'secret123',balance:100}]}}>
          <CurrentUserContext.Provider value={0}>
            <Route path="/" exact component={Home} />
            <Route path="/createaccount" component={CreateAccount} />
            <Route path="/login" component={Login} />
            <Route path="/deposit" component={Deposit} />
            <Route path="/withdraw" component={Withdraw} />
            <Route path="/alldata" component={AllData} />
          </CurrentUserContext.Provider>
          </UserContext.Provider>
        </div>
      </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);