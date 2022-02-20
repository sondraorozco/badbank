function Spa() {
  return (
    // <div className="container">
      <HashRouter>
        <NavBar/>
        <div className="container">
          <UserContext.Provider value={{users:[{name:'jane',email:'jane@email.com',password:'secret',balance:100}]}}>
            <Route path="/" exact component={Home} />
            <Route path="/createaccount" component={CreateAccount} />
            <Route path="/login" component={Login} />
            <Route path="/deposit" component={Deposit} />
            <Route path="/withdraw" component={Withdraw} />
            <Route path="/alldata" component={AllData} />
          </UserContext.Provider>
        </div>
      </HashRouter>
    // </div>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);